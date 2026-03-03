# Security Audit Report — Mago Dei Cuori

**Date:** 2026-03-03
**Auditor:** Automated Security Audit (Claude)
**Project:** Mago Dei Cuori — Pizza restaurant website
**Stack:** React 19 (Vite) frontend + Express static server, pnpm, TypeScript
**Scope:** All files — frontend, backend, config, CI/CD, dependencies

---

## Executive Summary

This project is a **brochure/menu website** for a pizza restaurant. It has a minimal Express server that serves static files and a React SPA frontend. There is **no database, no user authentication system, no API endpoints handling user data, and no form submissions processed server-side**. The attack surface is relatively small compared to a full-stack application, but several security hardening improvements are needed — particularly around HTTP security headers, the Express server configuration, and third-party script integrity.

**Overall Risk Level: LOW-MEDIUM**

---

## 1. Dependency Audit

### Package Manager
- **pnpm** v10.4.1 (via `packageManager` field in `package.json`)

### Direct Dependencies Analysis

| Package | Version | Status | Notes |
|---------|---------|--------|-------|
| express | ^4.21.2 | **Review** | Express 4.x is in LTS. Express 5.x is available. No critical CVEs in 4.21.x but upgrading to 5.x is recommended for long-term support. |
| react / react-dom | ^19.2.1 | Current | No known issues |
| axios | ^1.12.0 | Current | Not used anywhere in source code — **dead dependency** |
| wouter | ^3.3.5 | Patched | Custom patch applied (v3.7.1 patch on v3.3.5 specifier — version mismatch in patch config) |
| nanoid | ^5.1.5 | Current | Override applied for `tailwindcss>nanoid: 3.3.7` |
| vite | ^7.1.7 | Current | Dev dependency only |

### Dead/Unused Dependencies (Risk: Low)
These packages are declared but not imported anywhere in the source code:
- `axios` — remove to reduce supply chain attack surface
- `recharts` — not used in any page/component
- `react-day-picker` — not used
- `react-resizable-panels` — not used
- `react-hook-form` + `@hookform/resolvers` — not used
- `streamdown` — not used
- `next-themes` — not used (custom `ThemeContext` is used instead)
- `cmdk` — not used
- Many `@radix-ui/*` components are imported by shadcn/ui but most are not actively used in pages

### CVE Assessment
No critical or high-severity CVEs are known for the current resolved dependency versions as of the audit date. The `body-parser@1.20.3` transitive dependency (via Express) has no outstanding CVEs.

---

## 2. OWASP Top 10 (2021) Analysis

### A01: Broken Access Control — **LOW RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Low | `server/index.ts` | 22 | The catch-all route `app.get("*", ...)` serves `index.html` for all paths. No path traversal risk here since `express.static` is used, but there are no access controls on any route. Acceptable for a public brochure site. |
| 2 | Info | `server/index.ts` | 14-17 | Static path resolution logic differs between production and non-production. Verify the production path `path.resolve(__dirname, "..")` resolves correctly in the deployed container. |

**Verdict:** No protected resources exist, so broken access control is N/A for this application type. However, if any admin routes or API endpoints are added in the future, authentication middleware must be added.

---

### A02: Cryptographic Failures — **LOW RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Medium | `server/index.ts` | — | No HTTPS enforcement at the application level. The Express server listens on HTTP. HTTPS should be enforced via HSTS headers or a reverse proxy. |
| 2 | Low | `client/src/const.ts` | 8 | OAuth `state` parameter uses `btoa(redirectUri)` — this is Base64 encoding, not cryptographic randomness. The `state` parameter should be a cryptographically random nonce to prevent CSRF in OAuth flows. |
| 3 | Info | `shared/const.ts` | 2 | `ONE_YEAR_MS` constant suggests a session cookie with a 1-year lifetime. Excessively long session durations increase risk if the cookie is stolen. |

**No hardcoded passwords or private keys found in the codebase.**

---

### A03: Injection — **LOW RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Info | `client/src/components/ui/chart.tsx` | 81 | `dangerouslySetInnerHTML` used in a `<style>` tag. The content is derived from a developer-defined `ChartConfig` object, not user input. **No injection risk** — this is standard practice for shadcn/ui chart components. |

**No SQL, NoSQL, command, LDAP, or XPath injection vectors found.** There is no database, no backend API processing user input, and no shell command execution.

---

### A04: Insecure Design — **MEDIUM RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Medium | `server/index.ts` | — | **No rate limiting** on the Express server. A simple DoS attack could exhaust server resources. |
| 2 | Medium | `vite.config.ts` | 102-148 | The `/__manus__/logs` endpoint accepts arbitrary POST data and writes it to the filesystem. While guarded by `NODE_ENV !== "production"` for the script injection, the Vite dev server middleware itself has no auth and no rate limiting. **In development only** — acceptable but should be reviewed. |
| 3 | Low | `vite.config.ts` | 174 | `host: true` on Vite dev server exposes it to all network interfaces. Mitigated by `allowedHosts` list. |

---

### A05: Security Misconfiguration — **HIGH RISK** (Most Significant Area)

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | **High** | `server/index.ts` | — | **No HTTP security headers configured.** The Express server does not set CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, or Permissions-Policy. See Section 3 for details. |
| 2 | **High** | `server/index.ts` | — | **Express does not disable the `X-Powered-By` header.** This leaks server technology information to attackers. |
| 3 | Medium | `client/src/components/ErrorBoundary.tsx` | 37-39 | **Full error stack traces rendered in UI.** `this.state.error?.stack` is displayed directly to users. In production, this leaks internal file paths and code structure. |
| 4 | Medium | `client/index.html` | 12 | **Google Fonts loaded from CDN without Subresource Integrity (SRI).** |
| 5 | Medium | `client/index.html` | 20-21 | **Analytics script loaded from env-variable URL without SRI.** The `%VITE_ANALYTICS_ENDPOINT%/umami` script has no `integrity` attribute. |
| 6 | Low | `vite.config.ts` | 174-182 | Vite dev server `allowedHosts` includes several wildcard domains. Acceptable for dev but should not leak to production configs. |

---

### A06: Vulnerable Components — **LOW RISK**
Covered in Section 1. No known CVEs in current dependency versions.

---

### A07: Authentication & Session Failures — **N/A (Partially Applicable)**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Low | `client/src/const.ts` | 4-17 | OAuth login URL generation exists but is **not used anywhere** in the app. The `getLoginUrl()` function references `VITE_OAUTH_PORTAL_URL` and `VITE_APP_ID` but no component calls it. Dead code. |
| 2 | Low | `client/src/const.ts` | 8 | As noted in A02, the OAuth `state` param is just a Base64-encoded redirect URI, not a random CSRF token. |
| 3 | Info | `client/src/components/ui/sidebar.tsx` | 85 | Sidebar state cookie set without `Secure`, `HttpOnly`, or `SameSite` flags. Low impact since it only stores a boolean UI preference. |

**No authentication system is active.** No login forms, no JWT handling, no session management.

---

### A08: Software & Data Integrity — **MEDIUM RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | **High** | `client/index.html` | 12 | **No SRI on Google Fonts stylesheet.** If Google Fonts CDN is compromised, malicious CSS/JS could be injected. |
| 2 | **High** | `client/index.html` | 20-21 | **No SRI on analytics script.** The Umami analytics script is loaded from an external URL with no integrity verification. |
| 3 | Medium | `client/src/components/Map.tsx` | 96-108 | **External Google Maps script loaded dynamically without SRI.** The `loadMapScript()` function creates a `<script>` tag with `crossOrigin="anonymous"` but no `integrity` attribute. |
| 4 | Medium | `patches/wouter@3.7.1.patch` | — | Custom patch to wouter exposes route paths via `window.__WOUTER_ROUTES__`. This is information disclosure — an attacker can enumerate all application routes from the browser console. |
| 5 | Low | `.github/workflows/deploy.yml` | 16-18 | CI actions use `@v4` tags without SHA pinning. Supply chain risk: if the action repo is compromised, malicious code runs in CI. |

---

### A09: Logging & Monitoring Failures — **MEDIUM RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Medium | `server/index.ts` | — | **No request logging middleware** (e.g., `morgan`). No audit trail of who accesses the server or error conditions. |
| 2 | Medium | `server/index.ts` | 33 | `startServer().catch(console.error)` — startup errors are logged to stdout only. No persistent logging or alerting. |
| 3 | Info | `vite.config.ts` | 52-69 | Debug collector writes logs to `.manus-logs/` directory. These logs may contain sensitive data from network requests. The `.manus-logs` directory is not in `.gitignore`. |

---

### A10: SSRF — **LOW RISK**

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Info | — | — | No server-side URL fetching exists. The Express server only serves static files. No SSRF vectors. |

---

## 3. HTTP Security Headers

**CRITICAL: No security headers are configured on the Express production server.**

| Header | Status | Impact |
|--------|--------|--------|
| `Content-Security-Policy` | **MISSING** | No protection against XSS, inline script injection, or data exfiltration |
| `Strict-Transport-Security` | **MISSING** | No HTTPS enforcement; vulnerable to SSL stripping attacks |
| `X-Content-Type-Options` | **MISSING** | Browser may MIME-sniff responses, enabling content-type attacks |
| `X-Frame-Options` | **MISSING** | Site can be embedded in iframes, enabling clickjacking |
| `Referrer-Policy` | **MISSING** | Full URL (with potential query params) leaked in Referer headers |
| `Permissions-Policy` | **MISSING** | Browser APIs (camera, microphone, geolocation) not restricted |
| `X-Powered-By` | **PRESENT (Express default)** | Leaks server technology to attackers |
| CORS | Not configured | No API endpoints exist, so not applicable. But if APIs are added, CORS must be configured. |

---

## 4. Secrets & Sensitive Data Exposure

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | **OK** | `.gitignore` | 10-15 | `.env` files are properly gitignored. |
| 2 | **OK** | — | — | No `.env` files exist in the repository. |
| 3 | Low | `client/src/components/Map.tsx` | 89 | `VITE_FRONTEND_FORGE_API_KEY` is exposed in the client bundle (all `VITE_*` env vars are). This is inherent to Vite's design. Ensure this API key is restricted to allowed domains/referrers on the API provider side. |
| 4 | Low | `client/src/const.ts` | 5-6 | `VITE_OAUTH_PORTAL_URL` and `VITE_APP_ID` exposed in client bundle. Not secret, but should be validated. |
| 5 | Low | `client/index.html` | 20-21 | `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` exposed in HTML. These are public analytics identifiers — acceptable. |
| 6 | Info | `server/index.ts` | 29 | Server start message logs the port and full URL. Avoid logging in production or use a structured logger. |

**No hardcoded API keys, passwords, tokens, or private keys found in source code.**

---

## 5. Authentication & Authorization

**This application has no authentication or authorization system.** It is a public-facing brochure website. The `getLoginUrl()` function in `client/src/const.ts` and the `ManusDialog` component suggest scaffolding for a Manus platform integration, but these are not wired into any user-facing flow.

| # | Severity | Description |
|---|----------|-------------|
| 1 | Info | No protected routes exist — all pages are public |
| 2 | Info | No user data is collected or stored |
| 3 | Info | No session management is implemented |
| 4 | Low | Cookie in `sidebar.tsx:85` lacks `Secure`, `HttpOnly`, `SameSite` flags (low impact — UI preference only) |

---

## 6. Input Validation & Output Encoding

### User Input Entry Points
| Entry Point | File | Validation | Risk |
|-------------|------|------------|------|
| Menu search input | `Menu.tsx:438-444` | Client-side only, used for local filtering | **None** — data never sent to server |
| Allergen filter buttons | `Menu.tsx:493-509` | Click handlers on predefined values | **None** |

### XSS Analysis
| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | **OK** | All `.tsx` files | — | React's JSX auto-escapes all interpolated values. No raw HTML injection vectors found. |
| 2 | **OK** | `chart.tsx` | 81 | `dangerouslySetInnerHTML` used only with developer-defined config, never user input. |
| 3 | Info | `ErrorBoundary.tsx` | 38 | Error stack trace rendered in `<pre>` tag. React auto-escapes the content, so no XSS, but information leakage concern. |

**No file upload handling exists.**
**No server-side input processing exists.**

---

## 7. Infrastructure & Config

| # | Severity | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Medium | `server/index.ts` | — | **No request body size limits** set on Express. Default `express.static` is safe, but if `express.json()` or `express.urlencoded()` are added later, body size should be limited. |
| 2 | Medium | `.github/workflows/deploy.yml` | 16-18 | **CI action versions not pinned to SHA.** Using `@v4` tags allows silent updates that could introduce malicious code. |
| 3 | Low | `server/index.ts` | — | Express runs as whatever user the process is started under. Ensure the production deployment runs as a non-root user. |
| 4 | Low | `vite.config.ts` | 172 | `strictPort: false` — Vite will find the next available port if 3000 is busy. Could lead to unexpected port binding in dev. |
| 5 | Info | — | — | No Dockerfile found. If containerized, ensure the container doesn't run as root and doesn't expose unnecessary ports. |
| 6 | Info | `.github/workflows/deploy.yml` | 9 | Comment states "Deployment is handled automatically by Coolify via Git sync." Ensure Coolify is configured with proper secrets management. |

---

## Summary Table

| # | Category | Severity | File | Line | Description |
|---|----------|----------|------|------|-------------|
| 1 | Security Headers | **High** | `server/index.ts` | — | No HTTP security headers (CSP, HSTS, X-Frame-Options, etc.) |
| 2 | Security Headers | **High** | `server/index.ts` | — | `X-Powered-By: Express` not disabled |
| 3 | Data Integrity | **High** | `client/index.html` | 12 | No SRI on Google Fonts CDN resource |
| 4 | Data Integrity | **High** | `client/index.html` | 20-21 | No SRI on analytics script |
| 5 | Data Integrity | Medium | `client/src/components/Map.tsx` | 96-108 | No SRI on dynamically loaded Google Maps script |
| 6 | Misconfiguration | Medium | `client/src/components/ErrorBoundary.tsx` | 37-39 | Error stack traces exposed to users |
| 7 | Insecure Design | Medium | `server/index.ts` | — | No rate limiting on Express server |
| 8 | Logging | Medium | `server/index.ts` | — | No request logging or audit trail |
| 9 | CI/CD | Medium | `.github/workflows/deploy.yml` | 16-18 | GitHub Actions not pinned to SHA |
| 10 | Info Disclosure | Medium | `patches/wouter@3.7.1.patch` | — | All routes exposed via `window.__WOUTER_ROUTES__` |
| 11 | Crypto | Medium | `server/index.ts` | — | No HTTPS enforcement (HSTS) |
| 12 | Dead Code | Low | `package.json` | — | Multiple unused dependencies increase supply chain risk |
| 13 | Cookie | Low | `client/src/components/ui/sidebar.tsx` | 85 | Cookie set without Secure/HttpOnly/SameSite flags |
| 14 | OAuth | Low | `client/src/const.ts` | 8 | OAuth state param is Base64 not a random nonce |
| 15 | Logging | Low | `vite.config.ts` | — | `.manus-logs` dir not in `.gitignore` |

---

## Remediation Priority List

### Critical / High Priority
1. **Add HTTP security headers to Express server** — Use `helmet` middleware to set CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and disable X-Powered-By.
2. **Add SRI to external CDN resources** — Add `integrity` and `crossorigin` attributes to the Google Fonts `<link>` and analytics `<script>` tags in `index.html`.

### Medium Priority
3. **Suppress error stack traces in production** — In `ErrorBoundary.tsx`, conditionally hide `error.stack` when `NODE_ENV === 'production'`.
4. **Add rate limiting to Express** — Use `express-rate-limit` to prevent DoS on the static file server.
5. **Add request logging** — Use `morgan` or `pino` for access logs and error tracking.
6. **Pin CI actions to SHA** — Replace `@v4` with specific commit SHAs in `.github/workflows/deploy.yml`.
7. **Remove route enumeration patch** — Remove the `window.__WOUTER_ROUTES__` exposure from the wouter patch, or guard it behind a dev-only flag.

### Low Priority
8. **Remove unused dependencies** — Remove `axios`, `recharts`, `react-day-picker`, `react-resizable-panels`, `react-hook-form`, `@hookform/resolvers`, `streamdown`, `next-themes`, `cmdk` from `package.json`.
9. **Add `.manus-logs` to `.gitignore`** — Prevent accidental commit of debug logs.
10. **Fix sidebar cookie flags** — Add `Secure; SameSite=Lax` to the sidebar state cookie.
11. **Fix OAuth state parameter** — If OAuth is implemented in the future, use `crypto.getRandomValues()` for the `state` parameter.
12. **Restrict client-exposed API keys** — Ensure `VITE_FRONTEND_FORGE_API_KEY` is domain-restricted on the provider side.

---

## Recommended Libraries / Tools

| Category | Recommended Library | Purpose |
|----------|-------------------|---------|
| HTTP Security Headers | **helmet** (`npm i helmet`) | Sets all recommended security headers with sensible defaults |
| Rate Limiting | **express-rate-limit** (`npm i express-rate-limit`) | Prevents DoS attacks on Express servers |
| Request Logging | **morgan** or **pino-http** | Access logging and audit trail |
| Input Validation | **zod** (already installed) | Runtime schema validation (for future API endpoints) |
| CSRF Protection | **csurf** or **csrf-csrf** | CSRF tokens for state-changing endpoints (if added) |
| Dependency Auditing | **pnpm audit** | Automated CVE scanning in CI |
| SRI Generation | **webpack-subresource-integrity** or manual `openssl dgst` | Generate integrity hashes for CDN resources |
| Secret Scanning | **gitleaks** or **trufflehog** | Pre-commit hooks to prevent secrets in source |
| CI Action Pinning | **pin-github-action** | Automatically pin GitHub Actions to commit SHAs |

---

## Recommended `server/index.ts` Hardening

```typescript
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";          // npm i helmet
import rateLimit from "express-rate-limit"; // npm i express-rate-limit

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Security headers
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://maps.googleapis.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        frameSrc: ["'self'", "https://www.google.com"],
        connectSrc: ["'self'", "https://forge.butterfly-effect.dev"],
      },
    },
  }));

  // Rate limiting
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,                  // 100 requests per window
  }));

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "..")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
```

---

*End of Security Audit Report*
