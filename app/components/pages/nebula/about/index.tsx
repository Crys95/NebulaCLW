'use client'

import { SectionTitles } from '@/app/components/section-title'
import { GradientText } from '@/app/components/nebula/gradient-text'
import { motion } from 'framer-motion'
import { NebulaLogo } from '@/app/components/nebula/nebula-logo'

export const NebulaAbout = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-nebula-navy/50">
      <motion.div
        className="absolute inset-0 bg-nebula-radial pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />

      <motion.div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionTitles
            subtitle="sobre"
            titlte="Por que Nebula?"
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-300 leading-relaxed"
          >
            <p>
              O nome <strong className="text-gray-100">Nebula</strong> carrega
              uma ideia poderosa: um lugar onde tudo começa —{' '}
              <GradientText as="span">criação</GradientText>,{' '}
              <GradientText as="span">universo</GradientText> e{' '}
              <GradientText as="span">inovação</GradientText> em constante
              expansão.
            </p>
            <p>
              Assim como uma nebulosa estelar forma novas estrelas, nós formamos
              novos sites e experiências digitais para empresas que querem
              crescer no universo online com tecnologia de ponta e design
              impecável.
            </p>
            <p>
              <span className="font-mono text-cyan-400/80">CLW</span> — Cloud
              Log Web — representa nossa essência: soluções na nuvem, com lógica
              sólida e presença web que impressiona.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="absolute -inset-4 rounded-full bg-nebula-gradient opacity-20 blur-2xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <NebulaLogo
              src="/images/nebulalogo.jpeg"
              alt="Logo Nebula CLW"
              width={400}
              height={400}
              wrapperClassName="w-full max-w-[380px]"
              className="relative shadow-nebula-soft"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
