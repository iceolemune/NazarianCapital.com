const TEAM = [
  {
    name: 'Benjamin Nazarian',
    role: 'Founder & Principal',
    bio:  'Seasoned operator and investor with decades of experience founding, scaling, and advising companies across real estate, technology, and consumer markets. Founder of Omninet Capital and active strategic partner at Parkview Financial and Constellation Capital. Benjamin brings hands-on operational expertise in business planning, DTC-to-retail expansion, marketing, and organizational scaling.',
  },
  {
    name: 'Sienna Nazarian',
    role: 'Scout — Health & Wellness',
    bio:  'Focuses on identifying early-stage consumer product companies in health and wellness. With a background in product design engineering, she brings a founder-level lens to evaluating how products are built, differentiated, and positioned for scale. Her coverage expands Nazarian Capital\'s reach into one of the fastest-growing segments of the consumer market.',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white border-b border-rule">
      <div className="section-wrap py-20">
        <p className="eyebrow text-ash mb-4">Team</p>
        <span className="gold-rule mb-10 block" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {TEAM.map(({ name, role, bio }) => (
            <div
              key={name}
              className="bg-cream rounded-[4px] border border-rule p-8 hover:border-navy/30 transition-colors duration-200"
            >
              <h3 className="text-[15px] font-semibold text-charcoal mb-1">{name}</h3>
              <p className="eyebrow text-navy mb-5">{role}</p>
              <p className="text-[12px] text-smoke leading-[1.75]">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
