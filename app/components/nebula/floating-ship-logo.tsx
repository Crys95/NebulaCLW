'use client'

import { ReactNode, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

const FLOAT_LOOP = {
  y: [0, -16, -6, -18, -4, 0],
  x: [0, 8, -6, 5, -3, 0],
  rotate: [0, 1.8, -1.2, 1, -0.6, 0],
}

type FloatingShipLogoProps = {
  children: ReactNode
  className?: string
}

export const FloatingShipLogo = ({
  children,
  className,
}: FloatingShipLogoProps) => {
  const areaRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const spring = { stiffness: 110, damping: 22, mass: 0.8 }

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [14, -14]),
    spring,
  )
  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-14, 14]),
    spring,
  )
  const shiftX = useSpring(useTransform(mouseX, [-1, 1], [-14, 14]), spring)
  const shiftY = useSpring(useTransform(mouseY, [-1, 1], [-10, 10]), spring)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = areaRef.current?.getBoundingClientRect()
    if (!bounds) return

    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    mouseX.set(x * 2)
    mouseY.set(y * 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={areaRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: shiftX,
          y: shiftY,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          animate={FLOAT_LOOP}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
