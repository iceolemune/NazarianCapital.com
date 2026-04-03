import type { Metadata } from 'next'
import PageHeader        from '@/components/PageHeader'
import TrackRecord       from '@/components/portfolio/TrackRecord'
import PortfolioSections from '@/components/portfolio/PortfolioSections'

export const metadata: Metadata = {
  title: 'Portfolio — Nazarian Capital',
  description: 'Selected investments across financial services, health and wellness, and growth capital.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        headline="Selected Investments"
        subheadline="A concentrated portfolio across two tracks: active operator partnerships with high-growth companies, and long-term capital positions in established market leaders."
      />
      <TrackRecord />
      <PortfolioSections />
    </>
  )
}
