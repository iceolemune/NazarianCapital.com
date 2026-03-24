---
applyTo: "**"
---

# Versioning, Documentation & Feature Tracking

## Version Control & Versioning (CRITICAL)
- **Update the version number in your Footer component with EVERY change**
- **Increment version after every significant change:**
  - **Major (X.0.0)**: Breaking changes, major features, architecture changes
  - **Minor (1.X.0)**: New features, enhancements, significant improvements
  - **Patch (1.0.X)**: Bug fixes, small improvements, security patches
- **Update BOTH locations simultaneously:**
  1. Footer component version number
  2. `copilot-instructions.md` (version + date)
- **CRITICAL: Maintain a public-facing changelog/updates page:**
  - Add new version section with date
  - Document all changes with appropriate icons
  - Update "Future Updates" / roadmap section as items are completed
  - This is a REQUIRED step, not optional
  - **Only include user-facing beneficial changes** — features that add capability and bug fixes that noticeably improve the user experience
  - **DO NOT include** internal housekeeping, copy edits, sitemap updates, refactors, config changes, or any fix the user would never notice
- **One section per day rule (CRITICAL):** Never create more than one release section per calendar day. Consolidate same-day bumps into one section using the highest version number for that day.

### When to Update Version
- ✅ New features added
- ✅ UI/UX enhancements (new components, design improvements)
- ✅ Bug fixes and security patches
- ✅ API changes or new endpoints
- ✅ Database schema changes
- ❌ Code refactoring without user-facing changes
- ❌ Documentation updates only
- ❌ Configuration changes only

## Future Updates List Maintenance (CRITICAL)
- **After implementing any feature**, always cross-reference your roadmap/future updates section.
- If the feature (or part of it) appears in the Future Updates list, **remove it immediately** — it belongs in the version history changelog entry, not the future list.
- If a list item is only partially implemented, **update the description** to remove the completed parts and keep only what remains unbuilt.
- Never leave a shipped feature sitting in the Future Updates list — it misleads users about what the product can already do.
- This check is part of the standard "adding a new feature" checklist, not an afterthought.

## User Documentation Maintenance (CRITICAL)
- **GOAL**: Minimize support tickets by making the app 100% self-sufficient
- Every feature, API endpoint, and UI component MUST be documented
- Users should find answers in `/docs` before contacting support
- **Documentation is NOT optional — it's a core feature requirement**

### Update Documentation with EVERY Feature Change
- **When adding features**: Update the `/docs` section IMMEDIATELY
- **When changing APIs**: Update API reference section
- **When modifying UI**: Update relevant documentation sections
- **When adding public methods**: Document with parameters, return values, code examples
- Incomplete docs = incomplete feature

### Documentation Quality Standards
- Write for non-technical users (avoid jargon, explain everything)
- Include code examples for technical features
- Provide real-world use cases and scenarios
- Keep sections short and scannable (bullet points, headings)
- Add contextual help (tooltips, info icons, inline hints) throughout the UI

## AI-Driven Feature Suggestions (CRITICAL)
- **You (AI) are expected to suggest improvements** — not just implement what's requested
- Analyze user workflows and identify pain points proactively
- When you spot an improvement opportunity, add it to the roadmap/future updates section and mention it in conversation: "I noticed [X] could be improved. Added to Future Updates."
- Include clear description, benefits, and complexity estimate (Low/Medium/High)
- Categories: Self-Service, Onboarding, Workflow, Documentation, Accessibility, Performance, Analytics, API

## Feature Tracking & Development Process (CRITICAL)
- **Use TODO.md for all incomplete features — never show development status to users**
- **Before starting**: Check TODO.md for context and requirements
- **While implementing**: Build features completely or leave them out entirely. Never show "coming soon" to users.
- **After completing**: Mark items complete in TODO.md with ✅ and date, update copilot-instructions.md

### TODO.md Priority Levels
- 🔴 **Critical**: Blocks core functionality or has security implications
- 🟡 **High**: Important for user experience or promised features
- 🟢 **Medium**: Nice to have, improves platform capabilities
- 🔵 **Low**: Future enhancements, not essential for MVP

## Sitemap Maintenance (CRITICAL)
- When creating new public pages, immediately update `public/sitemap.xml`
- Include: new URL, `<lastmod>` date, `changefreq`, and `priority`
- Sitemap only includes non-authenticated pages
