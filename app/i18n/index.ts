import type { Locale } from './types'
import { pt, type Dictionary } from './dictionaries/pt'
import { en } from './dictionaries/en'

export type { Locale, Dictionary }
export { locales, defaultLocale, localeLabels } from './types'

const dictionaries: Record<Locale, Dictionary> = { pt, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
