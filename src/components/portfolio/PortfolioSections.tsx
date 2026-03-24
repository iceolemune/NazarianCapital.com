import HoldingRow from '@/components/portfolio/HoldingRow'

const FINANCIAL = [
  {
    name:        'Parkview Financial',
    sector:      'Financial Services',
    role:        'Active Strategic Partner',
    description: 'Active strategic partner. Working directly with leadership to build operational infrastructure and scale the business.',
    badge:       'active' as const,
    url:         'https://www.parkviewfinancial.com',
  },
  {
    name:        'Constellation Capital',
    sector:      'Financial Services',
    role:        'Active Strategic Partner',
    description: 'Active strategic partner. Embedded alongside the CEO to develop organizational systems and talent strategy for sustained expansion.',
    badge:       'active' as const,
  },
]

const HEALTH = [
  {
    name:        'Therabody',
    sector:      'Consumer Health Tech',
    role:        'Growth Capital',
    description: 'Pioneer of percussive therapy and recovery technology, redefining how athletes and consumers approach physical wellness.',
    badge:       'growth' as const,
    url:         'https://www.therabody.com',
  },
  {
    name:        'Poppi',
    sector:      'Better-for-You Beverage',
    role:        'Growth Capital',
    description: 'A next-generation prebiotic soda brand that disrupted the legacy beverage category. Successfully exited following acquisition by PepsiCo in 2025.',
    badge:       'exited' as const,
  },
  {
    name:        'Magic Spoon',
    sector:      'Better-for-You CPG',
    role:        'Growth Capital',
    description: 'Reinventing the breakfast category with high-protein, low-carb cereals built for adult consumers who refuse to compromise on nutrition or taste.',
    badge:       'growth' as const,
    url:         'https://www.magicspoon.com',
  },
  {
    name:        'Lensabl',
    sector:      'Vision Care',
    role:        'Growth Capital',
    description: 'The modern vision care platform making prescription eyewear accessible, affordable, and fully online.',
    badge:       'growth' as const,
    url:         'https://www.lensabl.com',
  },
]

const GROWTH = [
  {
    name:        'SpaceX',
    sector:      'Aerospace & Defense',
    role:        'Growth Capital',
    description: "The world's leading private aerospace company, redefining access to space and building infrastructure for a multi-planetary future.",
    badge:       'growth' as const,
  },
  {
    name:        'Diamond Foundry',
    sector:      'Deep Tech',
    role:        'Growth Capital',
    description: 'A deep-tech company accelerating the AI, electric vehicle, and wireless communications industries through single-crystal diamond wafers: a breakthrough material solving the thermal limitations constraining next-generation chips.',
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
            Portfolio reflects select current and prior investments. Additional holdings are not
            disclosed. Nothing on this page constitutes an offer to sell or solicit securities.
          </p>
        </div>
      </section>
    </>
  )
}
