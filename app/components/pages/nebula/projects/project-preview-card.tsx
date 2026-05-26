'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight, HiExternalLink } from 'react-icons/hi'
import { cn } from '@/app/lib/utils'
import type { ProjectMeta } from '@/app/lib/projects'

type ProjectCopy = {
  title: string
  category: string
  description: string
  storesNote?: string
}

type ProjectPreviewCardProps = {
  project: ProjectMeta
  copy: ProjectCopy
  viewLabel: string
  comingSoonLabel: string
  inDevelopmentLabel: string
  techLabel: string
  compact?: boolean
  className?: string
  onCardClick?: (e: React.MouseEvent) => void
}

export const ProjectPreviewCard = ({
  project,
  copy,
  viewLabel,
  comingSoonLabel,
  inDevelopmentLabel,
  techLabel,
  compact = false,
  className,
  onCardClick,
}: ProjectPreviewCardProps) => {
  const [imageSrc, setImageSrc] = useState(project.image)
  const isInDevelopment = Boolean(project.inDevelopment)
  const showStores = Boolean(project.inStores && copy.storesNote)
  const hasLink = Boolean(project.href) && !showStores && !isInDevelopment

  useEffect(() => {
    setImageSrc(project.image)
  }, [project.id, project.image])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={onCardClick}
      className={cn(
        'space-card overflow-hidden bg-nebula-dark/95 backdrop-blur-xl',
        isInDevelopment
          ? 'border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.25)]'
          : 'border-cyan-400/30 shadow-[0_0_60px_rgba(124,58,237,0.35)]',
        compact ? 'w-[min(92vw,320px)]' : 'w-[min(92vw,420px)]',
        className,
      )}
    >
      <div className={cn('relative overflow-hidden bg-nebula-navy/60', compact ? 'h-36' : 'h-44')}>
        <Image
          src={imageSrc}
          alt={copy.title}
          width={480}
          height={280}
          className={cn(
            'h-full w-full object-cover',
            isInDevelopment && 'object-contain p-4 opacity-95',
          )}
          unoptimized
          onError={() => setImageSrc('/images/logonebula.png')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nebula-dark via-transparent to-transparent" />
        <span
          className={cn(
            'absolute left-3 top-3 rounded-full border bg-nebula-dark/90 px-2.5 py-0.5 font-mono text-[10px] backdrop-blur-sm sm:text-xs',
            isInDevelopment
              ? 'border-red-500/50 text-red-300'
              : 'border-purple-500/40 text-cyan-300',
          )}
        >
          {copy.category}
        </span>
      </div>

      <div className={cn('p-4', !compact && 'sm:p-5')}>
        <h3 className={cn('font-display font-semibold text-gray-100', compact ? 'text-lg' : 'text-xl')}>
          {copy.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">{copy.description}</p>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-purple-400 sm:text-xs">
          {techLabel}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tech.slice(0, compact ? 3 : 5).map((name) => (
            <span
              key={name}
              className="rounded-md border border-purple-500/25 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-gray-300"
            >
              {name}
            </span>
          ))}
        </div>

        {showStores && (
          <p className="mt-4 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3 py-2.5 text-xs font-medium leading-relaxed text-emerald-300 sm:text-sm">
            {copy.storesNote}
          </p>
        )}

        {hasLink ? (
          <Link
            href={project.href}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noopener noreferrer' : undefined}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
            onClick={(e) => e.stopPropagation()}
          >
            {viewLabel}
            {project.external ? (
              <HiExternalLink className="h-4 w-4" />
            ) : (
              <HiArrowNarrowRight className="h-4 w-4" />
            )}
          </Link>
        ) : isInDevelopment ? (
          <p className="mt-4 font-mono text-xs font-medium text-red-400">
            {inDevelopmentLabel}
          </p>
        ) : (
          <p className="mt-4 font-mono text-xs text-gray-500">{comingSoonLabel}</p>
        )}
      </div>
    </motion.div>
  )
}
