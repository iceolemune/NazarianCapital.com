# AI Workspace Instructions

> **Instructions are split across focused files in `.github/instructions/`.**
> VS Code Copilot automatically discovers all `*.instructions.md` files in that directory.

---

## Instruction Files

| File | Contents |
|---|---|
| `01-non-negotiables.instructions.md` | **Security (Rule #1)**, Performance rule |
| `03-security.instructions.md` | **⚠️ TOP PRIORITY** — authMiddleware on every endpoint, SSRF protection, input validation, rate limiting, no PII in logs, IDOR prevention, full security checklist |
| `04-error-handling.instructions.md` | Self-sufficient error UX: inline display, retry button, never generic messages |
| `05-coding-standards.instructions.md` | Use existing libraries, no mock data, preserve functionality, component size, naming conventions |
| `06-project-structure.instructions.md` | Docs → `/readme`, source → `/src`, build output → `/dist` |
| `07-frontend-backend.instructions.md` | Next.js + Go standards, Header/Footer on all pages, ADA, SEO |
| `08-workflow-git.instructions.md` | Git policy, one-approval-one-push, logging policy, env config, pre-push verification |
| `09-versioning-docs.instructions.md` | Versioning policy, changelog, documentation requirements, feature tracking |
| `13-complete-implementations.instructions.md` | End-to-end completion checklist — no half-baked features |

---

**Always read the relevant instruction files before making changes.** Security (`03`) and non-negotiables (`01`) apply to every single change without exception.
