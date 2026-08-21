/**
 * Seção de apresentação principal
 * Exibe foto, nome, título e descrição com animação
 * 
 * @component
 * @author Linderlly Santana
 */

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import profile from '../assets/images/profile.png'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      className="
        min-h-[70vh] md:min-h-screen
        flex items-center justify-center
        px-5 pt-20 pb-8 md:pt-28 md:pb-0
      "
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Foto de Perfil com animação sutil */}
          <motion.img
            src={profile}
            alt="Linderlly Santana - Software Engineer"
            width={224}
            height={224}
            className="
              w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56
              rounded-full object-cover
              border-4 border-cyan-400
              shadow-2xl shadow-cyan-500/20
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Nome com gradiente */}
          <h1 className="
            mt-5 md:mt-8
            text-3xl sm:text-4xl md:text-7xl
            font-extrabold leading-tight
            gradient-text
          ">
            {t('hero.name')}
          </h1>

          {/* Título profissional */}
          <p className="
            mt-3 max-w-xl
            text-sm sm:text-base md:text-2xl leading-relaxed
            text-slate-700 dark:text-slate-300
          ">
            {t('hero.title')}
          </p>

          {/* Descrição detalhada */}
          <p className="
            mt-4 max-w-2xl
            text-sm md:text-lg leading-7
            text-slate-600 dark:text-slate-400
          ">
            {t('hero.description')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}