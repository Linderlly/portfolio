/**
 * About.jsx - Seção "Sobre Mim"
 * 
 * 
 * @component
 * @author Linderlly Santana
 */

import { useLanguage } from '../context/LanguageContext'
import AnimatedSection from './AnimatedSection'

export default function About() {
  const { t } = useLanguage()

  return (
    <section 
      id="about" 
      className="px-4 md:px-6 py-10 md:py-16 scroll-mt-24"
    >
      <div className="container-custom">
        <AnimatedSection direction="up" delay={0.1}>
          {/* Card principal do About */}
          <div className="
            about-card
            rounded-3xl
            p-6 md:p-12
            border-2
            transition-all duration-300
            shadow-lg shadow-slate-200/20 dark:shadow-slate-800/20
            hover:border-cyan-400/30
          ">
            {/* Título da seção */}
            <h2 className="
              text-center font-bold
              text-3xl md:text-5xl
              mb-6 md:mb-8
              text-slate-900 dark:text-white
            ">
              {t('about.title')}
            </h2>

            {/* Texto do About dividido em parágrafos */}
            <div className="flex justify-center">
              <div className="
                w-full max-w-4xl
                text-center
                text-slate-700 dark:text-slate-300
                text-sm md:text-base
                leading-6 md:leading-7
                about-text
              ">
                {t('about.content').split('\n\n').map((paragraph, index) => (
                  <p 
                    key={index}
                    className={index < 3 ? 'mb-4 md:mb-5' : ''}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}