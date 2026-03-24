import Link from 'next/link'

export default function PhilosophyBand() {
  return (
    <section className="bg-navy">
      <div className="section-wrap py-24 flex flex-col items-center text-center">
        <span className="gold-rule mx-auto mb-8" />
        <h2 className="text-[1.7rem] sm:text-[2rem] font-light text-white leading-[1.45] max-w-xl mb-6">
          Most investors write checks.<br />
          Nazarian Capital rolls up its sleeves.
        </h2>
        <p className="text-[14px] text-white/60 leading-[1.85] max-w-[480px] mb-10">
          The hardest part of building a company is not the idea. It is navigating the growth
          curve for the first time. That is where experience becomes the most valuable form
          of capital.
        </p>
        <Link
          href="/strategy"
          className="text-[12px] font-semibold text-white border border-white/30 px-8 py-3.5 rounded-[3px] hover:bg-white/10 transition-colors duration-200 tracking-[0.08em] uppercase"
        >
          Learn Our Approach
        </Link>
      </div>
    </section>
  )
}
