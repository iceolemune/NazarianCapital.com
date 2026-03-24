import Link from 'next/link'
import LogoMark from '@/components/LogoMark'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      {/* Subtle background texture lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-[12%] w-px h-full bg-rule opacity-60" />
        <div className="absolute top-0 right-[24%] w-px h-full bg-rule opacity-30" />
      </div>

      <div className="section-wrap py-24 lg:py-32 flex flex-col items-center text-center relative">
        {/* Large watermark mark behind text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
          <LogoMark size={420} />
        </div>

        <p className="eyebrow text-ash mb-4 anim-fade-up">Private Family Office</p>
        <span className="gold-rule mx-auto mb-7 anim-fade-up-d1" />

        <h1 className="text-[2.8rem] sm:text-[3.4rem] lg:text-[3.8rem] font-light leading-[1.14] text-charcoal max-w-3xl mb-8 anim-fade-up-d1">
          Early-Stage Operator<br className="hidden sm:block" /> Partnerships.{' '}
          <span className="text-navy">Late-Stage Growth Bets.</span>
        </h1>

        <p className="text-[15px] lg:text-[16px] text-smoke leading-[1.8] max-w-[520px] mb-10 anim-fade-up-d2">
          Nazarian Capital is a private family office that invests at two ends of the growth curve,
          partnering directly with founders who need operational expertise to scale and deploying
          capital into established market leaders on the path to enduring dominance.
        </p>

        <Link href="/strategy" className="btn-primary anim-fade-up-d3">
          Explore Our Strategy
        </Link>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40 anim-fade-up-d4" aria-hidden="true">
          <div className="w-px h-8 bg-ash" />
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-ash">Scroll</span>
        </div>
      </div>
    </section>
  )
}
