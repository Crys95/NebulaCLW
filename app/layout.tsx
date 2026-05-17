import { Inter, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact'
import { Footer } from './components/footer'
import { BackTopTop } from './components/back-to-top'
import type { Metadata } from 'next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Nebula CLW | Desenvolvimento de Sites',
  description:
    'Nebula CLW — Cloud Log Web. Criamos sites profissionais com tecnologia futurista, inovação e design que expande seu universo digital.',
  icons: {
    icon: [
      { url: '/images/logonebula.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logonebula.png',
    shortcut: '/images/logonebula.png',
  },
  keywords: [
    'desenvolvimento de sites',
    'Nebula CLW',
    'agência web',
    'landing page',
    'e-commerce',
  ],
  openGraph: {
    title: 'Nebula CLW | Desenvolvimento de Sites',
    description:
      'Sites que nascem da inovação e expandem como o universo. Cloud Log Web.',
    images: ['/images/nebulasublog.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plexMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <ContactForm />
        <Footer />
        <BackTopTop />
      </body>
    </html>
  )
}
