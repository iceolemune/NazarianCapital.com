import HoldingRow from '@/components/portfolio/HoldingRow'

const FINANCIAL = [
  {
    name:        'Parkview Financial',
    sector:      'Private Lending',
    role:        'Strategic Advisor',
    description: 'A leading private lender focused on transitional real estate. Nazarian Capital provides ongoing strategic advisory on growth, market positioning, and operational expansion.',
    badge:       'active' as const,
    url:         'https://www.parkviewfinancial.com',
  },
  {
    name:        'Constellation Capital',
    sector:      'Real Estate Investment',
    role:        'Active Operator Partner',
    description: 'Commercial real estate lending platform. Nazarian Capital maintains an active strategic role, working directly with leadership on portfolio growth, capital strategy, and investor relations.',
    badge:       'active' as const,
  },
]

const HEALTH = [
  {
    name:        'Therabody',
    sector:      'Consumer Health Tech',
    role:        'Growth Capital',
    description: 'Creator of the Theragun and percussive therapy category. Nazarian Capital participated in a growth round alongside leading institutional investors.',
    badge:       'growth' as const,
    url:         'https://www.therabody.com',
  },
  {
    name:        'Poppi',
    sector:      'Better-for-You Beverage',
    role:        'Growth Capital',
    description: 'Prebiotic soda brand disrupting the traditional soda category. Nazarian Capital participated in a growth round. Acquired by PepsiCo in 2025.',
    badge:       'exited' as const,
  },
  {
    name:        'Magic Spoon',
    sector:      'Better-for-You CPG',
    role:        'Growth Capital',
    description: 'High-protein, low-sugar breakfast cereal for adults, reimagining a legacy category with nutritional transparency and premium branding.',
    badge:       'growth' as const,
    url:         'https://www.magicspoon.com',
  },
  {
    name:        'Lensabl',
    sector:      'DTC Vision',
    role:        'Operator Partner',
    description: 'Online eyewear and lens replacement platform. Nazarian Capital provided operational support on DTC scaling, marketing strategy, and retail channel development.',
    badge:       'active' as const,
    url:         'https://www.lensabl.com',
  },
]

const GROWTH = [
  {
    name:        'SpaceX',
    sector:      'Aerospace & Defense',
    role:        'Growth Capital',
    description: 'Participation in a secondary-market transaction for one of the world\'s most valuable private companies, led by Elon Musk.',
    badge:       'growth' as const,
  },
  {
    name:        'Diamond Foundry',
    sector:      'Sustainable Materials',
    role:        'Growth Capital',
    description: 'The world\'s largest carbon-neutral diamond producer. Lab-grown diamonds at the intersection of technology, sustainability, and luxury.',
    badge:       'growth' as const,
    url:         'https://www.diamondfoundry.com',
  },
]

const SECTIONS = [
  { title: 'Financial Services', holdings: FINANCIAL },
  { title: 'Health & Wellness',  holdings: HEALTH    },
  { title: 'Growth Capital',     holdings: GROWTH    },
]

export default function PortfolioSections() {
  return (
    <>
      {SECTIONS.map(({ title, holdings }) => (
        <section key={title} className="border-b border-rule bg-white">
          <div className="section-wrap py-14">
            <p className="eyebrow text-navy mb-3">{title}</p>
            <span className="gold-rule block mb-2" />
            {holdings.map((h) => (
              <HoldingRow key={h.name} {...h} />
            ))}
          </div>
        </section>
      ))}

      {/* Legal disclaimer */}
      <section className="bg-cream">
        <div className="section-wrap py-10">
          <p className="text-[11px] text-ash leading-[1.75] max-w-3xl">
            The companies listed above represent a selection of investments and strategic
            relationships. This is not an exhaustive list, and inclusion does not constitute
            an endorsement or representation of future performance. Past investment performance
            is not indicative of future results. All investment information is provided for
            informational purposes only and does not constitute an offer to sell or a
            solicitation to buy any securities.
          </p>
        </div>
      </section>
    </>
  )
}
