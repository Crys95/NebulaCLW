'use client'

import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ROUTES } from '@/app/lib/routes'

type GlowButtonProps = {
  href?: string
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  className?: string
}

export const GlowButton = ({
  href = ROUTES.contato,
  variant = 'primary',
  children,
  className,
}: GlowButtonProps) => {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300'

  const variants = {
    primary:
      'bg-nebula-gradient text-white shadow-nebula-glow hover:shadow-button',
    outline:
      'border-2 border-purple-500/50 text-gray-100 hover:border-cyan-400/60 hover:bg-purple-500/10 hover:shadow-nebula-soft',
  }

  const isExternal = href.startsWith('http')

  const linkClass = cn(base, variants[variant], className)

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={linkClass}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    </motion.div>
  )
}
