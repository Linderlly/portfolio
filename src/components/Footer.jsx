/**
 * Rodapé do portfólio
 * Exibe informações de copyright e ano
 * 
 * @component
 * @author Linderlly Santana
 */

import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="
      py-6 md:py-8 
      px-4 md:px-6 
      border-t border-slate-200/50 dark:border-slate-800/50
      mt-4 md:mt-6
      bg-white/30 dark:bg-slate-950/30
      backdrop-blur-sm
    ">
      <div className="container-custom">
        <p className="text-center text-slate-600 dark:text-slate-400 text-sm md:text-base">
          © {currentYear} — {t('footer.developed')}{' '}
          <span className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium">
            {t('footer.by')}
          </span>
        </p>
      </div>
    </footer>
  )
}