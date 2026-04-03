import type { Metadata } from 'next'
import PageHeader  from '@/components/PageHeader'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Nazarian Capital',
  description: 'Reach out regarding operator partnerships, growth capital, or general inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        headline="Get In Touch"
        subheadline="Nazarian Capital considers a limited number of new opportunities each year. If you are a founder seeking an operational partner, or representing a late-stage growth round, reach out below."
      />

      <section className="border-b border-rule bg-white">
        <div className="section-wrap py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20">

            {/* Left column: contact details */}
            <div>
              <p className="eyebrow text-ash mb-4">Direct Contact</p>
              <span className="gold-rule block mb-6" />

              <div className="space-y-6 text-[13px]">
                <div>
                  <p className="text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1">Email</p>
                  <a
                    href="mailto:info@nazariancapital.com"
                    className="text-navy hover:underline underline-offset-2"
                  >
                    info@nazariancapital.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-charcoal uppercase tracking-wide mb-1">Location</p>
                  <p className="text-smoke">Los Angeles, California</p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-cream rounded-[4px] border border-rule">
                <p className="text-[11px] font-semibold text-navy uppercase tracking-wide mb-2">
                  What to Include
                </p>
                <ul className="space-y-2">
                  {[
                    'A brief description of your company or request',
                    'Your current revenue stage (for operator partnership inquiries)',
                    'How you heard about Nazarian Capital',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-smoke">
                      <span className="mt-[6px] w-[4px] h-[4px] flex-shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-6 rounded-[4px] border border-rule">
                <p className="text-[11px] font-semibold text-navy uppercase tracking-wide mb-5">
                  What Happens Next
                </p>
                <div className="space-y-5">
                  {[
                    { step: '01', text: 'We review your inquiry within 2 business days' },
                    { step: '02', text: 'If there is a fit, we reach out to schedule an initial call' },
                    { step: '03', text: 'Introductory meeting with Benjamin to explore the opportunity' },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="text-[11px] font-semibold text-gold tracking-[0.1em] flex-shrink-0 mt-[2px]">{step}</span>
                      <p className="text-[12px] text-smoke leading-[1.65]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
