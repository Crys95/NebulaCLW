export const ROUTES = {
  home: '/',
  sobre: '/sobre',
  essencia: '/essencia',
  servicos: '/servicos',
  processo: '/processo',
  diferenciais: '/diferenciais',
  contato: '/contato',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
