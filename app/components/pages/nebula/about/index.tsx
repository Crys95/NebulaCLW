'use client'

import { SectionTitles } from '@/app/components/section-title'
import { GradientText } from '@/app/components/nebula/gradient-text'
import { SpaceSection } from '@/app/components/nebula/space-section'
import { motion } from 'framer-motion'
import { NebulaLogo } from '@/app/components/nebula/nebula-logo'
import { useLanguage } from '@/app/contexts/language-context'

export const NebulaAbout = () => {
  const { t } = useLanguage()

  return (
    <SpaceSection id="sobre" className="bg-nebula-navy/50">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionTitles
            subtitle={t.about.subtitle}
            titlte={t.about.title}
            className="mb-8"
          />
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 leading-relaxed text-gray-300"
          >
            <p>
              {t.about.p1Before}
              <strong className="text-gray-100">{t.about.p1Strong}</strong>
              {t.about.p1After}
              <GradientText as="span">{t.about.p1Creation}</GradientText>,{' '}
              <GradientText as="span">{t.about.p1Universe}</GradientText>{' '}
              {t.about.p1Joiner}{' '}
              <GradientText as="span">{t.about.p1Innovation}</GradientText>
              {t.about.p1End}
            </p>
            <p>{t.about.p2}</p>
            <p>
              <span className="font-mono text-cyan-400/80">CLW</span>
              {t.about.p3CloudLogWeb}
              {t.about.p3After}
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
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <NebulaLogo
              src="/images/nebulasublog.png"
              alt={t.about.logoAlt}
              width={400}
              height={400}
              unblend
              wrapperClassName="w-full max-w-[380px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </SpaceSection>
  )
}
