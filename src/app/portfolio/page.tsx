import type { Metadata } from 'next'
import PageHeader        from '@/components/PageHeader'
import PortfolioSections from '@/components/portfolio/PortfolioSections'

export const metadata: Metadata = {
  title: 'Portfolio — Nazarian Capital',
  description: 'Selected investments across financial services, health and wellness, and growth capital.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Investments"
        headline="A Portfolio Built on<br>Operational Conviction"
        subheadline="Each holding reflects a view that the underlying business is led well, positioned in a durable category, and capable of compounding over time."
      />
      <PortfolioSections />
    </>
  )
}
