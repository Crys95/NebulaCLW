'use client'

import { SectionTitles } from '@/app/components/section-title'
import { SpaceCard } from '@/app/components/nebula/space-card'
import { SpaceSection } from '@/app/components/nebula/space-section'
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
    <SpaceSection id="servicos" className="bg-nebula-navy/40">
      <SectionTitles
        subtitle={t.services.subtitle}
        titlte={t.services.title}
        className="mb-16"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((service, i) => {
          const Icon = serviceIcons[i]
          return (
            <SpaceCard
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              floatDelay={i * 0.2}
              icon={
                <Icon className="mb-1 h-10 w-10 text-purple-400 transition-colors group-hover:text-cyan-400" />
              }
            >
              <h4 className="mb-3 text-xl font-semibold text-gray-100">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </SpaceCard>
          )
        })}
      </div>
    </SpaceSection>
  )
}
