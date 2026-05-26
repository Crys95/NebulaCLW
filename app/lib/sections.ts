export const SECTION_IDS = [
  'inicio',
  'sobre',
  'essencia',
  'servicos',
  'processo',
  'diferenciais',
  'projetos',
  'contato',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
