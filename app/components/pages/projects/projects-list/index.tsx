'use client'
import Link from 'next/link'
import { ProjectCard } from './project-card'
import { motion } from 'framer-motion'

const projectProps = [
  {
    link: 'https://guerra-mundial.vercel.app/',
    id: 0,
    src: '/images/gurramundial.png',
    title: 'Segunda Guerra',
    subTitle:
      'Meu primeiro projeto que conta a historia da segunda guerra mundial',
    ability: 'HTML, CSS, bootstrap',
  },
]

export const ProjectsList = () => {
  return (
    <section className="bg-slate-900 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <div className="container py-32">
        <>
          {projectProps.map((data, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={data.id}
            >
              <Link target="_blank" href={data.link} key={data.title}>
                <ProjectCard
                  ability={data.ability}
                  src={data.src}
                  subTitle={data.subTitle}
                  title={data.title}
                />
              </Link>
            </motion.div>
          ))}
        </>
      </div>
    </section>
  )
}
