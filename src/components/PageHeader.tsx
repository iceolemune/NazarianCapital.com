interface PageHeaderProps {
  eyebrow: string
  headline: string
  subheadline?: string
}

export default function PageHeader({ eyebrow, headline, subheadline }: PageHeaderProps) {
  return (
    <section className="border-b border-rule">
      <div className="section-wrap py-20 text-center">
        <p className="eyebrow text-ash mb-4 anim-fade-up">{eyebrow}</p>
        <span className="gold-rule mx-auto mb-6 block anim-fade-up-d1" />
        <h1
          className="text-[2.6rem] lg:text-[3rem] font-light leading-[1.18] text-charcoal max-w-2xl mx-auto mb-6 anim-fade-up-d1"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        {subheadline && (
          <p className="text-[15px] text-smoke leading-[1.8] max-w-xl mx-auto anim-fade-up-d2">
            {subheadline}
          </p>
        )}
      </div>
    </section>
  )
}
