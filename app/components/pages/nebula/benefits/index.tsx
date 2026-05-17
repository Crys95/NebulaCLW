'use client'

import { SectionTitles } from '@/app/components/section-title'
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

const benefits = [
  {
    icon: TbBolt,
    title: 'Performance',
    description:
      'Site rápido que carrega em segundos. Visitantes não esperam — e o Google também recompensa velocidade.',
  },
  {
    icon: TbLayout,
    title: 'Layout profissional',
    description:
      'Design moderno e organizado que transmite credibilidade e coloca sua marca em evidência.',
  },
  {
    icon: TbDeviceMobile,
    title: 'Funciona em qualquer tela',
    description:
      'Experiência impecável no celular, tablet e computador. Seu cliente acessa de onde estiver.',
  },
  {
    icon: TbSearch,
    title: 'Visibilidade no Google',
    description:
      'Estrutura preparada para aparecer nas buscas quando alguém procura pelo que você oferece.',
  },
  {
    icon: TbUsers,
    title: 'Experiência clara',
    description:
      'Navegação intuitiva que guia o visitante até o contato, orçamento ou compra — sem confusão.',
  },
  {
    icon: TbTrendingUp,
    title: 'Foco em resultados',
    description:
      'Cada seção pensada para gerar leads, pedidos e oportunidades reais para o seu negócio.',
  },
  {
    icon: TbShieldCheck,
    title: 'Segurança e confiança',
    description:
      'Base sólida, estável e segura para você e para quem visita o seu site todos os dias.',
  },
  {
    icon: TbHeadset,
    title: 'Suporte contínuo',
    description:
      'Não abandonamos após o lançamento. Ajustes, melhorias e evolução conforme sua empresa cresce.',
  },
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
  return (
    <section id="diferenciais" className="py-24 bg-nebula-navy/30">
      <div className="container">
        <SectionTitles
          subtitle="diferenciais"
          titlte="O que o seu site entrega"
          className="mb-6 text-center items-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-14 text-sm sm:text-base"
        >
          Falamos a língua do seu negócio: resultados que você vê e sente, sem
          jargão técnico.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group"
            >
              <benefit.icon className="w-9 h-9 text-purple-400 group-hover:text-cyan-400 transition-colors mb-4" />
              <h4 className="text-lg font-semibold text-gray-100 mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
