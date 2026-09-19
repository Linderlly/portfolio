/**
 * ProjectsPage.jsx - Página dedicada aos projetos
 * Mostra todos os projetos em grid
 * 
 * @component
 * @author Linderlly Santana
 */

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from '../components/AnimatedSection'
import LanguageToggle from '../components/LanguageToggle'
import ScrollProgress from '../components/ScrollProgress'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  const { darkMode } = useContext(ThemeContext)
  const { t } = useLanguage()
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
            aria-label={t('projects.back')}
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="leading-none">{t('projects.back')}</span>
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
                {t('projects.pageTitle')}
              </h2>
              <p className="
                text-slate-600 dark:text-slate-400
                text-sm md:text-lg
                max-w-2xl mx-auto
                leading-relaxed
              ">
                {t('projects.pageSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Grid de TODOS os projetos */}
          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-2
            lg:grid-cols-3
            gap-6 md:gap-7
          ">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                direction="up" 
                delay={0.05 * (index % 6)}
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
                    ">
                      {t(project.titleKey)}
                    </h3>

                    <p className="
                      text-sm
                      text-slate-700 dark:text-slate-300
                      leading-relaxed
                      mb-5
                      flex-1
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
        </div>
      </main>

      <Footer />
      <LanguageToggle />
      <ScrollToTop />
    </div>
  )
}