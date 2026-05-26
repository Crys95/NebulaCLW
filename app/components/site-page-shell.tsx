'use client'

import { useLanguage } from '@/app/contexts/language-context'

/** Remonta conteúdo ao trocar idioma (animações). */
export function SitePageShell({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage()

  return (
    <div key={locale} className="relative min-h-[calc(100dvh-5rem)]">
      {children}
    </div>
  )
}
