---
applyTo: "**"
---

# Complete Implementations — ZERO HALF-BAKED FEATURES

## The Rule

**When a feature is requested, implement it completely end-to-end before stopping.**

The user must NEVER have to:
- Discover during testing that the backend was skipped
- Guess whether the database migration was run
- Find that a toggle in the UI does nothing because no API field exists
- Hunt for a scheduler function that was never written

---

## What "Complete" Means for Every Feature Type

### UI Feature (toggle, form field, setting)
- [ ] UI component created/updated
- [ ] Field added to TypeScript types (`types.ts` or equivalent)
- [ ] Field included in save/create/update API payloads
- [ ] Field displayed correctly in read/detail views
- [ ] Relevant review/summary sections wired to the field

### API Field (new column on a model)
- [ ] Migration file created **and run against the live database**
- [ ] Create handler: struct + INSERT query + arg
- [ ] Read handler: scan struct + SELECT column + Scan() call + response JSON
- [ ] Update handler: request struct + dynamic builder entry
- [ ] Both authenticated AND unauthenticated query paths updated (if both exist)

### Background/Scheduler Job
- [ ] Function exists in scheduler/worker file
- [ ] Function is called from the main `processScheduledExperiments` (or equivalent tick)
- [ ] Import list updated if new packages needed
- [ ] Worst-case guard: function returns early (not panics) when data is missing/sparse

### Stripe/Billing Feature
- [ ] Backend endpoint created with proper auth
- [ ] Frontend calls endpoint with correct token
- [ ] Webhook handler updated if Stripe sends related events
- [ ] Tier/permission gate applied at both backend and frontend

### Integration (Slack, GA4, webhooks, etc.)
- [ ] `SendOrgSlackEvent` (or equivalent) called at every relevant lifecycle point
- [ ] Preference key defined and checked correctly
- [ ] Frontend toggle/settings UI connected to real API field

---

## Completion Checklist Before Stopping

Before declaring a feature done, confirm ALL of the following:

1. **Can a user enable it in the UI?** ✓
2. **Does the API accept and store the setting?** ✓
3. **Does the database have the column (migration run)?** ✓
4. **Does it show correctly when loading/reading?** ✓
5. **Does the background job / scheduler actually execute the logic?** ✓
6. **Does the build pass (`go build ./internal/handlers/...`)?** ✓
7. **Does TypeScript compile without errors?** ✓

---

## Policy Statement

> "When I ask for a feature, go fully through the entire implementation. I don't want to have to assume you did not finish a task or feature, and I don't want to guess or figure out during testing that you half-assed it."
> — Project owner

Partial implementations are bugs, not progress. A feature is either complete or it doesn't exist.
