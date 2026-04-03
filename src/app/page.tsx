import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StatStrip from '@/components/home/StatStrip'
import ProofPoints from '@/components/home/ProofPoints'
import FeaturedIn from '@/components/home/FeaturedIn'
import MediaTeaser from '@/components/home/MediaTeaser'
import NewsTeaser from '@/components/home/NewsTeaser'
import PhilosophyBand from '@/components/home/PhilosophyBand'

export const metadata: Metadata = {
  title: 'Nazarian Capital — Private Family Office',
  description:
    'Benjamin Nazarian built Therabody to $1B in revenue across 60 countries. Nazarian Capital is his private family office, partnering with founders who need an operator, and deploying capital into category-defining companies.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <ProofPoints />
      <FeaturedIn />
      <MediaTeaser />
      <NewsTeaser />
      <PhilosophyBand />
    </>
  )
}
