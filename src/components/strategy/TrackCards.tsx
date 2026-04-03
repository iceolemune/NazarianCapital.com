const TRACKS = [
  {
    id:     '01',
    label:  'For Companies That Need More Than a Check',
    accent: 'navy' as const,
    tagline:'Investments in venture and growth-stage companies where Nazarian Capital takes an active role, working directly with the CEO to build the operational foundations that early-stage companies typically lack.',
    details:[
      'Working with the founder to develop the business plan and establish a clear path to scale',
      'Developing cost-effective marketing plans with a disciplined focus on ROI',
      'Guiding expansion from DTC into retail, across both domestic and international markets',
      'Developing products including selecting engineering firms and contract manufacturers in China',
      "Serving as a sounding board on strategy, culture, and the decisions that don't have obvious answers",
    ],
  },
  {
    id:     '02',
    label:  'For Companies That Have Already Proven It',
    accent: 'gold' as const,
    tagline:'Selective, high-conviction positions in established companies with demonstrated market leadership. Passive, long-term capital placed with conviction.',
    details:[
      'Category leadership with emphasis on AI, defense tech, and fintech',
      'A capital structure that respects existing investors',
      'Management teams with a track record of execution',
      'A long runway for continued value creation',
    ],
  },
]

export default function TrackCards() {
  return (
    <section className="border-b border-rule bg-white">
      <div className="section-wrap py-20">

        {/* Intro */}
        <p className="text-[14px] text-smoke leading-[1.8] max-w-2xl mb-12">
          Nazarian Capital takes a deliberate, two-track approach to investing, each driven by a
          different kind of conviction, and each designed to generate returns over a long time horizon.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TRACKS.map(({ id, label, accent, tagline, details }) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
