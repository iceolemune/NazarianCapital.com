import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const magnolia = localFont({
  src: [
    { path: '../fonts/MagnoliaBold.otf',   weight: '700', style: 'normal' },
    { path: '../fonts/MagnoliaMedium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/MagnoliaRegular.otf',weight: '400', style: 'normal' },
  ],
  variable: '--font-magnolia',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'Nazarian Capital',
    template: '%s | Nazarian Capital',
  },
  description:
    'A private family office investing at two ends of the growth curve, partnering with founders who need operational expertise, and deploying capital into established market leaders.',
  metadataBase: new URL('https://nazariancapital.com'),
  openGraph: {
    siteName:    'Nazarian Capital',
    type:        'website',
    title:       'Nazarian Capital',
    description: 'A private family office investing at two ends of the growth curve.',
    images: [
      {
        url:    '/opengraph-image',
        width:  1200,
        height: 630,
        alt:    'Nazarian Capital',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Nazarian Capital',
    description: 'A private family office investing at two ends of the growth curve.',
    images:      ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${magnolia.variable}`}>
      <body className="font-sans bg-cream text-charcoal antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
