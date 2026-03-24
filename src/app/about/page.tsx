import type { Metadata } from 'next'
import PageHeader   from '@/components/PageHeader'
import FirmStory    from '@/components/about/FirmStory'
import TeamSection  from '@/components/about/TeamSection'

export const metadata: Metadata = {
  title: 'About — Nazarian Capital',
  description: 'Operator-led private investment firm founded by Benjamin Nazarian.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        headline="An Operator's Perspective<br>on Capital"
        subheadline="Nazarian Capital invests with a working knowledge of what it takes to build and grow a company, not just a theoretical one."
      />
      <FirmStory />
      <TeamSection />
    </>
  )
}
