'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { NebulaHero } from './pages/nebula/hero'

export function HomePage() {
  const { locale } = useLanguage()

  return (
    <div key={locale}>
      <NebulaHero />
    </div>
  )
}
