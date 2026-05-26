'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitles } from '@/app/components/section-title'
import { GlowButton } from '@/app/components/nebula/glow-button'
import { ProjectStar } from './project-star'
import { ProjectPreviewCard } from './project-preview-card'
import { StarShape, type StarVariant } from './star-shape'
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

function getStarGlowFilter(variant: StarVariant): string {
  return variant === 'comingSoon'
    ? 'drop-shadow(0 0 24px rgba(239, 68, 68, 0.85)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.5))'
    : 'drop-shadow(0 0 28px rgba(34, 211, 238, 0.85)) drop-shadow(0 0 48px rgba(124, 58, 237, 0.55))'
}

export const ProjectsStarField = () => {
  const { t } = useLanguage()
  const [hoveredId, setHoveredId] = useState<ProjectId | null>(null)
  const [pinnedId, setPinnedId] = useState<ProjectId | null>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)

  const activeId = pinnedId ?? hoveredId
  const isPinned = pinnedId !== null
  const activeProject = activeId ? PROJECTS.find((p) => p.id === activeId) : null
  const activeCopy = activeId ? t.projects.items[activeId] : null
  const activeLayout = activeId
    ? getStarLayout(activeId, PROJECTS.findIndex((p) => p.id === activeId), PROJECTS.length)
    : null
  const activeVariant = activeId ? getStarVariant(activeId) : 'default'

  const closeAll = () => {
    setPinnedId(null)
    setHoveredId(null)
  }

  const handleHover = (id: ProjectId) => {
    if (pinnedId) return
    setHoveredId(id)
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
    if (!activeId) return

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (fieldRef.current?.contains(target)) return
      if (centerRef.current?.contains(target)) return
      closeAll()
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [activeId])

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
        className={cn(
          'relative mx-auto h-[min(72vh,720px)] w-full max-w-[1400px] px-4 sm:px-6',
          activeId && !isPinned && 'z-[80]',
        )}
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
              activeId={activeId}
              isPinned={isPinned}
              onHover={handleHover}
              onPin={(id) => {
                setPinnedId(id)
                setHoveredId(id)
              }}
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
        <AnimatePresence>
          {activeId && activeProject && activeCopy && activeLayout && (
            <motion.div
              key={activeId}
              ref={centerRef}
              className="pointer-events-auto flex max-h-[90vh] flex-col items-center overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={`star-${activeId}`}
                className="mb-5 flex shrink-0 items-center justify-center"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              >
                <div style={{ filter: getStarGlowFilter(activeVariant) }}>
                  <StarShape
                    size={Math.min(activeLayout.size * 1.5, 88)}
                    active
                    variant={activeVariant}
                  />
                </div>
              </motion.div>

              <ProjectPreviewCard
                key={`card-${activeId}`}
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
