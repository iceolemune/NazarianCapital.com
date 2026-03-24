import NewsEntry from '@/components/news/NewsEntry'
import MediaEntry from '@/components/news/MediaEntry'

const NEWS_ENTRIES = [
  {
    company:  'SpaceX',
    date:     'March 2026',
    headline: 'SpaceX Valuation Surpasses $350 Billion in Latest Secondary Transaction',
    body:     'SpaceX closed a secondary tender offer valuing the company at over $350 billion, cementing its position as the most valuable private company in the world. Nazarian Capital participated in a prior secondary tranche, reflecting conviction in SpaceX\'s long-term position across commercial launch, Starlink broadband, and next-generation spacecraft development.',
  },
  {
    company:  'Diamond Foundry',
    date:     'February 2026',
    headline: 'Diamond Foundry Expands Luxury Partnership Network',
    body:     'Diamond Foundry secured new partnerships with leading luxury fashion houses and continued expansion of its VRAI direct-to-consumer brand, bringing lab-grown diamonds into premium retail environments globally. Nazarian Capital holds a position in the company\'s growth equity round.',
  },
  {
    company:  'Magic Spoon',
    date:     'December 2025',
    headline: 'Magic Spoon Hits Nationwide Retail Availability at Costco',
    body:     'Following major distribution wins at Target, Walmart, and Whole Foods, Magic Spoon secured placement at Costco warehouses nationwide, marking a significant milestone in its transition from a DTC-native brand to a full-scale CPG business.',
  },
  {
    company:  'Lensabl',
    date:     'September 2025',
    headline: 'Lensabl Launches Vision Benefits Platform for Employers',
    body:     'Lensabl announced Lensabl+, a direct-to-employer vision benefits solution that bypasses traditional insurance infrastructure. The platform positions the company to compete in the multi-billion dollar vision benefits market.',
  },
  {
    company:  'Poppi',
    date:     'March 2025',
    headline: 'PepsiCo Acquires Poppi for $1.65 Billion',
    body:     'PepsiCo completed its acquisition of Poppi, the prebiotic soda brand, for $1.65 billion. The deal represents one of the largest exits in better-for-you beverage history and validates the long-term consumer shift toward functional, low-sugar alternatives.',
  },
]

const MEDIA_ENTRIES = [
  { title: 'Benjamin Nazarian on Operator-Led Investing',    source: 'Private Equity Insider',     type: 'Video'   as const },
  { title: 'Inside the Lab-Grown Diamond Market',            source: 'Bloomberg Technology',        type: 'Press'   as const },
  { title: 'How Prebiotic Soda Conquered Gen Z',             source: 'Fast Company',                type: 'Press'   as const },
  { title: 'SpaceX Secondary Markets and Retail Access',     source: 'The Information',             type: 'Press'   as const },
  { title: 'Lensabl: Reimagining the Vision Category',       source: 'DTC Founders Podcast',        type: 'Podcast' as const },
  { title: 'The Rise of Health-First Consumer Brands',       source: 'Founder Stories Pod',         type: 'Podcast' as const },
  { title: 'From Real Estate to Venture: Benjamin Nazarian', source: 'LA Business Journal',         type: 'Press'   as const },
  { title: 'Operator Capital vs. Traditional VC',            source: 'Invest Like the Best',        type: 'Podcast' as const },
  { title: 'Magic Spoon\'s Path to National Retail',         source: 'CPG Weekly',                  type: 'Press'   as const },
  { title: 'Building for the Long Game',                     source: 'Meridian Business Review',    type: 'Video'   as const },
  { title: 'The New Consumer Wellness Stack',                source: 'Health Innovations Summit',   type: 'Video'   as const },
  { title: 'Parkview Financial: Private Credit in Practice', source: 'Alt Investments Today',       type: 'Press'   as const },
  { title: 'Inside Diamond Foundry\'s Supply Chain',         source: 'Material Futures Podcast',    type: 'Podcast' as const },
]

export default function NewsContent() {
  return (
    <>
      {/* Portfolio news */}
      <section className="bg-white border-b border-rule">
        <div className="section-wrap py-14">
          <p className="eyebrow text-ash mb-3">Portfolio Updates</p>
          <span className="gold-rule block mb-2" />
          {NEWS_ENTRIES.map((e) => (
            <NewsEntry key={e.company + e.date} {...e} />
          ))}
        </div>
      </section>

      {/* Media coverage table */}
      <section className="bg-cream">
        <div className="section-wrap py-14">
          <p className="eyebrow text-ash mb-3">Media Coverage</p>
          <span className="gold-rule block mb-8" />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-rule">
                  <th className="text-left text-[11px] font-semibold text-smoke uppercase tracking-wide pb-3 pr-6">Title</th>
                  <th className="text-left text-[11px] font-semibold text-smoke uppercase tracking-wide pb-3 pr-6">Source</th>
                  <th className="text-left text-[11px] font-semibold text-smoke uppercase tracking-wide pb-3">Type</th>
                </tr>
              </thead>
              <tbody>
                {MEDIA_ENTRIES.map((m) => (
                  <MediaEntry key={m.title} {...m} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
