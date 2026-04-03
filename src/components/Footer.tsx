import Link from 'next/link'
import LogoMark from './LogoMark'

// Update this URL to Benjamin's actual LinkedIn profile
const BENJAMIN_LINKEDIN = 'https://www.linkedin.com/in/benjamin-nazarian/'

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const FOOTER_LINKS = [
  { href: '/about',     label: 'About'     },
  { href: '/strategy',  label: 'Strategy'  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/news',      label: 'News'      },
  { href: '/contact',   label: 'Contact'   },
]

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-cream">
      <div className="section-wrap py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-rule">

          {/* Logo + description */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <LogoMark size={32} />
              <div className="w-px h-[22px] bg-rule" aria-hidden="true" />
              <div className="flex flex-col gap-[2px]">
                <span className="text-[9px] font-semibold tracking-wordmark text-charcoal uppercase">Nazarian</span>
                <span className="text-[9px] font-light tracking-sub text-smoke uppercase">Capital</span>
              </div>
            </div>
            <p className="text-[12px] text-smoke leading-relaxed">
              A private family office investing at two ends of the growth curve.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] text-smoke hover:text-charcoal transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-ash">
              &copy; {new Date().getFullYear()} Nazarian Capital. All rights reserved.
            </span>
            <a
              href={BENJAMIN_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Benjamin Nazarian on LinkedIn"
              className="text-ash hover:text-navy transition-colors duration-200"
            >
              <LinkedinIcon size={14} />
            </a>
          </div>
          <span className="text-[10px] text-ash max-w-md text-right leading-relaxed">
            For informational purposes only. Not an offer to sell or solicit securities.
          </span>
        </div>
      </div>
    </footer>
  )
}
