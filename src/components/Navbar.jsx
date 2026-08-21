/**
 * Barra de navegação fixa com menu responsivo
 * Inclui alternância de tema, links sociais e menu mobile
 * 
 * @component
 * @author Linderlly Santana
 */

import { useContext, useState, useEffect } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext)
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /** Links de navegação principais */
  const NAV_LINKS = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#certificates', label: t('nav.certificates') },
    { href: '#contact', label: t('nav.contact') }
  ]

  /** Links sociais */
  const SOCIAL_LINKS = [
    { href: 'https://github.com/Linderlly', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/linderlly-santana/', icon: FaLinkedin, label: 'LinkedIn' }
  ]

  /** Fecha o menu mobile ao redimensionar para desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /** Adiciona sombra ao navbar ao rolar a página */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? 'shadow-lg shadow-black/10 dark:shadow-black/40' : ''}
        bg-white/70 dark:bg-slate-950/80
        backdrop-blur-xl
        border-b border-slate-200/50 dark:border-slate-800/50
      `}
    >
      <nav className="container-custom px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo / Marca */}
        <h1 className="text-xl md:text-2xl font-bold gradient-text">
          Linderlly Santana
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="
                  text-slate-700 dark:text-slate-300
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  transition-colors duration-300
                  relative after:absolute after:bottom-0 after:left-0
                  after:w-0 hover:after:w-full
                  after:h-0.5 after:bg-cyan-500 dark:after:bg-cyan-400
                  after:transition-all after:duration-300
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Ícones Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xl lg:text-2xl">
          <button 
            onClick={toggleTheme} 
            className="
              text-slate-700 dark:text-slate-300
              hover:text-cyan-600 dark:hover:text-cyan-400
              transition-colors duration-300
              p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50
            "
            aria-label="Alternar tema"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="
                text-slate-700 dark:text-slate-300
                hover:text-cyan-600 dark:hover:text-cyan-400
                transition-colors duration-300
                p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50
              "
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Botão Menu Mobile */}
        <button 
          className="md:hidden text-2xl p-2 text-slate-700 dark:text-slate-300" 
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50">
          <ul className="flex flex-col items-center gap-5 py-6 text-base">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={closeMenu}
                  className="
                    text-slate-700 dark:text-slate-300
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    transition-colors duration-300
                    block px-4 py-2
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Tema e redes sociais no menu mobile */}
            <li className="flex gap-6 text-xl mt-2">
              <button 
                onClick={toggleTheme}
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Alternar tema"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}