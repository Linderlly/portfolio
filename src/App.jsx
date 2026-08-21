/**
 * Componente raiz da aplicação
 * Gerencia o estado de carregamento e a estrutura principal do portfólio
 * 
 * @component
 * @author Linderlly Santana
 */

import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

// Componentes do portfólio
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LanguageToggle from './components/LanguageToggle'

export default function App() {
  const { darkMode } = useContext(ThemeContext)
  const [loading, setLoading] = useState(true)

  /**
   * Simula o tempo de carregamento inicial da aplicação
   * Remove o loader após 500ms para uma experiência fluida
   */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // Exibe o loader enquanto a aplicação carrega
  if (loading) return <Loader />

  return (
    <LanguageProvider>
      <div
        className={`
          min-h-screen transition-all duration-500
          ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}
        `}
      >
        <Navbar />
        <main>
          <Hero />
          <div className="section-spacer" />
          <About />
          <div className="section-spacer" />
          <Skills />
          <div className="section-spacer" />
          <Projects />
          <div className="section-spacer" />
          <Certificates />
          <div className="section-spacer" />
          <Contact />
        </main>
        <Footer />
        
        {/* Botão flutuante de idioma */}
        <LanguageToggle />
      </div>
    </LanguageProvider>
  )
}