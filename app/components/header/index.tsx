'use client'

import Link from 'next/link'
import { NebulaLogo } from '@/app/components/nebula/nebula-logo'
import { NavItem } from './nav-item'
import { LanguageSwitcher } from './language-switcher'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/app/lib/utils'
import { ROUTES } from '@/app/lib/routes'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: ROUTES.home },
    { label: t.nav.about, href: ROUTES.sobre },
    { label: t.nav.values, href: ROUTES.essencia },
    { label: t.nav.services, href: ROUTES.servicos },
    { label: t.nav.process, href: ROUTES.processo },
    { label: t.nav.benefits, href: ROUTES.diferenciais },
    { label: t.nav.contact, href: ROUTES.contato },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 flex h-20 w-full items-center justify-center border-b border-purple-500/10 bg-nebula-dark/70 backdrop-blur-xl"
    >
      <div className="container flex items-center justify-between gap-3">
        <Link href={ROUTES.home} className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <NebulaLogo
            width={48}
            height={48}
            src="/images/logonebula.png"
            alt={t.footer.logoAlt}
            wrapperClassName="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
            className="max-h-full"
          />
          <span className="hidden font-display text-base font-semibold gradient-text sm:block lg:text-lg">
            Nebula CLW
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          <nav className="flex max-w-[52vw] items-center gap-3 overflow-x-auto scrollbar-none xl:max-w-none xl:gap-5">
            {navItems.map((item) => (
              <NavItem {...item} key={item.href} />
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="p-2 text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className={cn(
          'absolute left-0 right-0 top-20 overflow-hidden border-b border-purple-500/10 bg-nebula-dark/95 backdrop-blur-xl lg:hidden',
          !menuOpen && 'pointer-events-none',
        )}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <NavItem
              {...item}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      </motion.div>
    </motion.header>
  )
}
