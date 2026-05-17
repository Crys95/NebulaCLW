'use client'

import { SectionTitles } from '@/app/components/section-title'
import { GradientText } from '@/app/components/nebula/gradient-text'
import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Descoberta',
    description:
      'Entendemos seu negócio, público e objetivos para traçar a rota certa.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Prototipamos interfaces alinhadas à identidade Nebula — modernas e impactantes.',
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description:
      'Código limpo, performance e responsividade em cada detalhe do projeto.',
  },
  {
    step: '04',
    title: 'Lançamento',
    description:
      'Deploy, testes e acompanhamento para seu site brilhar no universo digital.',
  },
]

export const NebulaProcess = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div className="container relative">
        <SectionTitles
          subtitle="processo"
          titlte={
            <>
              Do conceito ao <GradientText as="span">lançamento</GradientText>
            </>
          }
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-8 h-px bg-gradient-to-r from-purple-500/50 to-cyan-400/50" />
              )}
              <span className="font-mono text-4xl font-bold gradient-text opacity-80">
                {step.step}
              </span>
              <h4 className="text-xl font-semibold text-gray-100 mt-4 mb-2">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
