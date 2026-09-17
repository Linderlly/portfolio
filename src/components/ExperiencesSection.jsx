/**
 * ExperiencesSection.jsx - Seção resumida de experiências na home
 * Redireciona para a página /experiencias ao clicar
 * 
 * @component
 * @author Linderlly Santana
 */

import { useNavigate } from 'react-router-dom'
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { experiences, experienceTypes } from '../data/experiences'

/** Ícones por tipo de experiência */
const TYPE_ICONS = {
  work: FaBriefcase,
  education: FaGraduationCap,
  freelance: FaLaptopCode
}

/** Cores por tipo */
const TYPE_COLORS = {
  work: 'from-cyan-500 to-blue-500',
  education: 'from-violet-500 to-purple-500',
  freelance: 'from-emerald-500 to-teal-500'
}

export default function ExperiencesSection() {
  const { t, language } = useLanguage()
  const navigate = useNavigate()

  const previewExperiences = experiences.slice(0, 3)

  const handleViewAll = () => {
    navigate('/experiencias')
  }

  return (
    <section 
      id="experiences" 
      className="px-4 md:px-6 py-10 md:py-16"
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
              {t('experiences.title')}
            </h2>
            <p className="
              text-slate-600 dark:text-slate-400
              text-sm md:text-lg
              max-w-2xl mx-auto
              leading-relaxed
            ">
              {t('experiences.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de cards */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          gap-6 md:gap-7
        ">
          {previewExperiences.map((exp, index) => {
            const Icon = TYPE_ICONS[exp.type]
            const color = TYPE_COLORS[exp.type]
            const typeLabel = experienceTypes[exp.type][language]

            return (
              <AnimatedSection 
                key={exp.id} 
                direction="up" 
                delay={0.1 * index}
                distance={40}
                className="h-full"
              >
                <div className="
                  group
                  bg-white dark:bg-slate-900
                  backdrop-blur-lg
                  border-2 border-slate-200 dark:border-slate-800
                  rounded-2xl
                  p-6 md:p-7
                  hover:border-cyan-400 dark:hover:border-cyan-400
                  hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-cyan-500/10
                  transition-all duration-500
                  flex flex-col
                  h-full
                ">
                  {/* Cabeçalho com ícone */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`
                      flex-shrink-0
                      w-12 h-12 md:w-14 md:h-14
                      rounded-xl
                      bg-gradient-to-br ${color}
                      flex items-center justify-center
                      text-white text-lg md:text-xl
                      shadow-md
                    `}>
                      <Icon />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="
                        text-[10px] md:text-xs font-bold
                        text-cyan-600 dark:text-cyan-400
                        uppercase tracking-wider
                        block mb-1
                      ">
                        {typeLabel}
                      </span>
                      <h3 className="
                        text-base md:text-lg font-bold
                        text-slate-900 dark:text-white
                        leading-snug
                        line-clamp-2
                      ">
                        {exp.role[language]}
                      </h3>
                    </div>
                  </div>

                  {/* Empresa */}
                  <p className="
                    text-sm md:text-base font-semibold
                    text-slate-700 dark:text-slate-300
                    mb-1
                  ">
                    {exp.company}
                  </p>

                  {/* Período e local */}
                  <div className="
                    flex flex-wrap items-center gap-x-3 gap-y-1
                    text-xs md:text-sm
                    text-slate-500 dark:text-slate-400
                    mb-4
                  ">
                    <span className="inline-flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[10px] md:text-xs" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-[10px] md:text-xs" />
                      {exp.location[language]}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="
                    text-sm
                    text-slate-700 dark:text-slate-300
                    leading-relaxed
                    mb-5
                    flex-1
                    line-clamp-3
                  ">
                    {exp.description[language]}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.technologies.slice(0, 3).map((tech, i) => (
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
                    {exp.technologies.length > 3 && (
                      <span className="
                        px-2.5 py-1 text-[10px] md:text-xs
                        text-slate-500 dark:text-slate-400
                        font-medium
                      ">
                        +{exp.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Botão "Ver todas as experiências" */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="flex justify-center mt-10 md:mt-14">
            <button
              onClick={handleViewAll}
              className="
                group
                inline-flex items-center justify-center
                gap-3
                h-12 md:h-14
                px-6 md:px-8
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
              <span>{t('experiences.viewAll')}</span>
              <FaArrowRight className="
                text-sm md:text-base
                transition-transform duration-300
                group-hover:translate-x-1
              " />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}