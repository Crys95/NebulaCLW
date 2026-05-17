'use client'
import { SectionTitles } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandLaravel,
  TbBrandDocker,
  TbBrandMysql,
  TbBrandPhp,
} from 'react-icons/tb'

const stack = [
  {
    icon: <TbBrandReact size={30} />,
    name: 'ReactJs',
    startDate: '2022-05-30',
  },
  {
    icon: <TbBrandNextjs size={30} />,
    name: 'NextJs',
    startDate: '2022-07-30',
  },
  {
    icon: <TbBrandJavascript size={30} />,
    name: 'JavaScript',
    startDate: '2022-05-30',
  },
  {
    icon: <TbBrandTypescript size={30} />,
    name: 'TypeScript',
    startDate: '2022-07-30',
  },
  {
    icon: <TbBrandLaravel size={30} />,
    name: 'Laravel',
    startDate: '2022-07-30',
  },
  {
    icon: <TbBrandPhp size={30} />,
    name: 'PHP',
    startDate: '2022-07-30',
  },
  {
    icon: <TbBrandMysql size={30} />,
    name: 'MySQL',
    startDate: '2022-07-30',
  },
  {
    icon: <TbBrandDocker size={30} />,
    name: 'Docker',
    startDate: '2023-03-30',
  },
]

export const KnownTeachs = () => {
  return (
    <section className="bg-slate-900">
      <div className="container py-16">
        <SectionTitles subtitle="competências" titlte="Conhecimentos" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
          {stack.map((stak, i) => (
            <motion.div
              key={stak.name}
              initial={{ opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <KnownTech
                tech={{
                  icon: stak.icon,
                  name: stak.name,
                  startDate: stak.startDate,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
