export type ProjectId =
  | 'best-mile'
  | 'portal-passarinheiros'
  | 'antidoping-eat'
  | 'portfolio-crystyan'

export type ProjectMeta = {
  id: ProjectId
  href: string
  image: string
  tech: string[]
  featured?: boolean
  external?: boolean
  /** App publicado na Google Play / App Store */
  inStores?: boolean
  /** Projeto ainda em desenvolvimento — estrela vermelha */
  inDevelopment?: boolean
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'best-mile',
    href: '',
    image: '/images/projetos/bestmile.jpeg',
    tech: [
      'App Mobile',
      'Romaneios',
      'Assinatura digital',
      'Código de barras',
      'Etiquetas',
    ],
    featured: true,
    external: false,
    inStores: true,
  },
  {
    id: 'portal-passarinheiros',
    href: 'https://www.passarinheirosecia.com.br/',
    image: '/images/projetos/passarinho.jpeg',
    tech: ['Portal digital', 'Revistas', 'Vídeos', 'Podcasts', 'Assinatura'],
    featured: true,
    external: true,
  },
  {
    id: 'antidoping-eat',
    href: '',
    image: '/images/projetos/antidoping.jpeg',
    tech: [
      'Desktop',
      'App Mobile',
      'Cadeia de custódia',
      'Assinatura digital',
      'Rastreabilidade',
    ],
    featured: true,
    external: false,
    inDevelopment: true,
  },
  {
    id: 'portfolio-crystyan',
    href: 'https://portfolio-lkpu6atg6-crys95s-projects.vercel.app/',
    image: '/images/projetos/portifolio-crystyan.png',
    tech: [
      'Portfólio web',
      'Apresentação profissional',
      'Design responsivo',
      'Vitrine de projetos',
      'Experiência para recrutadores',
    ],
    featured: true,
    external: true,
  },
]

export function isProjectInDevelopment(project: ProjectMeta): boolean {
  return Boolean(project.inDevelopment)
}
