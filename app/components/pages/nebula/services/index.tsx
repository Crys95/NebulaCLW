'use client'

import { SectionTitles } from '@/app/components/section-title'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'
import {
  TbDeviceDesktop,
  TbRocket,
  TbShoppingCart,
  TbChartBar,
  TbRefresh,
  TbPalette,
} from 'react-icons/tb'
import type { IconType } from 'react-icons'

const serviceIcons: IconType[] = [
  TbDeviceDesktop,
  TbRocket,
  TbShoppingCart,
  TbChartBar,
  TbPalette,
  TbRefresh,
]

export const NebulaServices = () => {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-nebula-navy/40">
      <motion.div className="container">
        <SectionTitles
          subtitle={t.services.subtitle}
          titlte={t.services.title}
          className="mb-16"
        />

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 group hover:border-cyan-400/30 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-purple-400 group-hover:text-cyan-400 transition-colors mb-5" />
                <h4 className="text-xl font-semibold text-gray-100 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
