const OUTLETS = [
  'CNBC',
  'Bloomberg',
  'TD Securities',
  'Montgomery Summit',
  'Fitt Insider',
  'HALO Talks',
]

export default function FeaturedIn() {
  return (
    <section className="border-b border-rule bg-cream">
      <div className="section-wrap py-10">
        <p className="text-center eyebrow text-ash mb-7">As Featured In</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {OUTLETS.map((outlet) => (
            <span
              key={outlet}
              className="text-[13px] font-semibold text-smoke/50 tracking-[0.04em] whitespace-nowrap"
            >
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
