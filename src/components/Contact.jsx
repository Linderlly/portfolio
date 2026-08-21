/**
 * Seção de contato com links para redes sociais
 * Inclui botões para email, LinkedIn e GitHub
 * 
 * @component
 * @author Linderlly Santana
 */

import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  /** Configuração dos contatos */
  const CONTACT_LINKS = [
    {
      id: 'email',
      href: 'mailto:linderllysantana22@gmail.com',
      icon: FaEnvelope,
      label: t('contact.email'),
      color: 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/linderlly-santana/',
      icon: FaLinkedin,
      label: t('contact.linkedin'),
      color: 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white shadow-lg shadow-slate-200/30 dark:shadow-slate-800/30 hover:shadow-slate-300/50 dark:hover:shadow-slate-700/50'
    },
    {
      id: 'github',
      href: 'https://github.com/Linderlly',
      icon: FaGithub,
      label: t('contact.github'),
      color: 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white shadow-lg shadow-slate-200/30 dark:shadow-slate-800/30 hover:shadow-slate-300/50 dark:hover:shadow-slate-700/50'
    }
  ]

  return (
    <section 
      id="contact" 
      className="px-4 md:px-5 py-10 md:py-16 flex justify-center"
    >
      <div className="w-full max-w-6xl">
        <div className="
          rounded-3xl
          p-6 md:p-14
          text-center
          flex flex-col items-center justify-center
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-xl
          border border-slate-200/50 dark:border-slate-800/50
          shadow-lg shadow-slate-200/20 dark:shadow-slate-800/20
          hover:shadow-xl hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10
          hover:border-cyan-400/30 dark:hover:border-cyan-400/30
          transition-all duration-300
        ">
          <h2 className="
            font-bold
            text-3xl md:text-5xl
            mb-6 md:mb-8
            text-slate-900 dark:text-white
          ">
            {t('contact.title')}
          </h2>

          <p className="
            w-full max-w-2xl
            text-slate-700 dark:text-slate-300
            text-sm md:text-xl
            leading-7 md:leading-8
            text-center
            mb-8 md:mb-12
            whitespace-pre-line
          ">
            {t('contact.description')}
          </p>

          <div className="
            w-full
            flex flex-col sm:flex-row
            justify-center items-center
            gap-4 md:gap-5
          ">
            {CONTACT_LINKS.map(({ id, href, icon: Icon, label, color }) => (
              <a
                key={id}
                href={href}
                target={id !== 'email' ? '_blank' : undefined}
                rel={id !== 'email' ? 'noreferrer' : undefined}
                className={`
                  w-full sm:w-auto min-w-[140px]
                  h-14 md:h-16 px-6 md:px-8
                  flex items-center justify-center gap-2 md:gap-3
                  ${color}
                  rounded-2xl
                  font-semibold text-base md:text-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:-translate-y-1
                `}
              >
                <Icon className="text-lg md:text-xl" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}