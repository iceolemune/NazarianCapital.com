import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ── Rate limiter ──────────────────────────────────────────────────────────────
// 3 requests per 10 minutes per IP (per security instructions)
const limiter = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now      = Date.now()
  const windowMs = 10 * 60 * 1000 // 10 minutes
  const maxReqs  = 3

  const entry = limiter.get(ip)
  if (!entry || now > entry.resetAt) {
    limiter.set(ip, { count: 1, resetAt: now + windowMs })
    return false
  }
  if (entry.count >= maxReqs) return true
  entry.count++
  return false
}

// ── Spam keyword filter ───────────────────────────────────────────────────────
const SPAM_PATTERN = /\b(viagra|cialis|casino|lottery|free money|crypto pump|click here|cheap meds|weight loss pills)\b/i

// ── HTML tag strip ────────────────────────────────────────────────────────────
function stripTags(str: string): string {
  return str.replace(/<[^>]*>/g, '')
}

// ── Validation helpers ────────────────────────────────────────────────────────
const MAX = { name: 100, email: 254, organization: 200, message: 5000 }
const VALID_INQUIRY = new Set(['operator-partnership', 'growth-capital', 'general'])
const EMAIL_RE      = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function fail(msg: string, status = 400) {
  return NextResponse.json({ success: false, error: msg }, { status })
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // IP rate limiting
  const forwarded = req.headers.get('x-forwarded-for')
  const ip        = (forwarded ? forwarded.split(',')[0] : 'unknown').trim()

  if (isRateLimited(ip)) {
    return fail('Too many requests. Please wait a few minutes before trying again.', 429)
  }

  // Parse body
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return fail('Invalid request body.')
  }

  if (typeof body !== 'object' || !body) return fail('Invalid request body.')

  const {
    name,
    email,
    organization = '',
    inquiryType,
    message,
  } = body as Record<string, unknown>

  // Type checks
  if (typeof name         !== 'string') return fail('Name must be a string.')
  if (typeof email        !== 'string') return fail('Email must be a string.')
  if (typeof organization !== 'string') return fail('Organization must be a string.')
  if (typeof inquiryType  !== 'string') return fail('Inquiry type must be a string.')
  if (typeof message      !== 'string') return fail('Message must be a string.')

  // Trim and strip tags
  const cleanName  = stripTags(name.trim())
  const cleanEmail = email.trim().toLowerCase()
  const cleanOrg   = stripTags(organization.trim())
  const cleanMsg   = stripTags(message.trim())

  // Required fields
  if (!cleanName)  return fail('Name is required.')
  if (!cleanEmail) return fail('Email is required.')
  if (!cleanMsg)   return fail('Message is required.')

  // Length limits
  if (cleanName.length  > MAX.name)         return fail(`Name must be at most ${MAX.name} characters.`)
  if (cleanEmail.length > MAX.email)        return fail(`Email must be at most ${MAX.email} characters.`)
  if (cleanOrg.length   > MAX.organization) return fail(`Organization must be at most ${MAX.organization} characters.`)
  if (cleanMsg.length   > MAX.message)      return fail(`Message must be at most ${MAX.message} characters.`)

  // Email format
  if (!EMAIL_RE.test(cleanEmail)) return fail('Please provide a valid email address.')

  // Inquiry type allow-list
  if (!VALID_INQUIRY.has(inquiryType)) return fail('Invalid inquiry type.')

  // Spam check
  if (SPAM_PATTERN.test(cleanName) || SPAM_PATTERN.test(cleanMsg)) {
    return fail('Your message was flagged as spam.')
  }

  // ── Send email ──────────────────────────────────────────────────────────────
  const smtpUser    = process.env.SMTP_USER
  const smtpPass    = process.env.SMTP_PASS
  const contactDest = process.env.CONTACT_EMAIL ?? smtpUser

  if (!smtpUser || !smtpPass) {
    console.error('Contact form: SMTP_USER or SMTP_PASS environment variable is not configured.')
    return fail('Email service is temporarily unavailable. Please try again later.', 503)
  }

  const inquiryLabels: Record<string, string> = {
    'operator-partnership': 'Operator Partnership Inquiry',
    'growth-capital':       'Growth Capital',
    'general':              'General',
  }

  const transporter = nodemailer.createTransport({
    host:       'smtpout.secureserver.net',
    port:       587,
    secure:     false,
    requireTLS: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from:     smtpUser,
      to:       contactDest,
      replyTo:  cleanEmail,
      subject:  `New Inquiry: ${inquiryLabels[inquiryType]} from ${cleanName}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Organization: ${cleanOrg || 'N/A'}`,
        `Inquiry Type: ${inquiryLabels[inquiryType]}`,
        '',
        'Message:',
        cleanMsg,
      ].join('\n'),
    })
  } catch {
    console.error('Contact form: failed to send email via SMTP.')
    return fail('Failed to send your message. Please try again later.', 503)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
