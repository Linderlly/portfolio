/**
 * CertificatesPage.jsx - Página dedicada aos certificados
 * Mostra todos os certificados em grid
 * 
 * @component
 * @author Linderlly Santana
 */

import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaFilePdf, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from '../components/AnimatedSection'
import LanguageToggle from '../components/LanguageToggle'
import ScrollProgress from '../components/ScrollProgress'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import { certificates } from '../data/certificates'

export default function CertificatesPage() {
  const { darkMode } = useContext(ThemeContext)
  const { t } = useLanguage()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div
      className={`
        min-h-screen flex flex-col transition-all duration-500
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
            aria-label={t('certificates.back')}
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="leading-none">{t('certificates.back')}</span>
          </button>

          <h1 className="text-sm md:text-lg font-bold gradient-text truncate">
            Linderlly Santana
          </h1>
        </div>
      </header>

      {/* Espaçador */}
      <div className="h-20 md:h-24" aria-hidden="true" />

      {/* Conteúdo */}
      <main className="flex-1 pb-16 px-4 md:px-6">
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
                {t('certificates.pageTitle')}
              </h2>
              <p className="
                text-slate-600 dark:text-slate-400
                text-sm md:text-lg
                max-w-2xl mx-auto
                leading-relaxed
              ">
                {t('certificates.pageSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Grid de TODOS os certificados */}
          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-2
            lg:grid-cols-3
            gap-6 md:gap-7
          ">
            {certificates.map((certificate, index) => (
              <AnimatedSection 
                key={certificate.id} 
                direction="up" 
                delay={0.05 * (index % 6)}
                distance={40}
                className="h-full"
              >
                <div className="
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
                ">
                  {/* Imagem */}
                  <div className="overflow-hidden h-44 md:h-48">
                    <img
                      src={certificate.image}
                      alt={t(certificate.titleKey)}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="
                        flex-shrink-0
                        w-9 h-9
                        rounded-lg
                        bg-cyan-500/10
                        flex items-center justify-center
                        text-cyan-600 dark:text-cyan-400
                        text-sm
                      ">
                        <FaCertificate />
                      </div>
                      <h3 className="
                        text-base md:text-lg font-bold
                        text-slate-900 dark:text-white
                        leading-snug
                        flex-1
                      ">
                        {t(certificate.titleKey)}
                      </h3>
                    </div>

                    <p className="
                      text-sm
                      text-slate-700 dark:text-slate-300
                      leading-relaxed
                      mb-5
                      flex-1
                    ">
                      {t(certificate.descriptionKey)}
                    </p>

                    {/* Botões */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={certificate.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex-1 flex items-center justify-center gap-2
                          bg-red-500 hover:bg-red-400
                          text-white
                          py-2 rounded-lg
                          text-xs font-semibold
                          transition-all hover:scale-105
                        "
                      >
                        <FaFilePdf />
                        PDF
                      </a>
                      <a
                        href={certificate.image}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex-1 flex items-center justify-center gap-2
                          bg-cyan-500 hover:bg-cyan-400
                          text-white
                          py-2 rounded-lg
                          text-xs font-semibold
                          transition-all hover:scale-105
                        "
                      >
                        <FaExternalLinkAlt />
                        {t('certificates.view')}
                      </a>
                    </div>
                  </div>
                </div>
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