// Public URLs are resolved per request instead of being read once at boot, so
// the same build runs on localhost, an EC2 IP, Netlify, Render, Railway or
// Vercel without editing .env for each host.

const trimmed = (value) => (typeof value === "string" ? value.trim() : "");

const env = (key) => trimmed(process.env[key]);

const stripTrailingSlashes = (value) => value.replace(/\/+$/, "");

// Path of the email logo, relative to whichever origin ends up serving it.
const LOGO_PATH = env("MAIL_LOGO_PATH") || "/emailasset/logo.png";

// Env vars the platform sets for us, describing where this API is published.
const API_ORIGIN_KEYS = [
  "PUBLIC_API_URL", // manual override
  "RENDER_EXTERNAL_URL",
  "RAILWAY_PUBLIC_DOMAIN",
  "VERCEL_PROJECT_PRODUCTION_URL",
  "VERCEL_URL",
  "WEBSITE_HOSTNAME", // Azure App Service
];

// Env vars describing where the public site is published.
const SITE_ORIGIN_KEYS = [
  "PUBLIC_SITE_URL", // manual override
  "SITE_URL", // manual override (kept for backwards compatibility)
  "DEPLOY_PRIME_URL", // Netlify branch deploy / deploy preview
  "URL", // Netlify production
];

// Hosts a mail client can never reach, so they must not win over a public one.
const isPublicHost = (hostname) => {
  const host = trimmed(hostname).toLowerCase();
  if (!host) return false;
  if (host === "localhost" || host.endsWith(".localhost")) return false;
  if (host === "::1" || host === "[::1]" || host === "0.0.0.0") return false;
  if (/^127\./.test(host)) return false;
  if (/^10\./.test(host)) return false;
  if (/^192\.168\./.test(host)) return false;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(host)) return false;
  if (/^169\.254\./.test(host)) return false;
  return true;
};

// Parse loosely (a bare host, a full URL, a trailing slash) into an origin.
const toOrigin = (value) => {
  const raw = trimmed(value);
  if (!raw) return "";
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return stripTrailingSlashes(new URL(candidate).origin);
  } catch {
    return "";
  }
};

// Same as toOrigin but keeps the path, for values that point at a file.
const toAbsoluteUrl = (value) => {
  const raw = trimmed(value);
  if (!raw) return "";
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(candidate).toString();
  } catch {
    return "";
  }
};

const isPublicOrigin = (origin) => {
  if (!origin) return false;
  try {
    return isPublicHost(new URL(origin).hostname);
  } catch {
    return false;
  }
};

const firstOriginFromEnv = (keys) => {
  for (const key of keys) {
    const origin = toOrigin(env(key));
    if (origin) return origin;
  }
  return "";
};

// Comma-separated allowlist for the browser-supplied site origin. Supports "*"
// as a wildcard, either for a whole entry ("*") or inside one
// ("https://*.netlify.app", "*--neuroturing.netlify.app").
const siteOriginPatterns = () =>
  (env("ALLOWED_SITE_ORIGINS") || "*")
    .split(",")
    .map((pattern) => pattern.trim())
    .filter(Boolean);

const originMatchesPattern = (origin, pattern) => {
  if (pattern === "*") return true;

  // Patterns without a scheme are matched against the host only.
  const hasScheme = pattern.includes("://");
  let subject = origin;
  if (!hasScheme) {
    try {
      subject = new URL(origin).host;
    } catch {
      return false;
    }
  }

  const expression = stripTrailingSlashes(pattern)
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\*/g, "[^/]*");

  return new RegExp(`^${expression}$`, "i").test(subject);
};

const isAllowedSiteOrigin = (origin) =>
  Boolean(origin) && siteOriginPatterns().some((pattern) => originMatchesPattern(origin, pattern));

const header = (req, name) => trimmed(req?.get?.(name)).split(",")[0].trim();

/**
 * Where this API is reachable, taken from the request the client actually made
 * (honouring the proxy headers a load balancer adds), then platform env vars.
 */
export const resolveApiOrigin = (req) => {
  const host = header(req, "x-forwarded-host") || header(req, "host");
  const protocol = header(req, "x-forwarded-proto") || trimmed(req?.protocol) || "http";

  const fromRequest = host ? toOrigin(`${protocol}://${host}`) : "";
  if (fromRequest) return fromRequest;

  return firstOriginFromEnv(API_ORIGIN_KEYS) || `http://localhost:${env("PORT") || 5000}`;
};

/**
 * Where the public site is running. The browser's Origin/Referer header is the
 * live answer, so it wins — gated by ALLOWED_SITE_ORIGINS, because an attacker
 * controls that header and could otherwise point email links at their own site.
 */
export const resolveSiteOrigin = (req) => {
  const fromBrowser = toOrigin(header(req, "origin")) || toOrigin(header(req, "referer"));
  if (isAllowedSiteOrigin(fromBrowser)) return fromBrowser;

  return firstOriginFromEnv(SITE_ORIGIN_KEYS) || resolveApiOrigin(req);
};

/**
 * Absolute URL of the email logo, or "" when no publicly reachable host exists.
 * Mail clients fetch this over the internet, so a non-public origin (localhost,
 * a private IP) is skipped in favour of one that can actually be reached. When
 * there is no such host we return nothing and the template drops the image —
 * no domain is hardcoded, so this works the same on any host.
 */
export const resolveLogoUrl = (req, siteOrigin) => {
  const explicit = toAbsoluteUrl(env("MAIL_LOGO_URL"));
  if (explicit) return explicit;

  // The API serves LOGO_PATH itself, so its own origin is a valid source too.
  const candidates = [siteOrigin, resolveApiOrigin(req), firstOriginFromEnv(SITE_ORIGIN_KEYS)];

  const reachable = candidates.find(isPublicOrigin);
  return reachable ? `${reachable}${LOGO_PATH}` : "";
};

/** Both origins an email template needs, resolved for one request. */
export const resolveEmailUrls = (req) => {
  const siteUrl = resolveSiteOrigin(req);
  return { siteUrl, logoUrl: resolveLogoUrl(req, siteUrl) };
};
