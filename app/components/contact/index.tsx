'use client'

import { SectionTitles } from '../section-title'
import {
  TbBrandWhatsapp,
  // TbMail,
  TbClock,
  TbCheck,
  TbRocket,
  TbShieldCheck,
} from 'react-icons/tb'
import { motion } from 'framer-motion'
import { GlowButton } from '../nebula/glow-button'
import { SpaceSection } from '../nebula/space-section'
import { SpaceCard } from '../nebula/space-card'
import { useLanguage } from '@/app/contexts/language-context'
import { ROUTES } from '@/app/lib/routes'
import type { IconType } from 'react-icons'

const CHANNEL_ICONS: IconType[] = [TbBrandWhatsapp, TbClock]
const TRUST_ICONS: IconType[] = [TbClock, TbShieldCheck, TbRocket]

// const EMAIL = 'contato@nebulaclw.com.br'
const WHATSAPP_NUMBER = '5511958035016'

export const ContactForm = () => {
  const { t } = useLanguage()

  const whatsappHref =
    'https://wa.me/' +
    WHATSAPP_NUMBER +
    '?text=' +
    encodeURIComponent(t.contact.whatsappMessage)

  // const mailtoHref =
  //   'mailto:' +
  //   EMAIL +
  //   '?subject=' +
  //   encodeURIComponent(
  //     locale === 'pt' ? 'Projeto Nebula CLW' : 'Nebula CLW project',
  //   )

  return (
    <SpaceSection id="contato" className="min-h-[calc(100dvh-5rem)] py-28 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <SectionTitles
          subtitle={t.contact.subtitle}
          titlte={t.contact.title}
          className="items-center text-center lg:items-start lg:text-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-sm text-gray-400 sm:text-base lg:text-left"
        >
          {t.contact.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-gray-500 lg:mx-0 lg:text-left"
        >
          {t.contact.intro}
        </motion.p>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <h4 className="font-mono text-xs uppercase tracking-wider text-purple-400">
              {t.contact.channelsTitle}
            </h4>

            {t.contact.channels.map((channel, i) => {
              const Icon = CHANNEL_ICONS[i] ?? TbClock
              const isWhatsapp = i === 0
              // const isEmail = i === 1

              return (
                <SpaceCard key={channel.label} floatDelay={i * 0.2} className="p-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-cyan-400">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-purple-400">{channel.label}</p>
                      {isWhatsapp ? (
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block font-medium text-gray-100 transition-colors hover:text-cyan-400"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-gray-100">{channel.value}</p>
                      )}
                      {/* E-mail desativado — ver bloco comentado em i18n e botão abaixo */}
                      <p className="mt-1 text-xs text-gray-500">{channel.hint}</p>
                    </div>
                  </div>
                </SpaceCard>
              )
            })}

            <SpaceCard floatDelay={0.6} className="p-5">
              <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-purple-400">
                {t.contact.checklistTitle}
              </h4>
              <ul className="space-y-3">
                {t.contact.checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-400">
                    <TbCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SpaceCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <SpaceCard
              floatDelay={0.3}
              className="flex h-full min-h-[420px] flex-col justify-between p-8 sm:p-10"
              icon={
                <TbRocket className="h-10 w-10 text-purple-400" strokeWidth={1.25} />
              }
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-gray-100 sm:text-3xl">
                  {t.contact.ctaTitle}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {t.contact.ctaText}
                </p>

                <ul className="mt-8 space-y-3">
                  {t.contact.trust.map((line, i) => {
                    const Icon = TRUST_ICONS[i] ?? TbCheck
                    return (
                      <li
                        key={line}
                        className="flex items-center gap-3 rounded-lg border border-purple-500/15 bg-white/[0.02] px-4 py-3 text-sm text-gray-300"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
                        {line}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <GlowButton href={whatsappHref} className="w-full sm:w-auto">
                  <TbBrandWhatsapp className="h-5 w-5" />
                  {t.contact.whatsapp}
                </GlowButton>
                {/* <GlowButton href={mailtoHref} variant="outline" className="w-full sm:w-auto">
                  <TbMail className="h-5 w-5" />
                  {t.contact.emailCta}
                </GlowButton> */}
                <GlowButton
                  href={ROUTES.servicos}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  {t.contact.servicesLink}
                </GlowButton>
              </div>
            </SpaceCard>
          </motion.div>
        </div>
      </div>
    </SpaceSection>
  )
}
