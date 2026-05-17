'use client'

import { SectionTitles } from '@/app/components/section-title'
import { motion } from 'framer-motion'
import { TbSparkles, TbWorld, TbRocket, TbCpu } from 'react-icons/tb'

const pillars = [
  {
    icon: TbSparkles,
    title: 'Criação',
    description:
      'Cada projeto nasce do zero, moldado à identidade da sua marca — único como uma nova estrela.',
  },
  {
    icon: TbWorld,
    title: 'Universo',
    description:
      'Pensamos grande. Sites preparados para escalar, alcançar novos mercados e expandir sem limites.',
  },
  {
    icon: TbRocket,
    title: 'Inovação',
    description:
      'Tecnologias modernas, performance e UX que colocam sua empresa à frente da concorrência.',
  },
  {
    icon: TbCpu,
    title: 'Futuro',
    description:
      'Design futurista, animações fluidas e arquitetura sólida para o digital de amanhã.',
  },
]

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
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <SectionTitles
          subtitle="essência"
          titlte="O que nos move"
          className="mb-16 text-center items-center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group cursor-default"
            >
              <motion.div className="w-12 h-12 rounded-xl bg-nebula-gradient flex items-center justify-center mb-5 group-hover:shadow-nebula-soft transition-shadow">
                <pillar.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-100 mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
