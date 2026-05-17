'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ParticleComponent } from '@/app/components/particles/Particules'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Experiencias = [
  { name: 'JavaScript' },
  { name: 'Typescript' },
  { name: 'ReactJs' },
  { name: 'NextJs' },
  { name: 'React Native' },
  { name: 'Tailwind' },
  { name: 'Styled Components' },
  { name: 'Material Ui' },
  { name: 'PHP' },
  { name: 'Laravel' },
  { name: 'NodeJs' },
  { name: 'Redux' },
  { name: 'ContextApi' },
  { name: 'Microsserviços' },
  { name: 'MySQL' },
  { name: 'Docker' },
]

export const HeroSection = () => {
  const [tipeImagem, setTipeImagem] = useState('/images/crystyan7.jpg')
  return (
    <section className="w-full lg:h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <ParticleComponent />
      <div className="container rounded flex items-start flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <span className="font-mono text-indigo-400 flex gap-4">
            <motion.span
              onClick={() => setTipeImagem('/images/crystyan7.jpg')}
              className="cursor-pointer pl-5 text-indigo-400 hover:text-gray-100 bg-indigo-900/80 text-sm py-1 px-3 rounded-lg"
            >
              profissional
            </motion.span>
            <motion.span
              onClick={() => setTipeImagem('/images/crystyan.png')}
              className="cursor-pointer text-indigo-400 hover:text-gray-100 bg-indigo-900/80 text-sm py-1 px-3 rounded-lg"
            >
              futuro
            </motion.span>
          </span>
          <h2 className="text-4xl font-medium mt-2 text-indigo-300">
            <Typewriter
              words={[
                'Crystyan Gomes',
                'Desenvolvedor Full Stack',
                'Apaixonado por tecnologia!',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-gray-200 my-6 text-base sm:text-base">
            A constante vontade de melhorar é meu combustível. Vejo cada desafio
            como uma maneira de me desafiar, de expandir meu conhecimento e de
            crescer profissional e pessoalmente. A jornada da programação é uma
            estrada interminável, e estou ansioso para percorrê-la, sempre
            buscando me tornar o melhor desenvolvedor que posso ser.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[550px]">
            {Experiencias.map((value, i) => (
              <TechBadge
                key={`intro-tech-${value.name}`}
                name={value.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
        <div className="w-full lg:h-[500px] flex items-center justify-center lg:ml-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={tipeImagem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="w-[300px] lg:w-[420px] h-[400px] lg:h-[550px] flex items-center justify-center"
            >
              <Image
                width={420}
                height={420}
                src={tipeImagem}
                alt="foto de perfil"
                className="p-1 border-2 border-indigo-500 w-full h-full object-cover mb-6 lg:mb-0 lg:rounded-lg rounded-full hover:shadow-button hover:border-indigo-200 transition-all"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
