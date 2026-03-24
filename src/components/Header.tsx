'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoMark from './LogoMark'

const NAV_LINKS = [
  { href: '/about',     label: 'About'     },
  { href: '/strategy',  label: 'Strategy'  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/news',      label: 'News'      },
  { href: '/contact',   label: 'Contact'   },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-rule h-[72px] flex items-center">
      <div className="section-wrap flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Nazarian Capital — Home">
          <LogoMark size={36} />
          <div className="w-px h-[26px] bg-rule flex-shrink-0" aria-hidden="true" />
          <div className="flex flex-col gap-[2px]">
            <span className="text-[10px] font-semibold tracking-wordmark text-charcoal leading-none uppercase">
              Nazarian
            </span>
            <span className="text-[10px] font-light tracking-sub text-smoke leading-none uppercase">
              Capital
            </span>
          </div>
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname.startsWith(href) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile: condensed CTA */}
        <Link
          href="/contact"
          className="md:hidden text-[11px] font-semibold tracking-[0.08em] text-navy border border-navy px-4 py-2 rounded-[3px] hover:bg-navy hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
