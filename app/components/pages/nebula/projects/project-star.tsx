'use client'

import { motion } from 'framer-motion'
import { StarShape, type StarVariant } from './star-shape'
import type { StarDriftLayout } from '@/app/lib/project-star-layout'
import { PROJECTS, type ProjectId } from '@/app/lib/projects'

type ProjectCopy = {
  title: string
}

type ProjectStarProps = {
  projectId: ProjectId
  copy: ProjectCopy
  layout: StarDriftLayout
  activeId: ProjectId | null
  isPinned: boolean
  onHover: (id: ProjectId) => void
  onPin: (id: ProjectId) => void
}

function getStarVariant(projectId: ProjectId): StarVariant {
  const project = PROJECTS.find((p) => p.id === projectId)
  return project?.inDevelopment ? 'comingSoon' : 'default'
}

export const ProjectStar = ({
  projectId,
  copy,
  layout,
  activeId,
  isPinned,
  onHover,
  onPin,
}: ProjectStarProps) => {
  const isActive = activeId === projectId
  const isDimmed = activeId !== null && !isActive
  const variant = getStarVariant(projectId)

  if (isActive) {
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
        opacity: isDimmed ? 0.2 : 1,
      }}
      transition={{
        x: { duration: layout.duration, delay: layout.delay, repeat: Infinity, ease: 'easeInOut' },
        y: { duration: layout.duration, delay: layout.delay, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.25 },
      }}
    >
      <motion.button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-nebula-dark"
        onMouseEnter={() => onHover(projectId)}
        onFocus={() => onHover(projectId)}
        onClick={(e) => {
          e.stopPropagation()
          onPin(projectId)
        }}
        whileTap={{ scale: 0.95 }}
        aria-label={copy.title}
      >
        <StarShape size={layout.size} variant={variant} />
      </motion.button>
    </motion.div>
  )
}
