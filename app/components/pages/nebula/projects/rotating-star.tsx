'use client'

import { motion } from 'framer-motion'
import { StarShape, type StarVariant } from './star-shape'
import { getStarGlowFilter } from './star-glow'

type RotatingStarProps = {
  size: number
  variant?: StarVariant
  active?: boolean
  rotationDuration?: number
}

export const RotatingStar = ({
  size,
  variant = 'default',
  active = false,
  rotationDuration = 22,
}: RotatingStarProps) => {
  return (
    <motion.div
      className="flex items-center justify-center will-change-transform"
      style={{ filter: getStarGlowFilter(variant, active) }}
      animate={{ rotate: 360 }}
      transition={{
        duration: rotationDuration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <StarShape size={size} variant={variant} active={active} />
    </motion.div>
  )
}
