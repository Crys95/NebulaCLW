'use client'

import { cn } from '@/app/lib/utils'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type SpaceCardProps = HTMLMotionProps<'article'> & {
  children: ReactNode
  floatDelay?: number
  icon?: ReactNode
}

export const SpaceCard = ({
  children,
  className,
  floatDelay = 0,
  icon,
  ...props
}: SpaceCardProps) => {
  return (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: '0 0 40px rgba(124, 58, 237, 0.25), 0 0 80px rgba(34, 211, 238, 0.12)',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={cn(
        'space-card group relative overflow-hidden p-6 sm:p-8',
        className,
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{
          duration: 5 + floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {icon && (
        <motion.div
          className="relative mb-5 inline-flex"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + floatDelay * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: floatDelay,
          }}
        >
          {icon}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.article>
  )
}
