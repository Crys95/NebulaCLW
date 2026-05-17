'use client'
import { Link } from '@/app/components/Link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const ProjectCard = () => {
  const animeProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="h-full"
      >
        <Image
          width={420}
          height={384}
          src="/images/gurramundial.png"
          alt="gurramundial"
          className="object-cover rounded-lg"
        />
      </motion.div>

      <div>
        <motion.h3
          {...animeProps}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
        >
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
            className="object-cover rounded-lg"
          />
          Meu Primeiro Projeto
        </motion.h3>
        <motion.p
          {...animeProps}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-gray-400 my-6"
        >
          Meu primeiro projeto que conta a historia da segunda guerra mundial
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            name="CSS"
          />
          <TechBadge
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            name="HTML"
          />
          <TechBadge
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            name="Bootstrap"
          />
        </div>
        <Link target="_blank" href={'https://guerra-mundial.vercel.app/'}>
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
