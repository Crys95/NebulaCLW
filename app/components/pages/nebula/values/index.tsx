'use client'

import { SectionTitles } from '@/app/components/section-title'
import { SpaceCard } from '@/app/components/nebula/space-card'
import { SpaceSection } from '@/app/components/nebula/space-section'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import { TbSparkles, TbWorld, TbRocket, TbCpu } from 'react-icons/tb'
import type { IconType } from 'react-icons'

const pillarIcons: IconType[] = [TbSparkles, TbWorld, TbRocket, TbCpu]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const NebulaValues = () => {
  const { t } = useLanguage()

  return (
    <SpaceSection id="essencia">
      <SectionTitles
        subtitle={t.values.subtitle}
        titlte={t.values.title}
        className="mb-16 items-center text-center"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {t.values.items.map((pillar, i) => {
          const Icon = pillarIcons[i]
          return (
            <SpaceCard
              key={i}
              variants={item}
              floatDelay={i * 0.3}
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nebula-gradient shadow-nebula-soft">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              }
            >
              <h4 className="mb-2 text-lg font-semibold text-gray-100">
                {pillar.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {pillar.description}
              </p>
            </SpaceCard>
          )
        })}
      </motion.div>
    </SpaceSection>
  )
}
