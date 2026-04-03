const STATS = [
  { value: '$1B+',   label: 'Revenue Scaled'          },
  { value: '60+',    label: 'Countries'                },
  { value: '10,000+',label: 'Retail Locations'         },
  { value: '2',      label: 'Successful Exits'         },
]

export default function StatStrip() {
  return (
    <section className="bg-navy border-b border-navy/30">
      <div className="section-wrap py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center md:px-8">
              <p className="text-[2rem] font-light text-white leading-none mb-1">{value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
