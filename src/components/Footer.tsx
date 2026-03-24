import Link from 'next/link'
import LogoMark from './LogoMark'

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
          <span className="text-[11px] text-ash">
            &copy; {new Date().getFullYear()} Nazarian Capital. All rights reserved.
          </span>
          <span className="text-[10px] text-ash max-w-md text-right leading-relaxed">
            For informational purposes only. Not an offer to sell or solicit securities.
          </span>
        </div>
      </div>
    </footer>
  )
}
