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
  { core: [string, string, string]; glow: string; ring?: string }
> = {
  default: {
    core: ['#ffffff', '#e0e7ff', '#a5b4fc'],
    glow: 'rgba(34, 211, 238, 0.35)',
  },
  comingSoon: {
    core: ['#fecaca', '#f87171', '#dc2626'],
    glow: 'rgba(239, 68, 68, 0.45)',
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

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn('drop-shadow-2xl', className)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${glowId}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.core[0]} />
          <stop offset="45%" stopColor={colors.core[1]} />
          <stop offset="100%" stopColor={colors.core[2]} stopOpacity={0.25} />
        </radialGradient>
        <filter id={glowId} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation={active ? 3 : 2} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon
        points="50,6 61,38 96,38 68,58 79,92 50,72 21,92 32,58 4,38 39,38"
        fill={`url(#${glowId}-core)`}
        filter={`url(#${glowId})`}
      />
      {active && variant === 'comingSoon' && (
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={colors.glow}
          strokeWidth="1.5"
          opacity={0.6}
        />
      )}
    </svg>
  )
}
