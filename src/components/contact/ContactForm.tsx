'use client'

import { useState, FormEvent } from 'react'
import { RefreshCw } from 'lucide-react'

const INQUIRY_TYPES = [
  { value: '',                         label: 'Select an inquiry type'     },
  { value: 'operator-partnership',     label: 'Operator Partnership Inquiry' },
  { value: 'growth-capital',           label: 'Growth Capital'               },
  { value: 'general',                  label: 'General'                      },
]

const MAX_LENGTHS = {
  name:         100,
  email:        254,
  organization: 200,
  message:      5000,
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [name,         setName]         = useState('')
  const [email,        setEmail]        = useState('')
  const [organization, setOrganization] = useState('')
  const [inquiryType,  setInquiryType]  = useState('')
  const [message,      setMessage]      = useState('')
  const [status,       setStatus]       = useState<Status>('idle')
  const [errorMsg,     setErrorMsg]     = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !inquiryType || !message.trim()) {
      setErrorMsg('Please fill in all required fields.')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, email, organization, inquiryType, message }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setStatus('sent')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-[4px] border border-rule bg-cream p-10 text-center">
        <span className="gold-rule block mb-6 mx-auto" />
        <p className="font-magnolia italic text-[22px] text-navy mb-3">Message Received</p>
        <p className="text-[13px] text-smoke leading-[1.7] max-w-sm mx-auto">
          Thank you for reaching out. A member of the team will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1.5">
            Name <span className="text-navy">*</span>
          </label>
          <input
            type="text"
            autoComplete="name"
            maxLength={MAX_LENGTHS.name}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full border border-rule rounded-[3px] px-4 py-2.5 text-[13px] text-charcoal bg-white placeholder:text-ash focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1.5">
            Email <span className="text-navy">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            maxLength={MAX_LENGTHS.email}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-rule rounded-[3px] px-4 py-2.5 text-[13px] text-charcoal bg-white placeholder:text-ash focus:outline-none focus:border-navy transition-colors"
          />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label className="block text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1.5">
          Organization
        </label>
        <input
          type="text"
          autoComplete="organization"
          maxLength={MAX_LENGTHS.organization}
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Company or fund name (optional)"
          className="w-full border border-rule rounded-[3px] px-4 py-2.5 text-[13px] text-charcoal bg-white placeholder:text-ash focus:outline-none focus:border-navy transition-colors"
        />
      </div>

      {/* Inquiry type */}
      <div>
        <label className="block text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1.5">
          How can we help? <span className="text-navy">*</span>
        </label>
        <select
          required
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="w-full border border-rule rounded-[3px] px-4 py-2.5 text-[13px] text-charcoal bg-white focus:outline-none focus:border-navy transition-colors appearance-none"
        >
          {INQUIRY_TYPES.map(({ value, label }) => (
            <option key={value} value={value} disabled={!value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1.5">
          Message <span className="text-navy">*</span>
        </label>
        <textarea
          required
          maxLength={MAX_LENGTHS.message}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your company or inquiry..."
          className="w-full border border-rule rounded-[3px] px-4 py-2.5 text-[13px] text-charcoal bg-white placeholder:text-ash focus:outline-none focus:border-navy transition-colors resize-none"
        />
        <p className="text-[11px] text-ash mt-1 text-right">
          {message.length} / {MAX_LENGTHS.message}
        </p>
      </div>

      {/* Error */}
      {(status === 'error' || errorMsg) && (
        <div className="rounded-[3px] bg-red-50 border border-red-200 text-red-700 text-[12.5px] px-4 py-3">
          {errorMsg || 'Something went wrong. Please try again.'}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>

      <p className="text-[11px] text-ash leading-[1.7]">
        Nazarian Capital is a private investment vehicle. It does not manage third-party
        capital and is not registered as an investment adviser. All inquiries are reviewed
        personally and routed to info@nazariancapital.com.
      </p>
    </form>
  )
}
