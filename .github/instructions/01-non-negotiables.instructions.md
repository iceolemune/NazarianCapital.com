---
applyTo: "**"
---

# ⚠️⚠️⚠️ ABSOLUTE NON-NEGOTIABLES — READ FIRST ⚠️⚠️⚠️

These rules override everything else. No feature, refactor, optimization, or convenience shortcut may compromise any of them. They are non-negotiable at all times — no exceptions.

---

## 1. SECURITY IS NON-NEGOTIABLE — TREAT EVERY CHANGE AS A POTENTIAL ATTACK SURFACE

Security is the **#1 product-defining rule**. Any code change — no matter how small — that introduces a security vulnerability is a **P0 bug** and must be fixed immediately before shipping.

**MANDATORY SECURITY CHECKS before every commit or PR:**
- Does every new API endpoint attach `authMiddleware`? (If not → P0)
- Are all user inputs validated for type, format, and max length? (If not → P0)
- Do all database queries use parameterized placeholders — never string concatenation? (If not → P0)
- Does any new outbound HTTP call validate the URL against `isPrivateHost()` first? (If not → P0)
- Does any response body expose data the caller does not own? (If not → P0)
- Do any new log lines contain emails, user IDs, tokens, passwords, or other PII? (If yes → P0)
- Are any secrets, credentials, or env values hardcoded anywhere? (If yes → P0)
- Does a new public endpoint lack rate limiting? (If yes → must add before launch)

**Security regressions are treated identically to crashes.** A feature that works but leaks user data or enables unauthorized access ships zero value and must be reverted.

**When in doubt: do not ship.** Over-engineering security is always preferable to under-engineering it. Ask for review if unsure.

**Full security rules live in `03-security.instructions.md`.** Always read that file when adding, modifying, or reviewing any handler, middleware, route, form, or API integration.

---

## 2. PERFORMANCE IS A TOP PRIORITY

Every millisecond of unnecessary latency damages the user experience. This is especially critical for financial/investment apps where trust and responsiveness directly affect user confidence.

- **Bundle size must stay as small as possible.** No bloated libraries, no unnecessary abstractions.
- **API calls must be minimized.** Cache aggressively. Never re-fetch data that hasn't changed.
- **Never block rendering** on non-critical data fetches — use loading states and progressive enhancement.
- **Every new dependency added must be justified against its performance and bundle cost.**
- Performance regressions are treated as bugs, not acceptable trade-offs.
