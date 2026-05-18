'use client'

import { SectionTitles } from '@/app/components/section-title'
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
    <section id="diferenciais" className="py-24 bg-nebula-navy/30">
      <div className="container">
        <SectionTitles
          subtitle={t.benefits.subtitle}
          titlte={t.benefits.title}
          className="mb-6 text-center items-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-14 text-sm sm:text-base"
        >
          {t.benefits.intro}
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.benefits.items.map((benefit, i) => {
            const Icon = benefitIcons[i]
            return (
              <motion.article
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="glass-card p-6 group"
              >
                <Icon className="w-9 h-9 text-purple-400 group-hover:text-cyan-400 transition-colors mb-4" />
                <h4 className="text-lg font-semibold text-gray-100 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
