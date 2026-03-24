'use client'

import { useState, useEffect } from 'react'
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
  const pathname          = usePathname()
  const [open, setOpen]   = useState(false)

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream border-b border-rule h-[72px] flex items-center">
        <div className="section-wrap flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Nazarian Capital — Home">
            <LogoMark size={47} />
            <div className="w-px h-[34px] bg-rule flex-shrink-0" aria-hidden="true" />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[13px] font-semibold tracking-wordmark text-charcoal leading-none uppercase">
                Nazarian
              </span>
              <span className="text-[13px] font-light tracking-sub text-smoke leading-none uppercase">
                Capital
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
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

          {/* Mobile: hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 -mr-2 rounded-[3px] hover:bg-rule/40 transition-colors duration-150"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block w-5 h-px bg-charcoal transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu drawer */}
      <nav
        className={`md:hidden fixed top-[72px] left-0 right-0 z-40 bg-cream border-b border-rule transition-all duration-200 ease-in-out overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="section-wrap py-6 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[15px] py-3 border-b border-rule last:border-0 font-medium transition-colors duration-150 ${
                pathname.startsWith(href) ? 'text-navy' : 'text-charcoal hover:text-navy'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
