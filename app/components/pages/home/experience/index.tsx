import { SectionTitles } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="bg-slate-900">
      <div className="container py-16 flex gap-10 md:gap-4 flex-col md:flex-row lg:gap-16">
        <div className="max-w-[428px]">
          <SectionTitles
            subtitle="experiêcias"
            titlte="Experiência Profissional"
          />
          <p className="text-gray-400 mt-6">
            Como desenvolvedor com experiência em ReactJS, NextJS, React Native,
            PHP (Laravel), NodeJS, MySQL e ferramentas web, meu objetivo é criar
            soluções de alta qualidade e inovadoras, buscando constantemente
            aprimorar minhas habilidades e contribuir para o sucesso dos
            projetos e equipes de desenvolvim
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ExperienceItem />
        </div>
      </div>
    </section>
  )
}
