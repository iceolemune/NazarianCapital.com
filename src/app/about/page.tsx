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
        eyebrow="About"
        headline="An Operator's Perspective on Capital"
      />
      <FirmStory />
      <TeamSection />
    </>
  )
}
