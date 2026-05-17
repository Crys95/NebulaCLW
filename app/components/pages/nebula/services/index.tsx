'use client'

import { SectionTitles } from '@/app/components/section-title'
import { motion } from 'framer-motion'
import {
  TbDeviceDesktop,
  TbRocket,
  TbShoppingCart,
  TbChartBar,
  TbRefresh,
  TbPalette,
} from 'react-icons/tb'

const services = [
  {
    icon: TbDeviceDesktop,
    title: 'Sites institucionais',
    description:
      'Presença digital profissional que transmite confiança e posiciona sua marca no mercado.',
  },
  {
    icon: TbRocket,
    title: 'Landing pages',
    description:
      'Páginas de alta conversão, rápidas e otimizadas para campanhas e lançamentos.',
  },
  {
    icon: TbShoppingCart,
    title: 'E-commerce',
    description:
      'Lojas virtuais completas com experiência de compra fluida e segura.',
  },
  {
    icon: TbChartBar,
    title: 'Dashboards & apps web',
    description:
      'Sistemas sob medida para gestão, relatórios e operações do seu negócio.',
  },
  {
    icon: TbPalette,
    title: 'UI/UX & redesign',
    description:
      'Interfaces modernas que encantam usuários e elevam a percepção da marca.',
  },
  {
    icon: TbRefresh,
    title: 'Manutenção & evolução',
    description:
      'Suporte contínuo, atualizações e melhorias para seu site sempre no topo.',
  },
]

export const NebulaServices = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-nebula-navy/40">
      <motion.div className="container">
        <SectionTitles
          subtitle="serviços"
          titlte="O que desenvolvemos"
          className="mb-16"
        />

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 group hover:border-cyan-400/30 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-purple-400 group-hover:text-cyan-400 transition-colors mb-5" />
              <h4 className="text-xl font-semibold text-gray-100 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
