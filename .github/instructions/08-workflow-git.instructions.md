---
applyTo: "**"
---

# Development Workflow & Git Policy
## Git Policy (CRITICAL — ABSOLUTE RULES)
- **NEVER commit changes to git unless explicitly asked by the user**
- **NEVER push changes to remote repository unless explicitly instructed**
- User controls all git operations (commits, pushes, branching)
- Only make file changes — the user will handle version control
- **ALWAYS wait for explicit user instruction: "commit this" or "push to git"**
- **User must verify ALL changes before they go to production**

### One Approval = One Push — No Exceptions
- **Each commit+push requires its own separate explicit approval from the user**
- **ONE approval covers EXACTLY ONE git commit and ONE git push — nothing more**
- After completing a commit+push, permission is **FULLY CONSUMED and REVOKED**
- ANY subsequent changes — no matter how small — require fresh approval
- NEVER chain a second commit/push onto prior approval, even if discovered mid-session

## Staging Workflow (CRITICAL)

Use a **two-branch deployment model** with a dedicated staging environment before production.

**Standard deployment flow:**
1. Make code changes locally
2. Commit and push to the **`stage` branch** first
3. Verify everything works on the staging environment
4. If staging looks good → merge `stage` into **`main`** (production)

**Rules:**
- **NEVER push directly to `main` without testing on `stage` first** (unless it's a critical hotfix explicitly approved by the user)
- **Both branches run the same `npm run verify` pre-push hook** — build must pass before pushing to either

---

### After Making Changes — Commit Reminder

**CRITICAL: Do NOT say "deployment required" for Next.js dashboard/frontend changes.**
- Next.js pages, components, styles, and public assets are hot-reloaded on `localhost:3000` immediately
- If the user can test it on localhost, it does NOT require deployment to function
- Vercel auto-deploys on push — deployment is just git push, not a separate step

**For backend/API changes that require a server restart to take effect in production**, show the deployment warning:
```
⚠️⚠️⚠️ DEPLOYMENT REQUIRED ⚠️⚠️⚠️

Changes made to: [list files — API or server only]

These changes require deployment to take effect in production.

To deploy: Tell me "commit and push these changes"

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
```

**For all other (frontend) changes**, just remind the user to commit when ready:
```
Changes made to: [list files]

Testable immediately on localhost:3000.
To ship to production: Tell me "commit and push these changes"
```

## Logging Policy (CRITICAL)
- **Console logs are for troubleshooting ONLY** (temporary, development use)
- **99% of the time, logs should be removed before commits**
- **ONLY use `console.error()` for critical errors** — never use `.log()`, `.warn()`, `.info()`
- When user says "commit and push", clean up ALL temporary console statements
- Remove ALL debug logs before commits
- Exception: Keep logs if explicitly requested or needed for production monitoring

## Environment Configuration
- **ONLY ONE .env FILE**: Use `.env.template` as reference, copy to `.env` in project root
- Never create multiple .env files (`.env.example`, `.env.local.example`, etc.) — this causes confusion
- All configuration examples should be COMMENTS in `.env.template`
- `.env` file contains actual values and is in `.gitignore` (never commit)
- `.env.template` is committed to git as documentation only

## Pre-Push Verification (CRITICAL)
- **ALWAYS run `npm run verify` before pushing code**
- This runs the EXACT same checks that the deployment platform runs
- Checks include:
  1. TypeScript type checking (`tsc --noEmit`)
  2. ESLint linting (`next lint`)
  3. Full production build (`next build`)
- A pre-push hook (`setup-hooks.sh`) automatically runs this before every push
- To skip hook (NOT RECOMMENDED): `git push --no-verify`

## Service Management
- ⚠️ **NEVER STOP OR RESTART `npm start` UNLESS ABSOLUTELY NECESSARY** ⚠️
- Only restart services when:
  - `.env` file is modified (environment variables require restart)
  - Backend dependencies are added or changed
  - Server configuration files are changed
- Most code changes are hot-reloaded automatically:
  - Next.js pages and components (auto-reload)
- If services are already running, let them continue running

### When Restart IS Required — Tell the User
```
⚠️ ⚠️ ⚠️ RESTART REQUIRED ⚠️ ⚠️ ⚠️

YOU NEED TO RE-RUN: npm start

Reason: [Explain why — .env change, go.mod update, etc.]

⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️
```
