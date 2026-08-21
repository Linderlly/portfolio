/**
 * Contexto para gerenciamento de tema claro/escuro
 * Persiste a preferência do usuário e sincroniza com a classe CSS
 * 
 * @context
 * @author Linderlly Santana
 */

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  /**
   * Inicializa o tema com segurança:
   * 1. Tenta ler do localStorage
   * 2. Se não existir ou for inválido, usa o sistema ou padrão (dark)
   */
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      
      // Se não houver valor salvo, usa a preferência do sistema
      if (saved === null) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      
      // Tenta fazer o parse do JSON
      return JSON.parse(saved)
    } catch (error) {
      // Se o JSON for inválido, remove o valor corrompido e usa o padrão
      console.warn('Erro ao ler tema do localStorage:', error)
      localStorage.removeItem('theme')
      return true // Padrão: dark mode
    }
  })

  /**
   * Sincroniza o tema com o DOM e persiste no localStorage
   * Adiciona/remove a classe 'dark' no elemento HTML
   */
  useEffect(() => {
    const htmlElement = document.documentElement
    
    if (darkMode) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
    
    try {
      localStorage.setItem('theme', JSON.stringify(darkMode))
    } catch (error) {
      console.warn('Erro ao salvar tema no localStorage:', error)
    }
  }, [darkMode])

  /**
   * Alterna entre os temas claro e escuro
   */
  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const value = {
    darkMode,
    setDarkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}