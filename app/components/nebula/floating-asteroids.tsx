'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type AsteroidConfig = {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
  points: string
  fill: string
}

const ASTEROIDS: AsteroidConfig[] = [
  {
    id: 1,
    top: '14%',
    left: '7%',
    size: 52,
    duration: 38,
    delay: 0,
    points: '20,4 34,12 38,28 28,38 12,36 4,22 10,10',
    fill: '#6b7280',
  },
  {
    id: 2,
    top: '62%',
    left: '82%',
    size: 44,
    duration: 42,
    delay: 2.5,
    points: '18,6 32,10 36,24 26,36 10,34 6,18 12,8',
    fill: '#78716c',
  },
  {
    id: 3,
    top: '78%',
    left: '18%',
    size: 36,
    duration: 34,
    delay: 5,
    points: '16,5 28,8 32,20 24,30 10,28 6,16',
    fill: '#57534e',
  },
  {
    id: 4,
    top: '28%',
    left: '88%',
    size: 40,
    duration: 46,
    delay: 1.2,
    points: '17,7 30,11 34,25 22,35 8,30 5,18',
    fill: '#64748b',
  },
  {
    id: 5,
    top: '48%',
    left: '52%',
    size: 28,
    duration: 52,
    delay: 7,
    points: '14,4 24,8 26,18 18,26 8,22 4,12',
    fill: '#52525b',
  },
  {
    id: 6,
    top: '8%',
    left: '58%',
    size: 32,
    duration: 40,
    delay: 3.8,
    points: '15,6 26,9 28,20 20,28 9,25 6,14',
    fill: '#71717a',
  },
  {
    id: 7,
    top: '85%',
    left: '68%',
    size: 46,
    duration: 44,
    delay: 9,
    points: '19,5 33,11 37,26 27,37 11,35 5,20',
    fill: '#6b7280',
  },
  {
    id: 8,
    top: '38%',
    left: '28%',
    size: 34,
    duration: 48,
    delay: 4.5,
    points: '16,6 27,10 30,22 21,31 9,27 5,15',
    fill: '#78716c',
  },
]

const MOBILE_ASTEROID_IDS = [1, 2, 3, 4, 5]

function AsteroidRock({
  id,
  size,
  points,
  fill,
}: Pick<AsteroidConfig, 'id' | 'size' | 'points' | 'fill'>) {
  const gradientId = `asteroid-shine-${id}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className="drop-shadow-[0_0_12px_rgba(124,58,237,0.15)]"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <polygon points={points} fill={fill} opacity={0.55} />
      <polygon points={points} fill={`url(#${gradientId})`} opacity={0.35} />
    </svg>
  )
}

export const FloatingAsteroids = () => {
  const [visible, setVisible] = useState(ASTEROIDS)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () =>
      setVisible(
        media.matches
          ? ASTEROIDS.filter((a) => MOBILE_ASTEROID_IDS.includes(a.id))
          : ASTEROIDS,
      )
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {visible.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute"
          style={{ top: asteroid.top, left: asteroid.left }}
          animate={{
            y: [0, -22, -8, -28, 0],
            x: [0, 14, -10, 8, 0],
            rotate: [0, 120, 240, 360],
            opacity: [0.35, 0.65, 0.45, 0.7, 0.35],
          }}
          transition={{
            duration: asteroid.duration,
            delay: asteroid.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <AsteroidRock
            id={asteroid.id}
            size={asteroid.size}
            points={asteroid.points}
            fill={asteroid.fill}
          />
        </motion.div>
      ))}
    </div>
  )
}
