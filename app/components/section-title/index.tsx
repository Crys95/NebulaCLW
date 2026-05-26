'use client'

import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  TbPlanet,
  TbRocket,
  TbSparkles,
  TbSatellite,
  TbAtom,
  TbMoon,
  TbStar,
  TbMeteor,
  TbUfo,
  TbComet,
} from 'react-icons/tb'

const SPACE_ICONS: IconType[] = [
  TbPlanet,
  TbRocket,
  TbSparkles,
  TbSatellite,
  TbAtom,
  TbMoon,
  TbStar,
  TbMeteor,
  TbUfo,
  TbComet,
]

type sectionTitleProps = {
  titlte: React.ReactNode
  subtitle: string
  className?: string
}

export const SectionTitles = ({
  subtitle,
  titlte,
  className,
}: sectionTitleProps) => {
  const [SpaceIcon] = useState(
    () => SPACE_ICONS[Math.floor(Math.random() * SPACE_ICONS.length)],
  )

  const animeProps = {
    initial: { opacity: 0, x: -100 },
    exit: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        {...animeProps}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 font-mono text-sm text-purple-400"
      >
        <SpaceIcon className="h-4 w-4 shrink-0 text-cyan-400/90" strokeWidth={1.5} />
        {subtitle}
      </motion.span>
      <motion.h3
        {...animeProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-medium"
      >
        {titlte}
      </motion.h3>
    </div>
  )
}
