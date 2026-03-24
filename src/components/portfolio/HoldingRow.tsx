import Link from 'next/link'

type BadgeVariant = 'active' | 'growth' | 'exited'

interface HoldingProps {
  name:        string
  sector:      string
  role:        string
  description: string
  badge:       BadgeVariant
  url?:        string
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
  name, sector, role, description, badge, url,
}: HoldingProps) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-start gap-4 py-7 border-b border-rule last:border-0">
      {/* Name + meta */}
      <div className="sm:w-[220px] flex-shrink-0">
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
      <div className="flex-1">
        <p className="text-[12.5px] text-smoke leading-[1.75] italic mb-2">{role}</p>
        <p className="text-[12.5px] text-charcoal leading-[1.7]">{description}</p>
      </div>

      {/* Badge */}
      <div className="sm:ml-6 flex-shrink-0">
        <span className={BADGE_CLASS[badge]}>{BADGE_LABELS[badge]}</span>
      </div>
    </div>
  )
}
