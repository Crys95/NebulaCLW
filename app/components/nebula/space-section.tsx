'use client'

import { cn } from '@/app/lib/utils'
import type { SectionId } from '@/app/lib/sections'
import { FloatingSpaceIcons } from './floating-space-icons'
import { motion } from 'framer-motion'

type SpaceSectionProps = {
  id: SectionId
  children: React.ReactNode
  className?: string
  withFloatIcons?: boolean
  fullViewport?: boolean
}

export const SpaceSection = ({
  id,
  children,
  className,
  withFloatIcons = true,
  fullViewport = true,
}: SpaceSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'section-anchor relative overflow-hidden',
        fullViewport && 'min-h-[88vh] flex flex-col justify-center',
        'py-24 sm:py-32',
        className,
      )}
    >
      {withFloatIcons && <FloatingSpaceIcons />}
      <motion.div
        className="absolute inset-0 bg-nebula-radial opacity-40 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="container relative z-10 w-full">{children}</div>
    </section>
  )
}
