/**
 * Navbar.jsx - Barra de navegação fixa com menu responsivo
 * Menu mobile com animação de entrada
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

  const NAV_LINKS = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experiences', label: t('nav.experiences') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#certificates', label: t('nav.certificates') },
    { href: '#contact', label: t('nav.contact') }
  ]

  const SOCIAL_LINKS = [
    { href: 'https://github.com/Linderlly', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/linderlly-santana/', icon: FaLinkedin, label: 'LinkedIn' }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? 'shadow-lg shadow-black/10 dark:shadow-black/40' : ''}
        bg-white/80 dark:bg-slate-950/90
        backdrop-blur-xl
        border-b border-slate-200/50 dark:border-slate-800/50
      `}
    >
      <nav className="container-custom px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
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
          className="md:hidden text-2xl p-2 text-slate-700 dark:text-slate-300 relative z-[60]" 
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu Mobile com animação */}
      {menuOpen && (
        <div className="
          md:hidden
          bg-white/95 dark:bg-slate-950/95
          backdrop-blur-xl
          border-t border-slate-200/50 dark:border-slate-800/50
          animate-slide-down
        ">
          <ul className="flex flex-col items-center gap-1 py-6 px-4">
            {NAV_LINKS.map((link, index) => (
              <li 
                key={link.href}
                className="menu-item w-full"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <a 
                  href={link.href} 
                  onClick={closeMenu}
                  className="
                    block w-full text-center
                    py-3 px-4
                    rounded-xl
                    text-slate-700 dark:text-slate-300
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10
                    transition-all duration-300
                    font-medium
                    text-base
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Tema e redes sociais */}
            <li className="menu-item flex gap-6 text-xl mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 w-full justify-center">
              <button 
                onClick={toggleTheme}
                className="
                  p-3 rounded-full
                  text-slate-700 dark:text-slate-300
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  hover:bg-cyan-500/10
                  transition-all duration-300
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
                    p-3 rounded-full
                    text-slate-700 dark:text-slate-300
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    hover:bg-cyan-500/10
                    transition-all duration-300
                  "
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