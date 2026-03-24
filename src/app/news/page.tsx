import type { Metadata } from 'next'
import PageHeader  from '@/components/PageHeader'
import NewsContent from '@/components/news/NewsContent'

export const metadata: Metadata = {
  title: 'News — Nazarian Capital',
  description: 'Portfolio updates and media coverage from Nazarian Capital.',
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        headline="In the News"
        subheadline="A running record of milestones, announcements, and developments across the Nazarian Capital portfolio."
      />
      <NewsContent />
    </>
  )
}
