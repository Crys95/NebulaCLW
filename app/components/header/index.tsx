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

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: '/#inicio' },
    { label: t.nav.about, href: '/#sobre' },
    { label: t.nav.services, href: '/#servicos' },
    { label: t.nav.contact, href: '/#contato' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 h-20 flex items-center justify-center border-b border-purple-500/10 bg-nebula-dark/80 backdrop-blur-lg"
    >
      <motion.div className="container flex items-center justify-between gap-4">
        <Link href="/#inicio" className="flex items-center gap-3 min-w-0">
          <NebulaLogo
            width={48}
            height={48}
            src="/images/logonebula.png"
            alt={t.footer.logoAlt}
            wrapperClassName="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            className="max-h-full"
          />
          <span className="hidden sm:block font-display font-semibold text-lg gradient-text">
            Nebula CLW
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavItem {...item} key={item.href} />
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        <motion.div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-gray-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className={cn(
          'md:hidden overflow-hidden absolute top-20 left-0 right-0 bg-nebula-dark/95 backdrop-blur-lg border-b border-purple-500/10',
          !menuOpen && 'pointer-events-none',
        )}
      >
        <nav className="container py-4 flex flex-col gap-4">
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
