'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { NebulaHero } from './pages/nebula/hero'
import { NebulaAbout } from './pages/nebula/about'
import { NebulaValues } from './pages/nebula/values'
import { NebulaServices } from './pages/nebula/services'
import { NebulaProcess } from './pages/nebula/process'
import { NebulaBenefits } from './pages/nebula/benefits'

/** Remonta as seções ao trocar idioma para as animações rodarem de novo. */
export function HomePage() {
  const { locale } = useLanguage()

  return (
    <div key={locale}>
      <NebulaHero />
      <NebulaAbout />
      <NebulaValues />
      <NebulaServices />
      <NebulaProcess />
      <NebulaBenefits />
    </div>
  )
}
