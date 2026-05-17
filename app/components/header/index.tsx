'use client'

import Link from 'next/link'
import { NebulaLogo } from '@/app/components/nebula/nebula-logo'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/app/lib/utils'

const NavItens = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Contato', href: '/#contato' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 h-20 flex items-center justify-center border-b border-purple-500/10 bg-nebula-dark/80 backdrop-blur-lg"
    >
      <motion.div className="container flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center gap-3">
          <NebulaLogo
            width={48}
            height={48}
            src="/images/nebulalogo.jpeg"
            alt="Nebula CLW"
            wrapperClassName="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            className="max-h-full"
          />
          <span className="hidden sm:block font-display font-semibold text-lg gradient-text">
            Nebula CLW
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NavItens.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-gray-300 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
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
          {NavItens.map((item) => (
            <NavItem
              {...item}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      </motion.div>
    </motion.header>
  )
}
