'use client'

import { useId } from 'react'
import { cn } from '@/app/lib/utils'

export type StarVariant = 'default' | 'comingSoon'

type StarShapeProps = {
  size: number
  active?: boolean
  variant?: StarVariant
  className?: string
}

const VARIANT_STYLES: Record<
  StarVariant,
  { core: [string, string, string]; stroke: string }
> = {
  default: {
    core: ['#ffffff', '#f0f9ff', '#c4b5fd'],
    stroke: 'rgba(255, 255, 255, 0.35)',
  },
  comingSoon: {
    core: ['#fff1f2', '#fca5a5', '#ef4444'],
    stroke: 'rgba(254, 202, 202, 0.5)',
  },
}

export const StarShape = ({
  size,
  active = false,
  variant = 'default',
  className,
}: StarShapeProps) => {
  const uid = useId().replace(/:/g, '')
  const glowId = `star-glow-${uid}`
  const colors = VARIANT_STYLES[variant]
  const blur = active ? 5 : 4

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${glowId}-core`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={colors.core[0]} />
          <stop offset="40%" stopColor={colors.core[1]} />
          <stop offset="100%" stopColor={colors.core[2]} stopOpacity={0.55} />
        </radialGradient>
        <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation={blur} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon
        points="50,6 61,38 96,38 68,58 79,92 50,72 21,92 32,58 4,38 39,38"
        fill={`url(#${glowId}-core)`}
        stroke={colors.stroke}
        strokeWidth="0.6"
        filter={`url(#${glowId})`}
      />
    </svg>
  )
}
