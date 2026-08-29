import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { resolveApiOrigin, resolveEmailUrls } from "./src/publicUrls.js";
import {
  createTransporter,
  logMailError,
  mailStatus,
  setMailStatus,
  classifyMailError,
  verifyMail,
} from "./src/mailer.js";

dotenv.config();

const serverDir = path.dirname(fileURLToPath(import.meta.url));

const app = express();
// Read the real client protocol/host from the proxy in front of us, so public
// URLs come out as https://your-domain rather than http://internal-host.
app.set("trust proxy", true);
app.use(cors());
app.use(express.json());

// Email assets are served by this API too, so the logo has a reachable URL even
// when the site itself is on a different host.
app.use(express.static(path.join(serverDir, "public"), { maxAge: "7d" }));

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("MONGODB_URI is not set in environment variables");
}

await mongoose.connect(mongoUri, { dbName: process.env.MONGODB_DB || "neuroturing" });

const ContactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    organization: { type: String, trim: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

// escape user input before putting it in an HTML email
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// shared shell: dark header with logo, white body, dark footer.
// siteUrl/logoUrl are resolved per request — see src/publicUrls.js.
const emailLayout = (heading, bodyRows, { siteUrl, logoUrl }) => `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4" style="background-color: #f4f4f4;">
        <tr>
            <td style="text-align: center;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff"
                    style="width: 600px; max-width: 100%; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <!-- Logo -->
                    <tr>
                        <td style="text-align: center; padding-top: 30px; padding-bottom: 30px; border-bottom: 7px solid #3B82F6; background-color: #040B16; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                            ${
                              logoUrl
                                ? `<a href="${siteUrl}"><img src="${logoUrl}" alt="NeuroTuring" style="width: 180px; height: 26px; display: block; margin: 0 auto; border: 0;"></a>`
                                : `<a href="${siteUrl}" style="color: #ffffff; font-size: 22px; font-weight: bold; text-decoration: none;">NeuroTuring</a>`
                            }
                        </td>
                    </tr>
                    <!-- Main Heading -->
                    <tr>
                        <td style="padding: 40px 40px 0 40px; font-size: 28px; font-weight: bold; color: #040B16; text-align: center;">
                            ${heading}
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td style="padding: 30px 40px 40px 40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="8" border="0"
                                style="font-size: 16px; color: #333333;">
                                <tbody>
                                    ${bodyRows}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; text-align: center; color: #ffffff; background-color: #040B16; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                            <div style="text-align: center;">
                                ${
                                  logoUrl
                                    ? `<a href="${siteUrl}"><img src="${logoUrl}" alt="NeuroTuring" style="width: 140px; height: 20px; display: block; margin: 0 auto; padding-bottom: 24px; border: 0;"></a>`
                                    : `<a href="${siteUrl}" style="display: block; padding-bottom: 24px; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none;">NeuroTuring</a>`
                                }
                            </div>
                            <p style="margin: 0 0 14px 0; font-size: 12px; color: #9CA3AF;">
                                AI Predicts &middot; XAI Justifies
                            </p>
                            <p style="margin: 0; font-size: 12px;">
                                <a href="${siteUrl}/privacy-policy" style="color: #9CA3AF; text-decoration: none;">Privacy Policy</a> |
                                <a href="${siteUrl}/terms-and-conditions" style="color: #9CA3AF; text-decoration: none;">Terms &amp; Conditions</a> |
                                <a href="${siteUrl}/cookie-policy" style="color: #9CA3AF; text-decoration: none;">Cookie Policy</a>
                            </p>
                            <p style="margin-top: 10px; font-size: 11px; color: #9CA3AF;">Copyright &copy; ${new Date().getFullYear()} NeuroTuring. All rights reserved</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

const detailRow = (label, value) => `
                                    <tr>
                                        <th style="vertical-align: top; text-align: left; width: 35%; font-weight: bold; color: #040B16;">${label}</th>
                                        <td style="text-align: left; white-space: pre-wrap;">${escapeHtml(value || "(none)")}</td>
                                    </tr>`;

app.get("/api/health", (req, res) => {
  // Echo the resolved URLs so a deployment can be verified without sending mail.
  res.json({
    ok: true,
    db: mongoose.connection.readyState === 1,
    mail: mailStatus(),
    apiUrl: resolveApiOrigin(req),
    ...resolveEmailUrls(req),
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, organization, phone, message } = req.body || {};

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return res
        .status(400)
        .json({ error: "Full name, email and message are required" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: "Please enter a valid email address" });
    }

    const contact = await Contact.create({
      fullName: fullName.trim(),
      email: email.trim(),
      organization: organization?.trim() || "",
      phone: phone?.trim() || "",
      message: message.trim(),
    });

    // prepare email transporter (SMTP)
    const transporter = createTransporter();

    // Record why a send failed so /api/health can report it.
    const onSendError = (label) => (err) => {
      setMailStatus(classifyMailError(err));
      logMailError(label, err);
    };

    const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
    const fromName = process.env.MAIL_FROM_NAME || "NeuroTuring";
    const firstName = contact.fullName.split(" ")[0];
    const emailUrls = resolveEmailUrls(req);

    // send thank-you email (do not block response if it fails)
    const thankYouHtml = emailLayout(
      "Thank You for Contacting Us",
      `
                                    <tr>
                                        <td style="text-align: left; padding-bottom: 20px;">
                                            <p style="margin: 0; font-size: 18px;">Hi <strong>${escapeHtml(firstName)}</strong>,</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: left; padding-bottom: 20px;">
                                            <p style="margin: 0; line-height: 1.6;">Thanks for reaching out to NeuroTuring. We received your message and will get back to you soon.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: left; padding-top: 20px;">
                                            <p style="margin: 0; line-height: 1.6;">Regards,<br/>NeuroTuring Team</p>
                                        </td>
                                    </tr>`,
      emailUrls
    );

    transporter.sendMail({
      from: { name: fromName, address: fromAddress },
      sender: fromAddress,
      replyTo: fromAddress,
      envelope: { from: fromAddress, to: contact.email },
      to: contact.email,
      subject: "Thanks for contacting NeuroTuring",
      text: `Hi ${firstName},\n\nThanks for reaching out to NeuroTuring. We received your message and will get back to you soon.\n\nRegards,\nNeuroTuring Team`,
      html: thankYouHtml,
    })
      .then(() => setMailStatus("ok"))
      .catch(onSendError("Thank-you email failed"));

    // notify admin about new submission (if configured)
    const adminEmail = process.env.SMTP_ADMIN || process.env.SMTP_USER;
    if (adminEmail) {
      const adminHtml = emailLayout(
        "New Contact Submission",
        [
          detailRow("Full Name", contact.fullName),
          detailRow("Email Address", contact.email),
          detailRow("Organization", contact.organization),
          detailRow("Contact Number", contact.phone),
          detailRow("Message", contact.message),
        ].join(""),
        emailUrls
      );

      transporter.sendMail({
        from: { name: fromName, address: fromAddress },
        sender: fromAddress,
        replyTo: contact.email,
        envelope: { from: fromAddress, to: adminEmail },
        to: adminEmail,
        subject: `New contact form submission from ${contact.fullName}`,
        text: `New submission:\nFull Name: ${contact.fullName}\nEmail: ${contact.email}\nOrganization: ${contact.organization || "(none)"}\nContact Number: ${contact.phone || "(none)"}\nMessage:\n${contact.message}`,
        html: adminHtml,
      }).catch(onSendError("Admin email failed"));
    }

    res.status(201).json({ id: contact._id });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Unable to save contact" });
  }
});

// If the built frontend sits next to this server, serve it from here. Site and
// API then share one origin, so the app needs no API URL configured at all.
const clientDir = path.resolve(serverDir, process.env.CLIENT_DIR || "../dist");
const serveClient = process.env.SERVE_CLIENT !== "false" && fs.existsSync(clientDir);

if (serveClient) {
  app.use(express.static(clientDir));

  // SPA fallback: every non-API GET returns index.html so client routing works.
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(clientDir, "index.html"), (err) => {
      if (err) next();
    });
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
  console.log(serveClient ? `Serving client from ${clientDir}` : "Client not served (no build found)");

  // Check SMTP up front so the deploy log says whether mail can go out at all,
  // instead of finding out when someone submits the form.
  verifyMail();
});
