/**
 * ExperiencesPage.jsx - Página dedicada às experiências
 * Layout em grid 2 colunas com espaçamento generoso
 * 
 * @component
 * @author Linderlly Santana
 */

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  FaArrowLeft, 
  FaBriefcase, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from '../components/AnimatedSection'
import LanguageToggle from '../components/LanguageToggle'
import ScrollProgress from '../components/ScrollProgress'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
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

export default function ExperiencesPage() {
  const { darkMode } = useContext(ThemeContext)
  const { t, language } = useLanguage()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div
      className={`
        min-h-screen transition-all duration-500
        ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}
      `}
    >
      <ScrollProgress />

      {/* Header fixo */}
      <header className="
        fixed top-0 left-0 w-full z-50
        h-16 md:h-20
        bg-white dark:bg-slate-950
        border-b-2 border-slate-200 dark:border-slate-800
        shadow-lg shadow-black/5 dark:shadow-black/20
      ">
        <div className="container-custom px-4 md:px-6 h-full flex items-center justify-between gap-4">
          <button
            onClick={handleGoBack}
            className="
              btn-back
              group
              inline-flex items-center justify-center
              gap-2
              h-11 md:h-12
              w-24 md:w-28
              rounded-xl
              transition-all duration-300
              font-medium
              text-xs md:text-sm
              flex-shrink-0
              shadow-sm hover:shadow-lg hover:shadow-cyan-500/30
            "
            aria-label={t('experiences.back')}
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="leading-none">{t('experiences.back')}</span>
          </button>

          <h1 className="text-sm md:text-lg font-bold gradient-text truncate">
            Linderlly Santana
          </h1>
        </div>
      </header>

      {/* Espaçador */}
      <div className="h-20 md:h-24" aria-hidden="true" />

      {/* Conteúdo */}
      <main className="pb-16 px-4 md:px-6">
        <div className="container-custom max-w-7xl">
          
          {/* Título */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center mb-10 md:mb-14 pt-4 md:pt-6">
              <h2 className="
                font-bold
                text-3xl md:text-5xl
                mb-4
                text-slate-900 dark:text-white
              ">
                {t('experiences.pageTitle')}
              </h2>
              <p className="
                text-slate-600 dark:text-slate-400
                text-sm md:text-lg
                max-w-2xl mx-auto
                leading-relaxed
              ">
                {t('experiences.pageSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Grid de experiências - 2 COLUNAS */}
          <div className="
            grid 
            grid-cols-1 
            lg:grid-cols-2
            gap-10 md:gap-14
          ">
            {experiences.map((exp, index) => {
              const Icon = TYPE_ICONS[exp.type]
              const color = TYPE_COLORS[exp.type]
              const typeLabel = experienceTypes[exp.type][language]

              return (
                <AnimatedSection 
                  key={exp.id} 
                  direction="up" 
                  delay={0.1 * (index % 4)}
                  distance={40}
                >
                  <article className="
                    card-solid
                    group
                    border-2 border-slate-200 dark:border-slate-800
                    rounded-2xl
                    overflow-hidden
                    hover:border-cyan-400 dark:hover:border-cyan-400
                    hover:shadow-xl hover:shadow-cyan-500/10
                    transition-all duration-500
                    h-full
                    flex flex-col
                  ">
                    
                    {/* HEADER DO CARD */}
                    <div className="
                      card-header
                      p-6 md:p-7
                      border-b-2
                    ">
                      <div className="flex items-start gap-4">
                        <div className={`
                          flex-shrink-0
                          w-14 h-14 md:w-16 md:h-16
                          rounded-xl
                          bg-gradient-to-br ${color}
                          flex items-center justify-center
                          text-white text-xl md:text-2xl
                          shadow-md
                        `}>
                          <Icon />
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="
                            inline-block
                            text-xs font-bold
                            text-cyan-600 dark:text-cyan-400
                            uppercase tracking-wider
                            mb-1
                          ">
                            {typeLabel}
                          </span>
                          <h3 className="
                            text-xl md:text-2xl font-bold
                            text-slate-900 dark:text-white
                            leading-tight
                            mb-1
                          ">
                            {exp.role[language]}
                          </h3>
                          <p className="
                            text-base font-semibold
                            text-slate-700 dark:text-slate-300
                            mb-2
                          ">
                            {exp.company}
                          </p>
                          <div className="
                            flex flex-wrap items-center gap-x-4 gap-y-1
                            text-sm
                            text-slate-500 dark:text-slate-400
                          ">
                            <span className="inline-flex items-center gap-1.5">
                              <FaCalendarAlt className="text-xs" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <FaMapMarkerAlt className="text-xs" />
                              {exp.location[language]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DESCRIÇÃO */}
                    <div className="p-6 md:p-7 pb-0">
                      <p className="
                        text-sm md:text-base
                        text-slate-700 dark:text-slate-300
                        leading-relaxed
                      ">
                        {exp.description[language]}
                      </p>
                    </div>

                    {/* DETALHES */}
                    <div className="
                      p-6 md:p-7
                      space-y-6
                      flex-1
                    ">
                      
                      {/* Atividades */}
                      <div>
                        <h4 className="
                          flex items-center gap-2
                          text-xs md:text-sm font-bold
                          text-slate-800 dark:text-slate-200
                          uppercase tracking-wider
                          mb-3
                        ">
                          <span className="
                            w-1.5 h-4 rounded-full
                            bg-cyan-500 dark:bg-cyan-400
                          " />
                          {t('experiences.highlights')}
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.highlights[language].map((highlight, i) => (
                            <li 
                              key={i}
                              className="
                                flex items-start gap-2.5
                                text-sm
                                text-slate-700 dark:text-slate-300
                                leading-relaxed
                              "
                            >
                              <FaCheckCircle className="
                                text-cyan-500 dark:text-cyan-400
                                mt-0.5 flex-shrink-0
                                text-xs
                              " />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tecnologias */}
                      <div>
                        <h4 className="
                          flex items-center gap-2
                          text-xs md:text-sm font-bold
                          text-slate-800 dark:text-slate-200
                          uppercase tracking-wider
                          mb-3
                        ">
                          <span className="
                            w-1.5 h-4 rounded-full
                            bg-cyan-500 dark:bg-cyan-400
                          " />
                          {t('experiences.technologies')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="
                                px-3 py-1.5 text-xs
                                bg-cyan-500/10 text-cyan-700 dark:text-cyan-400
                                rounded-md border border-cyan-500/30
                                font-medium
                                hover:bg-cyan-500/20
                                transition-colors
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
      <LanguageToggle />
      <ScrollToTop />
    </div>
  )
}