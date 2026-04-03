const OUTCOMES = [
  {
    company:    'Therabody',
    role:       'Co-Founder and CEO',
    result:     '$1B+ Revenue Scaled',
    detail:     'Took the company from inception to over $1 billion in revenue across more than 60 countries and 10,000 retail locations worldwide, building one of the most recognized names in consumer wellness technology.',
    status:     'Active',
    color:      'green',
  },
  {
    company:    'Poppi',
    role:       'Growth Capital Investor',
    result:     'Acquired by PepsiCo, 2025',
    detail:     'Early-stage investor in the prebiotic soda brand that disrupted the legacy beverage category and was subsequently acquired by PepsiCo in a landmark 2025 transaction.',
    status:     'Exited',
    color:      'gold',
  },
]

export default function TrackRecord() {
  return (
    <section className="border-b border-rule bg-navy text-white">
      <div className="section-wrap py-16">
        <p className="eyebrow text-gold/80 mb-3">Track Record</p>
        <h2 className="text-[1.6rem] font-light text-white mb-10">Notable Outcomes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OUTCOMES.map(({ company, role, result, detail, status, color }) => (
            <div
              key={company}
              className="rounded-[4px] border border-white/10 p-8 bg-white/5 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[18px] font-semibold text-white leading-tight">{company}</p>
                  <p className="text-[11.5px] text-white/50 mt-1">{role}</p>
                </div>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-[2px] whitespace-nowrap flex-shrink-0 ${
                    color === 'green'
                      ? 'bg-[#EAF4EC] text-[#2A7A3A]'
                      : 'bg-gold-tint text-[#A07820]'
                  }`}
                >
                  {status}
                </span>
              </div>
              <div className="w-8 h-px bg-gold/60" />
              <p className="text-[13px] text-gold font-semibold">{result}</p>
              <p className="text-[12.5px] text-white/60 leading-[1.75]">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
