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
  // Inicializa com o tema salvo no localStorage ou padrão (dark)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? JSON.parse(saved) : true
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
    
    localStorage.setItem('theme', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}