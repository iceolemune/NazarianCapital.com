---
applyTo: "**"
---

# ⚠️⚠️⚠️ SECURITY — ABSOLUTE TOP-TIER PRIORITY ⚠️⚠️⚠️

Security is non-negotiable. **No feature, refactor, optimisation, or convenience shortcut may ever compromise the security of the platform or user data.**

A security breach:
- Exposes sensitive user and financial data
- Destroys user trust instantly and permanently
- Creates legal liability (GDPR, CCPA, SOC 2, SEC regulations)

**If you are unsure whether something is secure — refuse to implement it and flag it for review. Never assume it's fine.**

---

## ⛔ ABSOLUTE SECURITY RULES — NEVER VIOLATE

1. **Every API endpoint that touches user data MUST require authentication.** No exceptions. If you add an endpoint and do not attach `authMiddleware`, that is a P0 security bug.

2. **NEVER log sensitive data** — no emails, no user IDs, no JWT tokens or prefixes, no passwords, no API keys, no IP addresses in success paths. Logs are visible to server operators and indexable in log aggregators.

3. **NEVER expose internal infrastructure URLs** (Fly.io, database hostnames, internal service hostnames) in any client-facing code, response body, error message, or log accessible to the public.

4. **NEVER return data belonging to one user/org to a different user/org.** Every DB query that returns sensitive data MUST filter by the authenticated user's team_id or user_id. Horizontal privilege escalation (IDOR) is a critical failure.

5. **NEVER skip input validation.** All user-supplied input must be validated for type, format, length, and character set before use. Unvalidated input entering SQL queries or the DOM is a P0 bug.

6. **NEVER open a proxy, relay, or fetch-on-behalf-of endpoint without SSRF protection.** All internal IPs, private CIDR ranges, and loopback addresses must be blocked before making any outbound request on behalf of user input.

7. **NEVER commit secrets, credentials, or environment values to git.** `.env` is gitignored. `.env.template` contains only placeholder comments.

8. **Any proxy or relay route MUST require authentication.** It must validate the target URL against `isPrivateHost()` before fetching. Unauthenticated open proxies are a critical SSRF vector.

---

## Authentication & Authorization

- **All new API endpoints MUST use `authMiddleware`** unless the endpoint is explicitly public by design (e.g. `/auth/login`, `/auth/signup`)
- Authentication middleware validates on EVERY request:
  - JWT token signature and expiration
  - User exists in database (prevents deleted-user access)
  - `account_status === 'active'` (blocks suspended/deleted accounts)
  - Permissions and roles current (not cached)
- Passwords: bcrypt, minimum cost 10 (DefaultCost). Max password input: **72 bytes** (bcrypt truncates at 72 — reject longer inputs to prevent DoS via intentionally long bcrypt workload)
- JWT tokens: 30-day expiration, HS256, signed with `JWT_SECRET`
- Store tokens in `localStorage` under an app-specific key (client-side)
- Send tokens as `Authorization: Bearer <token>` on every authenticated request
- Never expose `JWT_SECRET`, `.env`, database credentials, or API secrets in code, logs, responses, or comments

## Input Validation & Sanitization (MANDATORY ON ALL ENDPOINTS)

- **Validate ALL user inputs before use** — no exceptions, no "we'll add it later"
- Email: `mail.ParseAddress()` — reject malformed emails with 400
- Strings: `strings.TrimSpace()` to normalise; enforce max lengths:
  - `name`: 100 chars
  - `email`: 254 chars
  - `organization`: 200 chars
  - `subject`: 200 chars
  - `message`: 5000 chars
  - `password`: 72 bytes (bcrypt limit)
- Use parameterized queries (`$1`, `$2`, ...) for **ALL** database queries — never string-concatenate user input into SQL
- Use `html.EscapeString()` on any user content that may be rendered as HTML
- Strip or reject HTML tags from plain-text fields using regex: `<[^>]*>`
- Do not trust `Content-Type` — validate the actual body structure regardless

## Rate Limiting (REQUIRED ON ALL PUBLIC ENDPOINTS)

- Login: **10 attempts per 15 minutes per IP** — return `429 Too Many Requests`
- Signup: **10 attempts per 15 minutes per IP**
- Password reset request: **3 attempts per 10 minutes per email**
- Support contact form: **3 requests per 10 minutes per IP**
- Rate limiters: in-memory `sync.Mutex`-protected map, auto-cleanup of expired entries
- **Every new public endpoint must include rate limiting before launch** — this is not optional

## SSRF Protection (MANDATORY ON ALL OUTBOUND FETCH)

- Any endpoint that makes an HTTP request to a user-supplied URL MUST call `isPrivateHost()` first
- Block the following before fetching:
  - Explicit names: `localhost`, `127.0.0.1`, `::1`, `0.0.0.0`
  - Suffixes: `*.local`, `*.internal`, `*.localhost`
  - CIDR ranges: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.0.0/16` (AWS metadata), `100.64.0.0/10` (CGNAT), `::1/128`, `fc00::/7`
- Return `400 Bad Request` and a generic error if blocked — never reveal why
- Any proxy route must require authentication AND SSRF validation

## Sensitive Data Access Control (IDOR Prevention)

- Every database query returning user/org data MUST include a `WHERE org_id = $n OR user_id = $n` filter tied to the authenticated user's context
- **Never trust user-supplied IDs as authorization** — always re-validate ownership server-side
- Fields that must NEVER appear in unauthenticated API responses:
  - `password_hash`
  - Payment or financial account identifiers
  - Internal infrastructure URLs or secrets
  - Any personally identifiable financial data

## Secrets & Configuration

- `.env` is gitignored — never commit real credentials
- `.env.template` has only placeholder comments — never real values
- Secrets required at runtime: `DATABASE_URL`, `JWT_SECRET`, `SMTP_PASS`, and any payment/third-party API keys
- Rotate secrets immediately if accidentally committed or logged

## Logging Policy (Security Context)

- **NEVER log**: emails, user IDs, JWT tokens (full or partial), passwords, bcrypt hashes, raw payloads containing PII, financial account numbers or balances
- **DO log** (errors only, no PII): "login attempt failed", "invalid token", "rate limit exceeded" — without identifying details
- Logs are `console.error()` for critical failures only — not `console.log()`/`console.info()`
- Server-side logs: errors only — never in success paths

## Spam & Abuse Protection

- Check message bodies for spam keywords (viagra, casino, lottery, free money, etc.)
- Validate content lengths strictly on all public-facing forms
- Block known malicious patterns before processing
- Log abuse patterns (without PII) for review

## Account Status Management

- `account_status` field: `'active'`, `'suspended'`, `'deleted'`
- Both status fields checked on **every authenticated request** — never cached in JWT, never trusted from client

## Security Review Checklist (Run Before Every PR/Commit)

Before merging or committing any code that touches API handlers, middleware, routes, authentication, database queries, or user-facing forms — verify ALL of the following:

- [ ] Does the new endpoint have `authMiddleware` attached (or is it explicitly exempt by design)?
- [ ] Are all user inputs validated for type, format, and max length?
- [ ] Are all database queries using parameterized placeholders?
- [ ] Does anything make outbound HTTP requests? If yes — is SSRF protection applied?
- [ ] Does the response body contain any data the caller shouldn't have access to?
- [ ] Are there any new `log.Printf`/`console.log` calls leaking emails, IDs, tokens, or secrets?
- [ ] Is there a rate limiter if this is a public endpoint?
- [ ] Are any secrets, credentials, or env values hardcoded?
- [ ] If a new route accesses another user's resources — is ownership re-validated server-side?

**If any checkbox fails → fix it before the change ships. Security gaps are bugs, not backlog items.**
