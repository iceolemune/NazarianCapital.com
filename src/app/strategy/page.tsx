import type { Metadata } from 'next'
import PageHeader    from '@/components/PageHeader'
import TrackCards    from '@/components/strategy/TrackCards'
import PrincipleBand from '@/components/strategy/PrincipleBand'

export const metadata: Metadata = {
  title: 'Strategy — Nazarian Capital',
  description: 'Two investment tracks: Operator Partnerships and Growth Capital.',
}

export default function StrategyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Strategy"
        headline="Two Ways to Invest.<br>One Underlying Principle."
        subheadline="A deliberate, two-track approach, each driven by a different kind of conviction, designed to generate returns over a long time horizon."
      />
      <TrackCards />
      <PrincipleBand />
    </>
  )
}
