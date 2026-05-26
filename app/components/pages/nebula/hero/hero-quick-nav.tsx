'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TbPlanet,
  TbAtom,
  TbRocket,
  TbRoute,
  TbShieldCheck,
  TbTelescope,
  TbMessageCircle,
} from 'react-icons/tb'
import type { IconType } from 'react-icons'
import { GlowButton } from '@/app/components/nebula/glow-button'
import { useLanguage } from '@/app/contexts/language-context'
import { ROUTES } from '@/app/lib/routes'
import { cn } from '@/app/lib/utils'

type NavKey =
  | 'about'
  | 'values'
  | 'services'
  | 'process'
  | 'benefits'
  | 'projects'
  | 'contact'

const NAV_LABEL: Record<NavKey, 'about' | 'values' | 'services' | 'process' | 'benefits' | 'projects' | 'contact'> = {
  about: 'about',
  values: 'values',
  services: 'services',
  process: 'process',
  benefits: 'benefits',
  projects: 'projects',
  contact: 'contact',
}

const NAV_CONFIG: {
  key: NavKey
  href: string
  Icon: IconType
  featured?: boolean
}[] = [
  { key: 'about', href: ROUTES.sobre, Icon: TbPlanet },
  { key: 'values', href: ROUTES.essencia, Icon: TbAtom },
  { key: 'services', href: ROUTES.servicos, Icon: TbRocket },
  { key: 'process', href: ROUTES.processo, Icon: TbRoute },
  { key: 'benefits', href: ROUTES.diferenciais, Icon: TbShieldCheck },
  { key: 'projects', href: ROUTES.projetos, Icon: TbTelescope },
  { key: 'contact', href: ROUTES.contato, Icon: TbMessageCircle, featured: true },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.85 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export const HeroQuickNav = () => {
  const { t } = useLanguage()
  const gridItems = NAV_CONFIG.filter((n) => !n.featured)
  const featured = NAV_CONFIG.find((n) => n.featured)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-10 w-full max-w-4xl px-1"
    >
      <motion.div variants={item} className="mb-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
          {t.hero.exploreTitle}
        </p>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">{t.hero.exploreSubtitle}</p>
      </motion.div>

      <motion.div
        variants={item}
        className="mb-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
      >
        <GlowButton href={ROUTES.contato} className="w-full sm:w-auto sm:min-w-[200px]">
          {t.hero.ctaProject}
        </GlowButton>
        <GlowButton
          href={ROUTES.projetos}
          variant="outline"
          className="w-full sm:w-auto sm:min-w-[200px]"
        >
          {t.hero.ctaProjects}
        </GlowButton>
      </motion.div>

      <motion.div
        variants={item}
        className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-3 backdrop-blur-md sm:p-4"
        style={{
          boxShadow:
            '0 0 0 1px rgba(124, 58, 237, 0.06), 0 12px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-3">
          {gridItems.map(({ key, href, Icon }) => (
            <motion.div key={key} variants={item}>
              <Link
                href={href}
                className={cn(
                  'group flex flex-col items-center gap-2 rounded-xl border border-purple-500/15',
                  'bg-nebula-navy/40 px-3 py-4 text-center transition-all duration-300',
                  'hover:border-cyan-400/40 hover:bg-purple-500/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]',
                )}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/15 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="font-display text-sm font-medium text-gray-100">
                  {t.nav[NAV_LABEL[key]]}
                </span>
                <span className="line-clamp-2 text-[10px] leading-snug text-gray-500 sm:text-xs">
                  {t.hero.navHints[key]}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {featured && (
          <motion.div variants={item} className="mt-3">
            <Link
              href={featured.href}
              className={cn(
                'group flex items-center gap-4 rounded-xl border border-cyan-400/30 p-4 sm:p-5',
                'bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-cyan-500/15',
                'transition-all duration-300 hover:border-cyan-400/50',
                'hover:shadow-[0_0_32px_rgba(124,58,237,0.35)]',
              )}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-nebula-gradient text-white shadow-nebula-glow">
                <featured.Icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div className="min-w-0 flex-1 text-left">
                <span className="font-display text-base font-semibold text-gray-100 sm:text-lg">
                  {t.nav.contact}
                </span>
                <span className="mt-0.5 block text-xs text-gray-400 sm:text-sm">
                  {t.hero.navHints.contact}
                </span>
              </div>
              <span className="hidden font-mono text-sm text-cyan-400 sm:inline">→</span>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
