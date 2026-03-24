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
        eyebrow="Investment Strategy"
        headline="Two Ways to Invest.<br>One Underlying Principle."
        subheadline="Nazarian Capital deploys capital across two tracks that reflect different needs, different risk profiles, and different time horizons, but share the same operating principle."
      />
      <TrackCards />
      <PrincipleBand />
    </>
  )
}
