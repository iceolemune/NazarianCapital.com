import type { Metadata } from 'next'
import PageHeader   from '@/components/PageHeader'
import FirmStory    from '@/components/about/FirmStory'
import TeamSection  from '@/components/about/TeamSection'

export const metadata: Metadata = {
  title: 'About — Nazarian Capital',
  description: 'Benjamin Nazarian is the founder of Nazarian Capital and co-founder of Therabody, which he scaled to $1B in revenue across 60 countries and 10,000 retail locations.',
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
