'use client'

import { SectionTitles } from '../section-title'
import { TbBrandWhatsapp, TbMail } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { GlowButton } from '../nebula/glow-button'
import { useLanguage } from '@/app/contexts/language-context'

export const ContactForm = () => {
  const { locale, t } = useLanguage()

  const whatsappHref =
    'https://wa.me/5511999999999?text=' +
    encodeURIComponent(t.contact.whatsappMessage)

  return (
    <section
      key={locale}
      id="contato"
      className="py-20 px-6 md:py-32 flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-nebula-radial pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />

      <div className="w-full max-w-[520px] mx-auto relative z-10">
        <SectionTitles
          subtitle={t.contact.subtitle}
          titlte={t.contact.title}
          className="items-center text-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-center text-sm sm:text-base"
        >
          {t.contact.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <GlowButton href={whatsappHref} className="w-full sm:w-auto min-w-[240px]">
            <TbBrandWhatsapp className="w-5 h-5" />
            {t.contact.whatsapp}
          </GlowButton>

          <motion.a
            href="mailto:contato@nebulaclw.com.br"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm"
          >
            <TbMail className="w-5 h-5" />
            contato@nebulaclw.com.br
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
