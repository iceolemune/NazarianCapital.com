import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'

type BadgeVariant = 'active' | 'growth' | 'exited'

interface HoldingProps {
  name:        string
  sector:      string
  role:        string
  description: string
  badge:       BadgeVariant
  founderBadge?: boolean
  exitedBadge?:  boolean
  investorBadge?: boolean
  url?:        string
  logo?:       StaticImageData
}

const BADGE_LABELS: Record<BadgeVariant, string> = {
  active:  'Active Partner',
  growth:  'Growth Capital',
  exited:  'Exited',
}

const BADGE_CLASS: Record<BadgeVariant, string> = {
  active:  'tag-active',
  growth:  'tag-growth',
  exited:  'tag-exited',
}

export default function HoldingRow({
  name, sector, role, description, badge, founderBadge, exitedBadge, investorBadge, url, logo,
}: HoldingProps) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-start gap-4 py-7 border-b border-rule last:border-0">
      {/* Logo + Name + meta */}
      <div className="sm:w-[220px] flex-shrink-0">
        {logo && (
          <div className="mb-3 w-14 h-14 rounded-2xl bg-white border border-rule overflow-hidden flex items-center justify-center">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={56}
              height={56}
              className="object-contain w-full h-full p-1"
            />
          </div>
        )}
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-semibold text-charcoal hover:text-navy transition-colors"
          >
            {name}
          </Link>
        ) : (
          <p className="text-[15px] font-semibold text-charcoal">{name}</p>
        )}
        <p className="text-[11.5px] text-smoke mt-1">{sector}</p>
      </div>

      {/* Description */}
      <div className="flex-1" style={{ marginTop: logo ? '4.25rem' : '0' }}>
        <p className="text-[12.5px] text-charcoal leading-[1.7]">{description}</p>
      </div>

      {/* Badge — aligned to top of name, not logo */}
      <div className="sm:ml-6 flex-shrink-0 flex flex-col gap-1.5 items-end" style={{ marginTop: logo ? '4.25rem' : '0' }}>
        {founderBadge && (
          <span className="tag-founder">Co-Founder / CEO &amp; Angel Investor</span>
        )}
        <span className={BADGE_CLASS[badge]}>{BADGE_LABELS[badge]}</span>
        {investorBadge && (
          <span className="tag-investor">Investor</span>
        )}
        {exitedBadge && (
          <span className="tag-exited">Exited</span>
        )}
      </div>
    </div>
  )
}
