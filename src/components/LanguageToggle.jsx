/**
 * Botão flutuante para alternar idioma
 * Design sutil e minimalista que não polui a tela
 * 
 * @component
 * @author Linderlly Santana
 */

import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaGlobe, FaTimes } from 'react-icons/fa'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  // Fecha o tooltip após 3 segundos se não houver interação
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Fecha a notificação após 3 segundos
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const handleClick = () => {
    toggleLanguage()
    setShowNotification(true)
    setIsOpen(true)
    
    // Fecha após 3 segundos
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  const getButtonText = () => {
    return language === 'pt' ? 'View in English' : 'Visualizar em Português'
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 language-toggle-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip/Indicador de idioma atual */}
      <div
        className={`
          absolute bottom-full right-0 mb-3
          transform transition-all duration-300
          ${isOpen || isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
          pointer-events-none
        `}
      >
        <div className="
          glass
          rounded-2xl
          px-4 py-2
          text-xs md:text-sm
          font-medium
          whitespace-nowrap
          backdrop-blur-lg
          border border-cyan-400/20
          shadow-lg shadow-cyan-500/10
          text-slate-800 dark:text-white
        ">
          {language === 'pt' ? '🇧🇷 Português' : '🇺🇸 English'}
        </div>
        {/* Setinha do tooltip */}
        <div className="
          w-0 h-0
          border-l-8 border-l-transparent
          border-r-8 border-r-transparent
          border-t-8
          border-t-cyan-400/20
          mx-auto
          relative top-[-1px]
        " />
      </div>

      {/* Botão principal */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          group
          w-12 h-12 md:w-14 md:h-14
          rounded-full
          glass
          backdrop-blur-xl
          border border-cyan-400/20
          hover:border-cyan-400
          shadow-lg shadow-cyan-500/10
          hover:shadow-cyan-500/25
          transition-all duration-300
          hover:scale-110
          flex items-center justify-center
          relative
          overflow-hidden
          bg-white/60 dark:bg-slate-900/60
        "
        aria-label={getButtonText()}
        title={getButtonText()}
      >
        {/* Anel giratório ao redor do botão */}
        <div className="
          absolute inset-0
          rounded-full
          border-2 border-cyan-400/30
          animate-spin-slow
          group-hover:border-cyan-400/60
          transition-colors
          duration-300
        " style={{ 
          animationDuration: '8s',
          borderTopColor: 'transparent'
        }} />
        
        {/* Ícone do globo */}
        <FaGlobe className="
          text-lg md:text-xl
          text-cyan-500 dark:text-cyan-400
          group-hover:text-cyan-600 dark:group-hover:text-cyan-300
          transition-colors
          duration-300
          relative z-10
        " />

        {/* Texto do idioma (aparece no hover) */}
        <span className="
          absolute inset-0
          flex items-center justify-center
          text-xs font-bold
          text-cyan-500 dark:text-cyan-400
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          bg-white/90 dark:bg-slate-950/90
          backdrop-blur-sm
          rounded-full
        ">
          {language === 'pt' ? 'EN' : 'PT'}
        </span>
      </button>

      {/* Notificação de troca de idioma */}
      <div
        className={`
          absolute bottom-full right-0 mb-16
          transform transition-all duration-500
          ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          pointer-events-none
        `}
      >
        <div className="
          glass
          rounded-2xl
          px-4 py-3
          backdrop-blur-lg
          border border-cyan-400/20
          shadow-xl shadow-cyan-500/20
          max-w-[200px] md:max-w-[250px]
          bg-white/80 dark:bg-slate-900/80
        ">
          <p className="
            text-xs md:text-sm
            text-center
            text-cyan-600 dark:text-cyan-300
            font-medium
          ">
            {language === 'pt' 
              ? '🇧🇷 Agora em Português' 
              : '🇺🇸 Now in English'
            }
          </p>
          <p className="
            text-[10px] md:text-xs
            text-center
            text-slate-500 dark:text-gray-400
            mt-1
          ">
            {language === 'pt' 
              ? 'Idioma alterado com sucesso!' 
              : 'Language changed successfully!'
            }
          </p>
        </div>
      </div>
    </div>
  )
}