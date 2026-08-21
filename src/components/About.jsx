/**
 * Seção "Sobre Mim"
 * Apresenta informações pessoais e profissionais
 * 
 * @component
 * @author Linderlly Santana
 */

import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section 
      id="about" 
      className="px-4 md:px-6 py-10 md:py-16"
    >
      <div className="container-custom">
        <div className="
          rounded-3xl
          p-6 md:p-16
          transition-all duration-300
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-xl
          border border-slate-200/50 dark:border-slate-800/50
          shadow-lg shadow-slate-200/20 dark:shadow-slate-800/20
          hover:shadow-xl hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10
          hover:border-cyan-400/30 dark:hover:border-cyan-400/30
        ">
          <h2 className="
            text-center font-bold
            text-3xl md:text-5xl
            mb-8 md:mb-12
            text-slate-900 dark:text-white
          ">
            {t('about.title')}
          </h2>

          <div className="flex justify-center">
            <p className="
              w-full max-w-4xl
              text-center
              text-slate-700 dark:text-slate-300
              text-base md:text-xl
              leading-7 md:leading-9
              whitespace-pre-line
            ">
              {t('about.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}