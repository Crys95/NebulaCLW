'use client'
import { Link } from '@/app/components/Link'
import { SectionTitles } from '@/app/components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { ParticleComponent } from '@/app/components/particles/Particules'

export const PageIntro = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <ParticleComponent />
      <SectionTitles
        subtitle="projects"
        titlte="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        exit={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue á
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href={'/'}>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}
