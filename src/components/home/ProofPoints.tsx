const PROOF_POINTS = [
  {
    label: 'Operator-Led',
    body:  'Capital backed by decades of hands-on experience building and scaling companies, not just funding them.',
  },
  {
    label: 'Two-Track Portfolio',
    body:  'Active partnerships with high-growth ventures. Selective positions in category-defining late-stage companies.',
  },
  {
    label: 'Built-In Resources',
    body:  'Portfolio companies benefit from a network and operational infrastructure that most investors simply do not have.',
  },
]

export default function ProofPoints() {
  return (
    <section className="border-b border-rule bg-white">
      <div className="section-wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rule">
          {PROOF_POINTS.map(({ label, body }) => (
            <div key={label} className="px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0">
              <span className="gold-rule mb-5 block" />
              <p className="eyebrow text-navy mb-3">{label}</p>
              <p className="text-[13px] text-smoke leading-[1.75]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
