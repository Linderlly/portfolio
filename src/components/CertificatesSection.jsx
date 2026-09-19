/**
 * CertificatesSection.jsx - Seção resumida de certificados na home
 * Redireciona para a página /certificados ao clicar
 * 
 * @component
 * @author Linderlly Santana
 */

import { useNavigate } from 'react-router-dom'
import { FaFilePdf, FaExternalLinkAlt, FaArrowRight, FaCertificate } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { certificates } from '../data/certificates'

export default function CertificatesSection() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  // Pega apenas os 3 primeiros certificados para o preview
  const previewCertificates = certificates.slice(0, 3)

  const handleViewAll = () => {
    navigate('/certificados')
  }

  return (
    <section 
      id="certificates" 
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
              {t('certificates.title')}
            </h2>
            <p className="
              text-slate-600 dark:text-slate-400
              text-sm md:text-lg
              max-w-2xl mx-auto
              leading-relaxed
            ">
              {t('certificates.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de 3 certificados */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          gap-6 md:gap-7
        ">
          {previewCertificates.map((certificate, index) => (
            <AnimatedSection 
              key={certificate.id} 
              direction="up" 
              delay={0.1 * index}
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
                      line-clamp-2
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
                    line-clamp-3
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

        <div className="h-16 md:h-24" aria-hidden="true" />

        {/* Botao "Ver todos os certificados" */}
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
                <span>{t('certificates.viewAll')}</span>
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