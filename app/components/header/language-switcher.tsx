'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { localeLabels, type Locale } from '@/app/i18n/types'
import { cn } from '@/app/lib/utils'

const options: Locale[] = ['pt', 'en']

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="flex shrink-0 overflow-hidden rounded-lg border border-purple-500/30 bg-nebula-dark/60 text-xs font-mono"
    >
      {options.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          aria-label={localeLabels[code]}
          className={cn(
            'px-2.5 py-1.5 transition-colors sm:px-3',
            locale === code
              ? 'bg-nebula-gradient text-white'
              : 'text-gray-400 hover:text-cyan-400',
          )}
        >
          {t.language[code]}
        </button>
      ))}
    </div>
  )
}
