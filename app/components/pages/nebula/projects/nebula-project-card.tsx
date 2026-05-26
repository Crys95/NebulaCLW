'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight, HiExternalLink } from 'react-icons/hi'
import { SpaceCard } from '@/app/components/nebula/space-card'
import { cn } from '@/app/lib/utils'
import type { ProjectMeta } from '@/app/lib/projects'

type ProjectCopy = {
  title: string
  category: string
  description: string
}

type NebulaProjectCardProps = {
  project: ProjectMeta
  copy: ProjectCopy
  viewLabel: string
  comingSoonLabel: string
  techLabel: string
  featured?: boolean
  index?: number
}

export const NebulaProjectCard = ({
  project,
  copy,
  viewLabel,
  comingSoonLabel,
  techLabel,
  featured = false,
  index = 0,
}: NebulaProjectCardProps) => {
  const [imageSrc, setImageSrc] = useState(project.image)
  const isInDevelopment = Boolean(project.inDevelopment)
  const hasLink = Boolean(project.href) && !project.inStores && !isInDevelopment

  const card = (
    <SpaceCard
      floatDelay={index * 0.15}
      className={cn(
        'flex h-full flex-col overflow-hidden p-0',
        featured && 'lg:flex-row',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-nebula-navy/50',
          featured ? 'h-52 lg:h-auto lg:min-h-[280px] lg:w-[42%] lg:shrink-0' : 'h-48',
        )}
      >
        <Image
          src={imageSrc}
          alt={copy.title}
          width={640}
          height={360}
          className={cn(
            'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
          )}
          unoptimized
          onError={() => setImageSrc('/images/logonebula.png')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nebula-dark/90 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-purple-500/40 bg-nebula-dark/80 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur-sm">
          {copy.category}
        </span>
      </div>

      <div className={cn('flex flex-1 flex-col p-6 sm:p-8', featured && 'lg:justify-center')}>
        <h3 className="font-display text-xl font-semibold text-gray-100 sm:text-2xl">
          {copy.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400 sm:text-base">
          {copy.description}
        </p>

        <div className="mt-5">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-purple-400">
            {techLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-purple-500/25 bg-purple-500/10 px-2.5 py-1 font-mono text-xs text-gray-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {hasLink ? (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
            {project.external ? (
              <>
                {viewLabel}
                <HiExternalLink className="h-4 w-4" />
              </>
            ) : (
              <>
                {viewLabel}
                <HiArrowNarrowRight className="h-4 w-4" />
              </>
            )}
          </span>
        ) : (
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-gray-500">
            {comingSoonLabel}
          </span>
        )}
      </div>
    </SpaceCard>
  )

  if (!hasLink) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn('group h-full', featured && 'lg:col-span-2')}
      >
        {card}
      </motion.div>
    )
  }

  const linkProps = project.external
    ? { href: project.href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : { href: project.href }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn('group h-full', featured && 'lg:col-span-2')}
    >
      <Link className="block h-full" {...linkProps}>
        {card}
      </Link>
    </motion.div>
  )
}
