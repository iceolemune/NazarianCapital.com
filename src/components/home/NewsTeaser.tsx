import Link from 'next/link'

const NEWS_ITEMS = [
  {
    company: 'SpaceX',
    date:    'March 2026',
    headline:'SpaceX Completes Starship\'s Seventh Test Flight',
    body:    'Full booster catch and reusability milestones bring the program closer to commercial operations.',
  },
  {
    company: 'Diamond Foundry',
    date:    'February 2026',
    headline:'Diamond Foundry Expands Wafer Production for AI',
    body:    'Scale-up targets growing demand in AI compute chips and power electronics.',
  },
  {
    company: 'Magic Spoon',
    date:    'December 2025',
    headline:'Magic Spoon Expands Retail Distribution Nationwide',
    body:    'Major expansion into national grocery chains marks the brand\'s evolution from DTC to mainstream.',
  },
]

export default function NewsTeaser() {
  return (
    <section className="border-b border-rule bg-cream">
      <div className="section-wrap py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow text-navy mb-2">Portfolio News</p>
            <h2 className="text-[1.6rem] font-light text-charcoal">Latest from the Portfolio</h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-block text-[12px] font-semibold text-navy hover:text-charcoal transition-colors duration-200 tracking-[0.04em]"
          >
            View All Updates &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map(({ company, date, headline, body }) => (
            <article
              key={headline}
              className="bg-white rounded-[4px] p-7 border border-rule hover:shadow-sm transition-shadow duration-200"
            >
              <p className="eyebrow text-navy mb-1">{company}</p>
              <time className="block text-[11px] text-ash mb-3">{date}</time>
              <h3 className="text-[13px] font-semibold text-charcoal leading-[1.45] mb-3">{headline}</h3>
              <p className="text-[12px] text-smoke leading-[1.65]">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/news" className="text-[12px] font-semibold text-navy">
            View All Updates &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
