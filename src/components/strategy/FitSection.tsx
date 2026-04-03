const FIT_YES = [
  'Consumer brands scaling from DTC into retail or international markets',
  'Health, wellness, fitness, or better-for-you consumer product companies',
  'Founders who want an operator in their corner, not just a check',
  'Companies generating revenue and ready to build the infrastructure to sustain growth',
  'Businesses facing operational complexity for the first time: hiring, systems, channels',
]

const FIT_NO = [
  'Pre-revenue or purely idea-stage companies',
  'Pure enterprise software or B2B SaaS without a consumer component',
  'Biotech, pharma, or deep science requiring domain-specific expertise',
  'Founders seeking a passive investor with no operator involvement',
  'Opportunities requiring a lead investor below a minimum check size',
]

export default function FitSection() {
  return (
    <section className="border-b border-rule bg-cream">
      <div className="section-wrap py-20">
        <p className="eyebrow text-ash mb-4">Who We Work With</p>
        <span className="gold-rule block mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Ideal for */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2A7A3A] flex-shrink-0" />
              <p className="text-[13px] font-semibold text-charcoal uppercase tracking-[0.08em]">Ideal Fit</p>
            </div>
            <ul className="space-y-4">
              {FIT_YES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-charcoal leading-[1.7]">
                  <span className="mt-[7px] w-[5px] h-[5px] flex-shrink-0 rounded-full bg-[#2A7A3A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-rule flex-shrink-0" />
              <p className="text-[13px] font-semibold text-charcoal uppercase tracking-[0.08em]">Not the Right Fit</p>
            </div>
            <ul className="space-y-4">
              {FIT_NO.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-smoke leading-[1.7]">
                  <span className="mt-[7px] w-[5px] h-[5px] flex-shrink-0 rounded-full bg-ash" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
