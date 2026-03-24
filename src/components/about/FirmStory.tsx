const BELIEFS = [
  {
    title: 'Operational experience is the scarcest resource.',
    body:  'Most founders are building their first company. The challenges they face can only be navigated well with experience.',
  },
  {
    title: 'Patient capital outperforms impatient capital.',
    body:  'The goal is never a quick exit. It is building something that lasts.',
  },
  {
    title: 'Resources matter as much as money.',
    body:  'Portfolio companies gain access to an operational network and a founder who has been through the growth curve and come out the other side.',
  },
]

export default function FirmStory() {
  return (
    <section className="border-b border-rule">
      <div className="section-wrap py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-20">

          {/* Story copy */}
          <div>
            <p className="eyebrow text-ash mb-4">The Firm</p>
            <span className="gold-rule mb-8 block" />
            <div className="space-y-5 text-[14px] text-charcoal leading-[1.9]">
              <p>
                Nazarian Capital was founded by Benjamin Nazarian on a straightforward observation:
                most companies that struggle to scale do not have a capital problem. They have an
                operational one. They have never designed systems that survive five times the
                headcount. They have never navigated the complexity of expanding a DTC business
                into retail across domestic and international markets.
              </p>
              <p>
                That is the gap Nazarian Capital was built to fill. The firm draws on deep
                operational experience built across real estate, technology, and private enterprise,
                including founding and scaling Omninet Capital, a multifamily real estate platform,
                and serving as an active strategic partner to portfolio companies through roles at
                Parkview Financial and Constellation Capital. These are not advisory relationships.
                They are working partnerships where the firm sits alongside the CEO.
              </p>
              <p>
                Nazarian Capital also brings deep expertise and an extensive network in the health
                and wellness industry, with a dedicated focus on identifying and investing in the
                next generation of consumer health and wellness companies.
              </p>
            </div>
          </div>

          {/* Philosophy sidebar */}
          <div className="border-l-[3px] border-navy pl-8 lg:pl-10">
            <p className="eyebrow text-navy mb-6">What We Believe</p>
            <div className="space-y-7">
              {BELIEFS.map(({ title, body }) => (
                <div key={title}>
                  <p className="text-[13px] font-semibold text-charcoal leading-[1.4] mb-2">{title}</p>
                  <p className="text-[12px] text-smoke leading-[1.7]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
