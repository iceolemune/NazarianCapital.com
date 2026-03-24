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
        eyebrow="In the News"
        headline="Portfolio Updates &amp;<br>Media Coverage"
        subheadline="Recent developments across the Nazarian Capital portfolio and selected press coverage."
      />
      <NewsContent />
    </>
  )
}
