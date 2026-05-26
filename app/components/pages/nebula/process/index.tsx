'use client'

import { SectionTitles } from '@/app/components/section-title'
import { GradientText } from '@/app/components/nebula/gradient-text'
import { SpaceCard } from '@/app/components/nebula/space-card'
import { SpaceSection } from '@/app/components/nebula/space-section'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'

export const NebulaProcess = () => {
  const { t } = useLanguage()

  return (
    <SpaceSection id="processo">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <SectionTitles
        subtitle={t.process.subtitle}
        titlte={
          <>
            {t.process.title}
            <GradientText as="span">{t.process.titleHighlight}</GradientText>
          </>
        }
        className="relative mb-16"
      />

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((step, i) => (
          <div key={i} className="relative">
            {i < t.process.steps.length - 1 && (
              <div
                className="absolute -right-4 top-10 z-10 hidden h-px w-8 bg-gradient-to-r from-purple-500/50 to-cyan-400/50 lg:block"
                aria-hidden
              />
            )}
            <SpaceCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              floatDelay={i * 0.25}
              className="h-full p-6"
            >
            <span className="font-mono text-4xl font-bold opacity-80 gradient-text">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h4 className="mb-2 mt-4 text-xl font-semibold text-gray-100">
              {step.title}
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              {step.description}
            </p>
            </SpaceCard>
          </div>
        ))}
      </div>
    </SpaceSection>
  )
}
