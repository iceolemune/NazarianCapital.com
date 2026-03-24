---
applyTo: "**"
---

# Coding Standards & Best Practices

## Use Existing Libraries First (CRITICAL)
- **ALWAYS use existing well-known libraries and frameworks before writing custom code**
- Check installed dependencies first: `package.json`, `go.mod` — use what's already there
- Prefer battle-tested solutions: date-fns for dates, zod for validation, clsx/classnames for class merging, React Hook Form for forms, etc.
- Never write custom implementations of things that well-known libraries already solve reliably
- Bulky custom utilities are a red flag — there's almost always a better library
- If a library isn't installed but would dramatically simplify the code, propose installing it

## Data Integrity
- **NEVER USE MOCK, HARDCODED, OR SAMPLE DATA UNLESS EXPLICITLY INSTRUCTED**
- **ALL API ENDPOINTS MUST QUERY THE ACTUAL DATABASE**
- **ALWAYS CHECK API HANDLERS FIRST WHEN DATA ISSUES ARE REPORTED**
- All forms must connect to real API endpoints with proper error handling
- **NEVER show "in development", "coming soon", or "feature incomplete" messages to users**
- Track incomplete features in TODO.md instead — never expose development status to end users
- Either implement features fully or leave them out of the UI entirely

## UI Modals & Dialogs — NEVER Use Native Browser Dialogs (CRITICAL)
- **NEVER use `alert()`, `confirm()`, or `prompt()`** — these are browser-native blocking dialogs that look inconsistent, break the design system, and are blocked by many browsers in production
- **ALWAYS use visually-styled React modal components or inline status messages** instead
- **For destructive action confirmation** (delete, cancel, irreversible): Build a React modal overlay with:
  - Dark semi-transparent backdrop (`bg-black/50 backdrop-blur-sm`)
  - White rounded card (`bg-white rounded-2xl shadow-2xl`)
  - Icon + title + description explaining what will happen
  - Two buttons: a safe "Cancel/Keep" (gray/neutral) and a destructive "Yes, [action]" (red)
  - Close on backdrop click and close button
- **For success/error feedback** after form saves or API calls: Show inline status banners near the action button (green for success, red for error) — never `alert()`
- **For non-blocking info**: Use toast notifications or inline text
- **Modal state pattern**:
  ```tsx
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  // Trigger: setShowConfirmModal(true)
  // Confirm handler: setShowConfirmModal(false); doAction()
  // Cancel: setShowConfirmModal(false)
  ```
- **⛔ ABSOLUTE RULE**: Any new `confirm()`, `alert()`, or `prompt()` introduced anywhere in the codebase is an **immediate P0 bug**. These calls break the design system, are inconsistent across browsers, and signal untested code. Search for them before every commit. No exceptions.

## Async Operations — Loading Indicators Required (CRITICAL)

Every async operation that touches the network or takes perceptible time MUST show a visual loading state while in progress. Assume worst-case connectivity (slow 3G, high latency) — never assume the response will be instant.

**Required for ALL async actions:**
- A dedicated `string | null` state variable per independent action type (e.g. `statusChangingId`, `deletingId`, `duplicatingId` — never reuse one state across unrelated actions)
- The loading state is set **before** the first `await` and cleared in a `finally` block — never rely on success/error paths alone
- The triggering button: `disabled` + `opacity-60` + `cursor-not-allowed` while loading
- Icon swapped to `<RefreshCw className="h-4 w-4 animate-spin" />` while loading
- Button label changed to present-progressive form: "Saving...", "Deleting...", "Starting...", "Resuming...", "Duplicating...", etc.
- Interactive elements that depend on the operation completing (e.g. Edit links) are hidden or disabled until the in-flight call resolves
- If the same UI has multiple independent async actions, each MUST have its own separate state variable — never share one loading flag across unrelated operations

**Pattern:**
```tsx
const [deletingId, setDeletingId] = useState<string | null>(null)

const handleDelete = async (id: string) => {
  setDeletingId(id)
  try {
    await fetch(...)
  } finally {
    setDeletingId(null)
  }
}

<button
  disabled={deletingId === item.id}
  className="... disabled:opacity-60 disabled:cursor-not-allowed"
>
  {deletingId === item.id ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
  {deletingId === item.id ? 'Deleting...' : 'Delete'}
</button>
```

**Applies to:** form saves, status changes, deletions, duplications, API key generation, invitation sends, permission changes, webhook tests — any user-triggered operation that awaits a network response.

## Preserve Existing Functionality (CRITICAL)
- **ONLY change what the user explicitly asks for**
- **DO NOT modify, refactor, or "improve" working code unless requested**
- **Preserve existing behavior and implementation details**
- **DO NOT delete existing code by default**
- Existing code may be deleted ONLY if ALL conditions are true:
  1. You are explicitly operating in cleanup mode
  2. You are 100% certain the code is unused and has no dependencies
  3. The code directly conflicts with a more important feature requirement
- When fixing bugs, make minimal changes to the specific issue
- When adding features, integrate without breaking existing functionality
- **When in doubt, ask the user before making architectural changes**

## Formatting & Naming Conventions
- Use camelCase for variable and function names (`userName`, `getUserData()`)
- Use PascalCase for class and component names (`UserProfile`, `AuthService`)
- Use 2 spaces for indentation
- Limit lines to 80 characters where possible
- Write meaningful comments to explain complex logic or decisions
- Ensure all functions and methods have clear input parameters and return types

## Component Size & File Organization (CRITICAL)
- **ALWAYS break large files into smaller components/modules**
- **Maximum file size: ~500 lines of code** — treat this as a hard limit, not a suggestion
- TypeScript/JavaScript parsers have limitations with files exceeding ~1600 lines
- Large files cause build failures, slower compilation, and parser errors

### `page.tsx` Files — Content Must Live in Separate Components (CRITICAL)
- **`page.tsx` files MUST be thin orchestrators only** — they import and compose components, nothing more
- **Never put page content (JSX sections, changelog entries, docs text, pricing copy, etc.) directly in `page.tsx`**
- Every distinct section of a page belongs in its own dedicated component file
- Target: `page.tsx` should stay **under 80–100 lines** — just imports, layout wrapper, and `<ComponentA /><ComponentB />`
- Examples of what must NOT live in `page.tsx`:
  - Changelog/release entries → extract to `/sections/VersionEntry.tsx` or similar
  - Documentation text blocks → extract to `/sections/DocsSection.tsx`
  - Pricing section content → extract to `PricingSection.tsx`
  - Large forms → extract to `FormSection.tsx`
  - Any JSX block over ~30 lines → extract it

### General Split Rules
- **When to split a file**:
  - File approaching 400–500 lines → Split immediately
  - Multiple concerns in one file → Separate into dedicated components
  - Large documentation pages → Extract sections into separate components
  - Complex forms → Break into section components
  - Large configuration objects → Move to separate config files
- **How to organize split components**:
  - Create `/components` subdirectory for shared components
  - Create `/sections` subdirectory for page-specific sections
  - Use named exports for reusable components
  - Import and compose in parent file
  - Maintain single responsibility principle

## Reusable Components & Performance (CRITICAL)
- **ALWAYS build features as reusable components** when possible
- **Performance is a TOP PRIORITY** — optimize for speed and efficiency
- **Performance best practices**:
  - Minimize re-renders with React.memo, useMemo, useCallback
  - Lazy load components that aren't immediately needed
  - Optimize images and assets (compression, proper formats)
  - Avoid unnecessary API calls (cache when appropriate)
  - Use efficient algorithms and data structures
  - Keep bundle sizes small (code splitting, tree shaking)
- **When building new features**:
  - Check if similar components already exist (reuse first)
  - Design with reusability in mind from the start
  - Extract common patterns into shared components
  - Write efficient code on first pass (don't rely on "we'll optimize later")
  - Use native browser APIs when possible instead of heavy libraries
- **Code efficiency**:
  - Avoid nested loops (O(n²) → O(n))
  - Use Map/Set vs Array for lookups
  - Debounce/throttle expensive operations (search, scroll handlers)
  - Batch DOM updates to minimize reflows
  - Remove event listeners when components unmount
  - Clean up intervals, timeouts, and subscriptions

## Content Writing Rules (CRITICAL — NO EM DASHES)

**NEVER use em dashes (—) in any user-facing text.** Em dashes are the #1 AI writing tell
and make copy feel machine-generated. They signal to readers (and SEO tools) that content
was not written by a human.

**Applies to:** JSX text nodes, tooltip strings, description fields, meta titles,
meta descriptions, Open Graph content, changelogs, blog posts, comparison tables,
button labels, feature lists, hero copy, and every other user-visible string.

**Replace em dashes with natural alternatives based on context:**
- Clause connector ("fast setup — no card needed") → comma: "fast setup, no card needed"
- Introducing a list or explanation ("features — including X, Y, Z") → colon: "features, including X, Y, Z"
- Two independent clauses ("it failed — the column was NULL") → semicolon or period
- Title separator ("SEO Overhaul — canonical tags") → colon: "SEO Overhaul: canonical tags"
- Definition/property ("GSAP — window.gsap, ~95KB") → comma or period

**Regular hyphens in compound words are fine:** "no-code", "built-in", "point-and-click",
class names like "text-gray-600", and code/technical identifiers.

**Before writing any content string, ask:** "Does this have an em dash?" If yes, rephrase.
