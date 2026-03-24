---
applyTo: "**"
---

# Frontend (Next.js) & Backend (Go) Standards

## Frontend — Next.js
- Use strict typing in TypeScript
- Leverage TailwindCSS for styling
- Use `'use client'` for client-side interactivity
- Ensure all UI components are responsive (mobile-first)
- **Forms**: Always implement real API calls with loading states, error displays, and proper validation
- **Authentication**: Store JWT tokens in localStorage, redirect on success, clear on logout

### Header & Footer on ALL Pages (CRITICAL)
- **ALWAYS include both Header and Footer components on EVERY page**
- Header must show site navigation, user menu, and branding
- Footer must show version, copyright, and links
- **Missing header/footer = BROKEN PAGE** — users lose navigation and context
- Check EVERY new page for:
  ```tsx
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  // Wrap content: <><Header />...<Footer /></>
  ```

### API URL Safety (CRITICAL)
- **ALWAYS use the public API domain for all client-facing API calls** (e.g. `https://yourdomain.com/api/v1`)
- **NEVER expose internal infrastructure URLs** in client-facing code
- Internal infrastructure is an implementation detail — clients must never see it
- All API URLs in `.env.local`, code, and documentation must use the public domain
- Exception: Server-side operations can use internal URLs (never exposed to the browser)

## Backend — Go
- Use Fiber framework for HTTP routing
- Return JSON responses with proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Handle errors gracefully with structured error responses:
  ```json
  { "success": false, "error": { "code": 400, "message": "..." } }
  ```
- All database operations must use parameterized queries (`$1`, `$2`, etc.)
- Implement proper CORS configuration

## Accessibility (ADA Compliance)
- All images must have `alt` text
- Buttons must have `aria-label` if they are icon-only
- Ensure sufficient color contrast (especially in dark mode)
- Use semantic HTML (`<main>`, `<nav>`, `<header>`, `<footer>`)

## SEO
- **CRITICAL: Update `public/sitemap.xml` whenever adding new PUBLIC pages**
- Sitemap should only include non-authenticated pages (exclude /dashboard, /settings, /profile, etc.)
- Update `<lastmod>` date when pages change significantly
- Use `Title` and `Meta` services to set dynamic page titles and descriptions
- Use SSR-compatible practices where possible
