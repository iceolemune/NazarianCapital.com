import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProofPoints from '@/components/home/ProofPoints'
import NewsTeaser from '@/components/home/NewsTeaser'
import PhilosophyBand from '@/components/home/PhilosophyBand'

export const metadata: Metadata = {
  title: 'Nazarian Capital — Private Family Office',
  description:
    'A private family office investing at two ends of the growth curve — partnering with founders who need operational expertise, and deploying capital into established market leaders.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofPoints />
      <NewsTeaser />
      <PhilosophyBand />
    </>
  )
}
