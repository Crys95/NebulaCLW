'use client'

import { motion } from 'framer-motion'
import {
  TbPlanet,
  TbRocket,
  TbSparkles,
  TbSatellite,
  TbAtom,
} from 'react-icons/tb'
import type { IconType } from 'react-icons'

type FloatingIcon = {
  Icon: IconType
  className: string
  duration: number
  delay: number
}

const FLOATING_ICONS: FloatingIcon[] = [
  {
    Icon: TbPlanet,
    className: 'left-[6%] top-[18%] text-purple-400/25',
    duration: 9,
    delay: 0,
  },
  {
    Icon: TbRocket,
    className: 'right-[8%] top-[22%] text-cyan-400/20',
    duration: 11,
    delay: 0.8,
  },
  {
    Icon: TbSparkles,
    className: 'left-[12%] bottom-[20%] text-magenta-400/20',
    duration: 8,
    delay: 1.2,
  },
  {
    Icon: TbSatellite,
    className: 'right-[10%] bottom-[24%] text-cyan-400/15',
    duration: 10,
    delay: 0.4,
  },
  {
    Icon: TbAtom,
    className: 'left-1/2 top-[8%] -translate-x-1/2 text-purple-300/15',
    duration: 12,
    delay: 1.6,
  },
]

export const FloatingSpaceIcons = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {FLOATING_ICONS.map(({ Icon, className, duration, delay }) => (
        <motion.div
          key={className}
          className={`absolute ${className}`}
          animate={{
            y: [0, -14, -6, -18, 0],
            x: [0, 6, -4, 5, 0],
            rotate: [0, 8, -6, 4, 0],
            opacity: [0.35, 0.7, 0.5, 0.8, 0.35],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" strokeWidth={1.25} />
        </motion.div>
      ))}
    </div>
  )
}
