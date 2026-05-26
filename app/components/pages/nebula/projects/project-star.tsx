'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { RotatingStar } from './rotating-star'
import type { StarVariant } from './star-shape'
import type { StarDriftLayout } from '@/app/lib/project-star-layout'
import { PROJECTS, type ProjectId } from '@/app/lib/projects'
import { cn } from '@/app/lib/utils'

const MOBILE_MIN_STAR = 58
const MOBILE_BREAKPOINT = 768

type ProjectCopy = {
  title: string
}

type ProjectStarProps = {
  projectId: ProjectId
  copy: ProjectCopy
  layout: StarDriftLayout
  hoveredId: ProjectId | null
  pinnedId: ProjectId | null
  onHover: (id: ProjectId) => void
  onLeave: (id: ProjectId) => void
  onPin: (id: ProjectId) => void
}

function getStarVariant(projectId: ProjectId): StarVariant {
  const project = PROJECTS.find((p) => p.id === projectId)
  return project?.inDevelopment ? 'comingSoon' : 'default'
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return isMobile
}

export const ProjectStar = ({
  projectId,
  copy,
  layout,
  hoveredId,
  pinnedId,
  onHover,
  onLeave,
  onPin,
}: ProjectStarProps) => {
  const isMobile = useIsMobile()
  const isHovered = hoveredId === projectId && pinnedId === null
  const isPinnedHere = pinnedId === projectId
  const isOtherActive =
    (hoveredId !== null && hoveredId !== projectId) ||
    (pinnedId !== null && pinnedId !== projectId)
  const variant = getStarVariant(projectId)
  const starSize = isMobile ? Math.max(layout.size, MOBILE_MIN_STAR) : layout.size

  if (isPinnedHere) {
    return null
  }

  return (
    <motion.div
      className="absolute z-20 touch-manipulation"
      style={{
        left: `${layout.startX}%`,
        top: `${layout.startY}%`,
      }}
      animate={{
        x: layout.path.x.map((v) => `${v}%`),
        y: layout.path.y.map((v) => `${v}%`),
        opacity: isOtherActive ? (isMobile ? 0.55 : 0.4) : 1,
        scale: isHovered ? 1.12 : 1,
      }}
      transition={{
        x: { duration: layout.duration, delay: layout.delay, repeat: Infinity, ease: 'easeInOut' },
        y: { duration: layout.duration, delay: layout.delay, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
    >
      <motion.button
        type="button"
        className={cn(
          'flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-nebula-dark sm:p-2',
          isHovered && 'ring-2 ring-cyan-400/40 ring-offset-2 ring-offset-transparent rounded-full',
        )}
        onMouseEnter={() => onHover(projectId)}
        onMouseLeave={() => onLeave(projectId)}
        onFocus={() => onHover(projectId)}
        onBlur={() => onLeave(projectId)}
        onClick={(e) => {
          e.stopPropagation()
          onPin(projectId)
        }}
        whileTap={{ scale: 0.95 }}
        aria-label={copy.title}
        aria-expanded={isHovered || isPinnedHere}
      >
        <RotatingStar
          size={starSize}
          variant={variant}
          active={isHovered}
          rotationDuration={layout.duration * 0.85}
        />
      </motion.button>
    </motion.div>
  )
}
