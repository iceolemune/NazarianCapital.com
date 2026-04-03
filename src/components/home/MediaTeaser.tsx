import Link from 'next/link'

const MEDIA_ITEMS = [
  {
    title:  'CNBC: Benjamin Nazarian and Maria Sharapova on Investing in Wellness Tech Company Therabody',
    source: 'CNBC',
    type:   'Video',
    url:    'https://youtu.be/CeJ0yur6sfQ',
  },
  {
    title:  'Elevating Wellness & Recovery with Therabody',
    source: 'Bloomberg Podcast',
    type:   'Podcast',
    url:    'https://www.bloomberg.com/news/audio/2021-06-23/elevating-wellness-recovery-with-therabody-podcast',
  },
  {
    title:  'Montgomery Summit: The Future of Disruption with Benjamin Nazarian',
    source: 'Montgomery Summit',
    type:   'Video',
    url:    'https://youtu.be/BbtR-6_LDvU',
  },
]

const TYPE_LABEL: Record<string, string> = {
  Video:   'Video',
  Podcast: 'Podcast',
  Press:   'Press',
}

export default function MediaTeaser() {
  return (
    <section className="border-b border-rule bg-cream">
      <div className="section-wrap py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow text-navy mb-2">Media</p>
            <h2 className="text-[1.6rem] font-light text-charcoal">In the Media</h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-block text-[12px] font-semibold text-navy hover:text-charcoal transition-colors duration-200 tracking-[0.04em]"
          >
            View All Media &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDIA_ITEMS.map(({ title, source, type, url }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[4px] p-7 border border-rule hover:shadow-sm hover:border-navy/30 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="eyebrow text-navy">{source}</span>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.08em] text-ash bg-rule px-2 py-[3px] rounded-[3px]">
                  {TYPE_LABEL[type] ?? type}
                </span>
              </div>
              <p className="text-[13px] font-semibold text-charcoal leading-[1.45] flex-1">{title}</p>
              <p className="mt-4 text-[11px] font-semibold text-navy tracking-[0.04em]">
                Watch / Listen &rarr;
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/news" className="text-[12px] font-semibold text-navy">
            View All Media &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
