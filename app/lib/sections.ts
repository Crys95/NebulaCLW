export const SECTION_IDS = [
  'inicio',
  'sobre',
  'essencia',
  'servicos',
  'processo',
  'diferenciais',
  'contato',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
