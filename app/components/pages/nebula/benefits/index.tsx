'use client'

import { SectionTitles } from '@/app/components/section-title'
import { SpaceCard } from '@/app/components/nebula/space-card'
import { SpaceSection } from '@/app/components/nebula/space-section'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import {
  TbBolt,
  TbDeviceMobile,
  TbLayout,
  TbSearch,
  TbShieldCheck,
  TbTrendingUp,
  TbUsers,
  TbHeadset,
} from 'react-icons/tb'
import type { IconType } from 'react-icons'

const benefitIcons: IconType[] = [
  TbBolt,
  TbLayout,
  TbDeviceMobile,
  TbSearch,
  TbUsers,
  TbTrendingUp,
  TbShieldCheck,
  TbHeadset,
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export const NebulaBenefits = () => {
  const { t } = useLanguage()

  return (
    <SpaceSection id="diferenciais" className="bg-nebula-navy/30">
      <SectionTitles
        subtitle={t.benefits.subtitle}
        titlte={t.benefits.title}
        className="mb-6 items-center text-center"
      />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-2xl text-center text-sm text-gray-400 sm:text-base"
      >
        {t.benefits.intro}
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {t.benefits.items.map((benefit, i) => {
          const Icon = benefitIcons[i]
          return (
            <SpaceCard
              key={i}
              variants={item}
              floatDelay={i * 0.15}
              icon={
                <Icon className="h-9 w-9 text-purple-400 transition-colors group-hover:text-cyan-400" />
              }
            >
              <h4 className="mb-2 text-lg font-semibold text-gray-100">
                {benefit.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {benefit.description}
              </p>
            </SpaceCard>
          )
        })}
      </motion.div>
    </SpaceSection>
  )
}
