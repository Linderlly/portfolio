/**
 * ProjectsSection.jsx - Seção resumida de projetos na home
 * Redireciona para a página /projetos ao clicar
 * 
 * @component
 * @author Linderlly Santana
 */

import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  // Pega apenas os 3 primeiros projetos para o preview
  const previewProjects = projects.slice(0, 3)

  const handleViewAll = () => {
    navigate('/projetos')
  }

  return (
    <section 
      id="projects" 
      className="px-4 md:px-6 py-10 md:py-16 scroll-mt-24"
    >
      <div className="container-custom">
        {/* Título da seção */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="
              font-bold
              text-3xl md:text-5xl
              mb-4
              text-slate-900 dark:text-white
            ">
              {t('projects.title')}
            </h2>
            <p className="
              text-slate-600 dark:text-slate-400
              text-sm md:text-lg
              max-w-2xl mx-auto
              leading-relaxed
            ">
              {t('projects.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de 3 projetos */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          gap-6 md:gap-7
        ">
          {previewProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              direction="up" 
              delay={0.1 * index}
              distance={40}
              className="h-full"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  card-solid
                  group
                  border-2 border-slate-200 dark:border-slate-800
                  rounded-2xl
                  overflow-hidden
                  hover:border-cyan-400 dark:hover:border-cyan-400
                  hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-cyan-500/10
                  transition-all duration-500
                  flex flex-col
                  h-full
                "
              >
                {/* Imagem */}
                <div className="overflow-hidden h-44 md:h-48">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="450"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="
                    text-base md:text-lg font-bold
                    text-slate-900 dark:text-white
                    leading-snug
                    mb-2
                    line-clamp-2
                  ">
                    {t(project.titleKey)}
                  </h3>

                  <p className="
                    text-sm
                    text-slate-700 dark:text-slate-300
                    leading-relaxed
                    mb-5
                    flex-1
                    line-clamp-3
                  ">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-2.5 py-1 text-[10px] md:text-xs
                          bg-cyan-500/10 text-cyan-700 dark:text-cyan-400
                          rounded-md border border-cyan-500/30
                          font-medium
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="
                    mt-auto
                    w-full
                    bg-cyan-500 hover:bg-cyan-400
                    hover:scale-[1.02]
                    py-2.5 rounded-lg
                    text-xs md:text-sm font-semibold
                    text-white
                    transition-all duration-300
                  ">
                    {t('projects.viewProject')}
                  </button>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <div className="h-16 md:h-24" aria-hidden="true" />
          
        {/* Botao "Ver todos os projetos" */}
         <AnimatedSection direction="up" delay={0.4}>
          <div className="flex justify-center mt-20 md:mt-28 mb-8 md:mb-12">
            <div className="glow-wrapper">
              <button
                onClick={handleViewAll}
                className="
                  group
                  relative
                  inline-flex items-center justify-center
                  gap-3
                  h-12 md:h-14
                  w-64 md:w-72
                  bg-cyan-500 hover:bg-cyan-400
                  text-white font-semibold
                  text-sm md:text-base
                  rounded-2xl
                  shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
                  transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  whitespace-nowrap
                  leading-none
                "
              >
                <span>{t('projects.viewAll')}</span>
                <FaArrowRight className="
                  text-sm md:text-base
                  transition-transform duration-300
                  group-hover:translate-x-1
                " />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className="h-16 md:h-24" aria-hidden="true" />

      </div>
    </section>
  )
}