const TRACKS = [
  {
    id:      '01',
    label:   'Operator Partnerships',
    accent:  'navy' as const,
    tagline: 'For companies looking to grow faster with an experienced operator at the table.',
    details: [
      'Active board or advisory seat',
      'Operational systems design across departments',
      'DTC-to-retail channel expansion',
      'Introductions to strategic partners and distribution networks',
      'Marketing strategy and brand positioning',
      'Organizational scaling and executive hiring',
    ],
    check:  'Target companies: consumer  products, health  and wellness, technology platform businesses generating at least $5M ARR',
    size:   'Investment range: $500K – $5M',
  },
  {
    id:      '02',
    label:   'Growth Capital',
    accent:  'gold' as const,
    tagline: 'Co-investments in high-growth, category-defining companies.',
    details: [
      'Minority equity participation alongside top-tier venture and growth funds',
      'Access to deals not available through traditional channels',
      'Focus on companies with proven business models and clear paths to profitability',
      'Consumer, health, technology, and real estate sectors',
    ],
    check:  'Target companies: late-stage private or pre-IPO companies',
    size:   'Investment range: $500K – $2M',
  },
]

export default function TrackCards() {
  return (
    <section className="border-b border-rule bg-white">
      <div className="section-wrap py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TRACKS.map(({ id, label, accent, tagline, details, check, size }) => (
            <div
              key={id}
              className={`rounded-[4px] border border-rule p-10 flex flex-col gap-8 ${
                accent === 'navy' ? 'border-l-[4px] border-l-navy' : 'border-l-[4px] border-l-gold'
              }`}
            >
              <div>
                <p className={`eyebrow mb-2 ${accent === 'navy' ? 'text-navy' : 'text-gold'}`}>
                  Track {id}
                </p>
                <h3 className="text-[22px] font-semibold text-charcoal tracking-tight leading-tight mb-4">
                  {label}
                </h3>
                <p className="text-[13px] text-smoke leading-[1.7]">{tagline}</p>
              </div>

              <ul className="space-y-2">
                {details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-[12px] text-charcoal">
                    <span className={`mt-[5px] block w-[5px] h-[5px] flex-shrink-0 rounded-full ${accent === 'navy' ? 'bg-navy' : 'bg-gold'}`} />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="space-y-1 pt-2 border-t border-rule">
                <p className="text-[11.5px] text-smoke leading-[1.6]">{check}</p>
                <p className="text-[11.5px] text-smoke leading-[1.6]">{size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
