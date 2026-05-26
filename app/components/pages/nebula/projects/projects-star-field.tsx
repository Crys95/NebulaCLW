'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitles } from '@/app/components/section-title'
import { GlowButton } from '@/app/components/nebula/glow-button'
import { ProjectStar } from './project-star'
import { ProjectPreviewCard } from './project-preview-card'
import { RotatingStar } from './rotating-star'
import type { StarVariant } from './star-shape'
import { useLanguage } from '@/app/contexts/language-context'
import { PROJECTS } from '@/app/lib/projects'
import { getStarLayout } from '@/app/lib/project-star-layout'
import { ROUTES } from '@/app/lib/routes'
import { cn } from '@/app/lib/utils'
import type { ProjectId } from '@/app/lib/projects'

function getStarVariant(id: ProjectId): StarVariant {
  const project = PROJECTS.find((p) => p.id === id)
  return project?.inDevelopment ? 'comingSoon' : 'default'
}

export const ProjectsStarField = () => {
  const { t } = useLanguage()
  const [hoveredId, setHoveredId] = useState<ProjectId | null>(null)
  const [pinnedId, setPinnedId] = useState<ProjectId | null>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)

  const isPinned = pinnedId !== null
  const previewId = isPinned ? pinnedId : hoveredId
  const activeProject = previewId ? PROJECTS.find((p) => p.id === previewId) : null
  const activeCopy = previewId ? t.projects.items[previewId] : null
  const activeLayout = previewId
    ? getStarLayout(previewId, PROJECTS.findIndex((p) => p.id === previewId), PROJECTS.length)
    : null
  const activeVariant = previewId ? getStarVariant(previewId) : 'default'

  const closeAll = () => {
    setPinnedId(null)
    setHoveredId(null)
  }

  const handleHover = (id: ProjectId) => {
    if (pinnedId) return
    setHoveredId(id)
  }

  const handleLeave = (id: ProjectId) => {
    if (pinnedId) return
    setHoveredId((current) => (current === id ? null : current))
  }

  const handlePin = (id: ProjectId) => {
    setPinnedId(id)
    setHoveredId(null)
  }

  useEffect(() => {
    if (!pinnedId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [pinnedId])

  useEffect(() => {
    if (!previewId) return

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (fieldRef.current?.contains(target)) return
      if (isPinned && centerRef.current?.contains(target)) return
      closeAll()
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [previewId, isPinned])

  return (
    <section
      id="projetos"
      className="section-anchor relative min-h-[calc(100dvh-5rem)] w-full overflow-hidden"
    >
      <div className="container relative z-20 pb-6 pt-28">
        <SectionTitles
          subtitle={t.projects.subtitle}
          titlte={t.projects.title}
          className="items-center text-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-400 sm:text-base"
        >
          {t.projects.intro}
        </motion.p>
        <p className="mt-3 text-center font-mono text-xs text-purple-400/90">
          {t.projects.starHint}
          <span className="mx-2 text-gray-600">·</span>
          {t.projects.starClickHint}
        </p>
      </div>

      <div
        ref={fieldRef}
        className="relative z-[30] mx-auto h-[min(78vh,760px)] w-full max-w-[1400px] px-2 sm:px-6"
      >
        {PROJECTS.map((project, index) => {
          const layout = getStarLayout(project.id, index, PROJECTS.length)
          const copy = t.projects.items[project.id]

          return (
            <ProjectStar
              key={project.id}
              projectId={project.id}
              copy={copy}
              layout={layout}
              hoveredId={hoveredId}
              pinnedId={pinnedId}
              onHover={handleHover}
              onLeave={handleLeave}
              onPin={handlePin}
            />
          )
        })}
      </div>

      <AnimatePresence>
        {isPinned && (
          <motion.button
            type="button"
            aria-label="Fechar projeto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] cursor-default bg-nebula-dark/85 backdrop-blur-md"
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center p-4 pt-20 sm:pt-24">
        <AnimatePresence mode="wait">
          {previewId && activeProject && activeCopy && (
            <motion.div
              key={previewId}
              ref={isPinned ? centerRef : undefined}
              className={cn(
                'flex max-h-[90vh] flex-col items-center overflow-y-auto',
                isPinned && 'pointer-events-auto',
              )}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => isPinned && e.stopPropagation()}
            >
              {isPinned && activeLayout && (
                <motion.div
                  className="mb-5 flex shrink-0 items-center justify-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                >
                  <RotatingStar
                    size={Math.min(activeLayout.size * 1.55, 96)}
                    active
                    variant={activeVariant}
                    rotationDuration={18}
                  />
                </motion.div>
              )}

              <ProjectPreviewCard
                project={activeProject}
                copy={activeCopy}
                viewLabel={
                  activeProject.external
                    ? t.projects.viewSite
                    : t.projects.viewProject
                }
                comingSoonLabel={t.projects.comingSoon}
                inDevelopmentLabel={t.projects.inDevelopment}
                techLabel={t.projects.techLabel}
                compact={!isPinned}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container relative z-20 flex flex-col items-center gap-4 pb-16 pt-8 text-center"
      >
        <p className="text-sm text-gray-400">{t.projects.ctaText}</p>
        <GlowButton href={ROUTES.contato}>{t.projects.ctaButton}</GlowButton>
      </motion.div>
    </section>
  )
}
