'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getDictionary, type Dictionary } from '@/app/i18n'
import { defaultLocale, type Locale } from '@/app/i18n/types'

const STORAGE_KEY = 'nebula-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'pt' ? stored : defaultLocale
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLocaleState(readStoredLocale())
    setReady(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
  }, [])

  useEffect(() => {
    if (!ready) return
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale, ready])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
