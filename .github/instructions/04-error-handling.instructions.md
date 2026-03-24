---
applyTo: "**"
---

# Self-Sufficient Error Handling (CRITICAL)

**CRITICAL PRINCIPLE: Users must be able to diagnose and fix issues WITHOUT contacting support.**

## Error Messaging Philosophy
- ALWAYS display clear, actionable error messages directly in the UI where the error occurs
- NEVER just console.log errors — users won't check the console without guidance
- NEVER show generic "Something went wrong" — be specific about what failed and why
- ALWAYS provide step-by-step instructions to fix the issue
- Include error codes/types for support escalation if self-service fails

## Error UI Pattern (Template for All Features)
- When a feature/load fails: Display error UI **IN PLACE** of the content (not toast, not console)
- Detect specific error types: missing_api_key, invalid_api_key, fetch_failed, load_failed, etc.
- Show error-specific fix instructions:
  - API key errors → Direct to Project Settings, show expected format
  - Fetch errors → Check resource exists, verify server running
  - CORS/iframe errors → Explain restrictions, suggest alternatives
- Provide "Retry" button to attempt recovery
- Link to relevant documentation section
- Include error code for debugging/support

## Implementation Pattern (Apply to ALL features)
```typescript
// 1. Add error state
const [error, setError] = useState<{ type: string; message: string } | null>(null)

// 2. Catch errors and set state
catch (e) {
  setError({
    type: 'specific_error_type',
    message: 'User-friendly explanation of what went wrong'
  })
}

// 3. Display error UI in place of normal content
{error ? (
  <ErrorDisplay
    error={error}
    fixSteps={['Step 1', 'Step 2', 'Step 3']}
    onRetry={() => { setError(null); retryOperation() }}
    docsLink="/docs#troubleshooting"
  />
) : (
  <NormalContent />
)}
```

## When to Apply This Pattern
- ANY feature that loads external content (iframes, images, scripts)
- ANY API calls that could fail (network, auth, validation)
- ANY user actions that depend on configuration (API keys, settings)
- ANY background operations that could fail silently (webhooks, email sending)
- Form validation errors, file upload failures, authentication issues
