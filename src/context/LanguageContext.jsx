/**
 * Contexto para gerenciamento de idioma
 * Suporte para PT-BR e EN-US com persistência no localStorage
 * 
 * @context
 * @author Linderlly Santana
 */

import { createContext, useContext, useState, useEffect } from 'react'

// Importa os arquivos de tradução
import ptTranslations from '../locales/pt.json'
import enTranslations from '../locales/en.json'

const translations = {
  pt: ptTranslations,
  en: enTranslations
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Inicializa com o idioma salvo ou padrão (pt)
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'pt'
  })

  // Persiste o idioma no localStorage
  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US'
  }, [language])

  /**
   * Função de tradução
   * @param {string} key - Chave da tradução (ex: 'nav.about')
   * @returns {string} - Texto traduzido
   */
  const t = (key) => {
    const keys = key.split('.')
    let result = translations[language]
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        console.warn(`Translation missing: ${key}`)
        return key
      }
    }
    
    return result
  }

  /**
   * Altera o idioma
   * @param {string} lang - 'pt' ou 'en'
   */
  const changeLanguage = (lang) => {
    if (lang === 'pt' || lang === 'en') {
      setLanguage(lang)
    }
  }

  /**
   * Alterna entre os idiomas disponíveis
   */
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const value = {
    language,
    setLanguage: changeLanguage,
    toggleLanguage,
    t,
    isPortuguese: language === 'pt',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook customizado para usar o contexto de idioma
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}