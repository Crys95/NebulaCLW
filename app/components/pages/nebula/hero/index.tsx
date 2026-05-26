'use client'

import { GradientText } from '@/app/components/nebula/gradient-text'
import { HeroQuickNav } from '@/app/components/pages/nebula/hero/hero-quick-nav'
import { motion } from 'framer-motion'
import { NebulaLogo } from '@/app/components/nebula/nebula-logo'
import { FloatingShipLogo } from '@/app/components/nebula/floating-ship-logo'
import { useLanguage } from '@/app/contexts/language-context'
import { Typewriter } from 'react-simple-typewriter'
const HERO_TITLE_CLASS =
  'font-display w-full min-w-0 max-w-full text-2xl font-semibold leading-tight break-words sm:text-4xl lg:text-5xl'

export const NebulaHero = () => {
  const { t } = useLanguage()
  const longestPhrase = t.hero.typewriter[2]

  return (
    <section
      id="inicio"
      className="section-anchor relative flex min-h-screen flex-col justify-center overflow-hidden pb-24 pt-28"
    >
      <div className="container relative z-10 flex w-full min-w-0 flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FloatingShipLogo className="relative mb-8">
            <NebulaLogo
              src="/images/logonebula.png"
              alt={t.hero.logoAlt}
              width={420}
              height={420}
              priority
              wrapperClassName="w-[280px] sm:w-[360px] lg:w-[420px]"
            />
          </FloatingShipLogo>
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
            <span>{t.hero.titlePrefix}</span>
            <span className="inline-block max-w-full">{longestPhrase}</span>
          </p>
          <h1 className={`${HERO_TITLE_CLASS} col-start-1 row-start-1`}>
            <span className="text-gray-100">{t.hero.titlePrefix}</span>
            <GradientText as="span" className="inline-block max-w-full align-top">
              <Typewriter
                key={t.hero.typewriter.join('|')}
                words={[...t.hero.typewriter]}
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
          {t.hero.description}
        </motion.p>

        <HeroQuickNav />
      </div>
    </section>
  )
}
