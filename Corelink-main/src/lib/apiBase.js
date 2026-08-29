// The API base is resolved in the browser rather than baked in at build time,
// so one `dist` can be deployed to any host without a rebuild.
//
// Order of precedence:
//   1. window.__API_BASE_URL__ — set in /runtime-config.js, editable on the
//      server after a build (useful when the API moves to a new IP or domain).
//   2. VITE_API_URL — build-time override, e.g. a Netlify/Vercel env var.
//   3. "" — same origin. Works when the API is served by the same host, or
//      proxied under /api by Netlify redirects, nginx or the Vite dev server.

const firstConfigured = (...values) => {
  for (const value of values) {
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (trimmed) return trimmed;
  }
  return "";
};

const runtimeValue = typeof window === "undefined" ? "" : window.__API_BASE_URL__;

export const API_BASE = firstConfigured(runtimeValue, import.meta.env.VITE_API_URL).replace(
  /\/+$/,
  ""
);

/** Build an absolute API URL from a path such as "/api/contact". */
export const apiUrl = (path = "") => `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
