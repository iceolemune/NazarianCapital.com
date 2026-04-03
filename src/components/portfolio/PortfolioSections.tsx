import HoldingRow from '@/components/portfolio/HoldingRow'
import ConstellationLogo  from '@/app/assets/CONSTELLATION.jpeg'
import TherabodyLogo      from '@/app/assets/Therabody.jpeg'
import PoppiLogo          from '@/app/assets/Poppi.png'
import LensablLogo        from '@/app/assets/Lensabl.jpeg'
import SpaceXLogo         from '@/app/assets/Space X.jpeg'
import DiamondFoundryLogo from '@/app/assets/Diamond Foundry.jpeg'

const FINANCIAL = [
  {
    name:        'Parkview Financial',
    sector:      'Financial Services',
    role:        'Active Strategic Partner',
    description: 'Working directly with leadership to build operational infrastructure, scale the business and advise on critical strategic issues. Serve as a member of the Loan Committee.',
    badge:       'active' as const,
    investorBadge: true,
    url:         'https://www.parkviewfinancial.com',
  },
  {
    name:        'Constellation Capital',
    sector:      'Financial Services',
    role:        'Active Strategic Partner',
    description: 'Embedded alongside the CEO to develop fundraising strategy, portfolio management and advise on strategic issues.  Serve as a member of the Investment Committee.',
    badge:       'active' as const,
    investorBadge: true,
    logo:        ConstellationLogo,
  },
]

const HEALTH = [
  {
    name:        'Therabody',
    sector:      'Consumer Health Tech',
    role:        'Growth Capital',
    description: 'Pioneer of percussive therapy and recovery technology, redefining how athletes and consumers approach physical wellness. Co-founder and served as CEO.',
    badge:       'growth' as const,
    founderBadge: true,
    url:         'https://www.therabody.com',
    logo:        TherabodyLogo,
  },
  {
    name:        'Poppi',
    sector:      'Better-for-You Beverage',
    role:        'Growth Capital',
    description: 'A next-generation prebiotic soda brand that disrupted the legacy beverage category. Successfully exited following acquisition by PepsiCo in 2025.',
    badge:       'growth' as const,
    exitedBadge: true,
    logo:        PoppiLogo,
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
    exitedBadge: true,
    url:         'https://www.lensabl.com',
    logo:        LensablLogo,
  },
]

const GROWTH = [
  {
    name:        'SpaceX',
    sector:      'Aerospace & Defense',
    role:        'Growth Capital',
    description: "The world's leading private aerospace company, redefining access to space and building infrastructure for a multi-planetary future.",
    badge:       'growth' as const,
    logo:        SpaceXLogo,
  },
  {
    name:        'Diamond Foundry',
    sector:      'Deep Tech',
    role:        'Growth Capital',
    description: 'A deep-tech company accelerating the AI, electric vehicle, and wireless communications industries through single-crystal diamond wafers: a breakthrough material solving the thermal limitations constraining next-generation chips.',
    badge:       'growth' as const,
    url:         'https://www.diamondfoundry.com',
    logo:        DiamondFoundryLogo,
  },
]

const SECTIONS = [
  { title: 'Health & Wellness',  holdings: HEALTH    },
  { title: 'Financial Services', holdings: FINANCIAL },
  { title: 'Growth Capital',     holdings: GROWTH    },
]

export default function PortfolioSections() {
  return (
    <>
      {SECTIONS.map(({ title, holdings }) => (
        <section key={title} className="border-b border-rule bg-white">
          <div className="section-wrap py-14">
            <h2 className="text-[1.4rem] font-light text-charcoal mb-3">{title}</h2>
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
