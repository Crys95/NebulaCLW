'use client'

import { SectionTitles } from '@/app/components/section-title'
import { GradientText } from '@/app/components/nebula/gradient-text'
import { useLanguage } from '@/app/contexts/language-context'
import { motion } from 'framer-motion'

export const NebulaProcess = () => {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div className="container relative">
        <SectionTitles
          subtitle={t.process.subtitle}
          titlte={
            <>
              {t.process.title}
              <GradientText as="span">{t.process.titleHighlight}</GradientText>
            </>
          }
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {i < t.process.steps.length - 1 && (
                <motion.div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-8 h-px bg-gradient-to-r from-purple-500/50 to-cyan-400/50" aria-hidden />
              )}
              <span className="font-mono text-4xl font-bold gradient-text opacity-80">
                {String(i + 1).padStart(2, '0')}
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
