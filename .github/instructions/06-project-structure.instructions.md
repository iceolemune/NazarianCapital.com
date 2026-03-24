---
applyTo: "**"
---

# Project Structure & Organization (CRITICAL)

## Documentation Files
- ALL documentation, readme files, and guides must be created in the `/readme` directory
- Examples: API_REFERENCE.md, ARCHITECTURE.md, DEPLOYMENT.md, etc.
- Root README.md can remain at root for GitHub/repository visibility
- Project-level docs (TODO.md, SETUP_INSTRUCTIONS.md) should be in a /readme subfolder

## Source Code
- All source code files MUST be nested inside `/src` directories
- Each app/package should have its own `/src` folder (e.g., `apps/api/src`, `apps/dashboard/src`)
- Never place source files directly at package root

## Build/Output Files
- All compiled/transpiled/bundled output MUST go in `/dist` directories
- Keep `/dist` in `.gitignore` (build outputs should not be committed)
- Exception: Go binaries may go in `/bin` directory
- Always ensure `npm start` builds and watches scripts from `/src` to `/dist`

## Standard Directory Structure
```
/apps
  /api
    /src          # Go source files
    /bin          # Go compiled binaries
  /dashboard
    /src          # Next.js source files
    /.next        # Next.js build output
  /snippet
    /src          # TypeScript source files
    /dist         # Bundled JavaScript output
/readme           # All documentation files
```
