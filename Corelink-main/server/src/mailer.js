// SMTP setup plus the diagnostics needed to tell *why* mail is not going out —
// the common causes (host blocks outbound SMTP, wrong credentials, missing env
// vars) look identical from the outside otherwise.

import nodemailer from "nodemailer";

const trimmed = (value) => (typeof value === "string" ? value.trim() : "");
const env = (key) => trimmed(process.env[key]);

// Gmail shows app passwords in groups of four; the spaces are for readability
// and must be stripped, otherwise auth fails with a valid-looking password.
const smtpPassword = () => env("SMTP_PASS").replace(/\s+/g, "");

export const mailConfig = () => ({
  host: env("SMTP_HOST"),
  port: Number(env("SMTP_PORT")) || 587,
  secure: env("SMTP_SECURE") === "true",
  user: env("SMTP_USER"),
  pass: smtpPassword(),
});

export const isMailConfigured = () => {
  const { host, user, pass } = mailConfig();
  return Boolean(host && user && pass);
};

export const createTransporter = () => {
  const { host, port, secure, user, pass } = mailConfig();

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
    // Fail in seconds rather than minutes. A host that silently drops outbound
    // SMTP shows up as a hang, which would otherwise tie up the request.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
};

// Coarse, non-secret summary of the last SMTP attempt. Safe to expose over HTTP:
// it never includes the host, user, password or raw server response.
let lastStatus = isMailConfigured() ? "unverified" : "not-configured";

export const mailStatus = () => lastStatus;

/** Classify an SMTP failure into something actionable. */
export const classifyMailError = (err) => {
  const code = trimmed(err?.code).toUpperCase();
  const responseCode = err?.responseCode;

  if (code === "EAUTH" || responseCode === 535 || responseCode === 534) return "auth-failed";
  if (code === "ETIMEDOUT" || code === "ESOCKET" || code === "ECONNECTION") return "unreachable";
  if (code === "ECONNREFUSED") return "refused";
  if (code === "EDNS" || code === "ENOTFOUND") return "dns-failed";
  if (code === "EENVELOPE") return "bad-envelope";
  return code ? `error-${code.toLowerCase()}` : "error";
};

/** Log the full failure to the server log, where secrets are not a concern. */
export const logMailError = (label, err) => {
  const { host, port, secure, user } = mailConfig();
  console.error(`${label}:`, {
    status: classifyMailError(err),
    code: err?.code,
    command: err?.command,
    responseCode: err?.responseCode,
    response: err?.response,
    message: err?.message,
    smtp: { host, port, secure, user: user ? `${user.slice(0, 3)}…` : "(unset)" },
  });
};

/**
 * Open a connection and authenticate without sending anything. Called at
 * startup so the deployment log says immediately whether SMTP works.
 */
export const verifyMail = async () => {
  if (!isMailConfigured()) {
    const { host, user, pass } = mailConfig();
    lastStatus = "not-configured";
    console.error("SMTP not configured — missing:", {
      SMTP_HOST: host ? "set" : "MISSING",
      SMTP_USER: user ? "set" : "MISSING",
      SMTP_PASS: pass ? "set" : "MISSING",
    });
    return lastStatus;
  }

  const { host, port, secure } = mailConfig();
  try {
    await createTransporter().verify();
    lastStatus = "ok";
    console.log(`SMTP ready (${host}:${port}, secure=${secure})`);
  } catch (err) {
    lastStatus = classifyMailError(err);
    logMailError("SMTP verify failed", err);

    if (lastStatus === "unreachable" || lastStatus === "refused") {
      console.error(
        `Could not open an SMTP connection to ${host}:${port}. If the credentials ` +
          "work locally, the host is likely blocking outbound SMTP — send over an " +
          "HTTPS email API instead."
      );
    }
  }

  return lastStatus;
};

export const setMailStatus = (status) => {
  lastStatus = status;
};
