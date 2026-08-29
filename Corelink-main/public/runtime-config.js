// Served as a plain static file (copied into dist as-is), so the API origin can
// be changed on the server without rebuilding the app.
//
// Leave it empty to call the API on the same origin as the site — correct when
// the API is served by this host or proxied under /api.
// Set it only when the API lives somewhere else, e.g.:
//   window.__API_BASE_URL__ = "https://api.neuroturing.com";
window.__API_BASE_URL__ = "";
