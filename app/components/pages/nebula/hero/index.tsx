'use client'

import { NebulaParticles } from '@/app/components/particles/NebulaParticles'
import { GlowButton } from '@/app/components/nebula/glow-button'
import { GradientText } from '@/app/components/nebula/gradient-text'
import { motion } from 'framer-motion'
import { NebulaLogo } from '@/app/components/nebula/nebula-logo'
import { Typewriter } from 'react-simple-typewriter'
import { HiArrowNarrowDown } from 'react-icons/hi'

const HERO_TITLE_CLASS =
  'font-display w-full min-w-0 max-w-full text-2xl font-semibold leading-tight break-words sm:text-4xl lg:text-5xl'

/** Frase mais longa do typewriter — define a altura reservada do título. */
const LONGEST_TYPEWRITER_PHRASE = 'criam novas possibilidades.'

export const NebulaHero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20"
    >
      <NebulaParticles />
      <motion.div
        className="absolute inset-0 bg-cosmic-mesh opacity-60 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 flex w-full min-w-0 flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8 animate-float"
        >
          <NebulaLogo
            src="/images/logonebula.png"
            alt="Nebula CLW - Cloud Log Web"
            width={420}
            height={420}
            priority
            wrapperClassName="w-[280px] sm:w-[360px] lg:w-[420px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="relative grid w-full min-w-0 max-w-full"
        >
          <p
            className={`${HERO_TITLE_CLASS} col-start-1 row-start-1 invisible pointer-events-none select-none`}
            aria-hidden
          >
            <span>Desenvolvemos sites que </span>
            <span className="inline-block max-w-full">
              {LONGEST_TYPEWRITER_PHRASE}
            </span>
          </p>
          <h1 className={`${HERO_TITLE_CLASS} col-start-1 row-start-1`}>
            <span className="text-gray-100">Desenvolvemos sites que </span>
            <GradientText as="span" className="inline-block max-w-full align-top">
              <Typewriter
                words={[
                  'expandem seu universo.',
                  'nascem da inovação.',
                  'criam novas possibilidades.',
                  'elevam sua marca.',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </GradientText>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          A Nebula CLW transforma ideias em experiências digitais de alto
          impacto. Criação, tecnologia futurista e expansão contínua — como uma
          nebulosa que nunca para de crescer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <GlowButton href="#contato">Iniciar um projeto</GlowButton>
          <GlowButton href="#servicos" variant="outline">
            Conhecer serviços
          </GlowButton>
        </motion.div>

        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-gray-500 hover:text-cyan-400 transition-colors"
          aria-label="Rolar para sobre"
        >
          <HiArrowNarrowDown className="w-8 h-8 animate-bounce mx-auto" />
        </motion.a>
      </div>
    </section>
  )
}
