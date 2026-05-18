'use client'

import { SectionTitles } from '@/app/components/section-title'
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
    <section className="py-24 sm:py-32">
      <div className="container">
        <SectionTitles
          subtitle={t.values.subtitle}
          titlte={t.values.title}
          className="mb-16 text-center items-center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.values.items.map((pillar, i) => {
            const Icon = pillarIcons[i]
            return (
              <motion.article
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass-card p-6 group cursor-default"
              >
                <motion.div className="w-12 h-12 rounded-xl bg-nebula-gradient flex items-center justify-center mb-5 group-hover:shadow-nebula-soft transition-shadow">
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-100 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
