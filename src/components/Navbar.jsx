import { useContext, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full glass z-50">
      <nav className="container-custom px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold gradient-text">
          Linderlly Santana
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-300 text-sm lg:text-base">
          <li><a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a></li>
          <li><a href="#certificates" className="hover:text-cyan-400 transition-colors">Certificados</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a></li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xl lg:text-2xl">
          <button onClick={() => setDarkMode(!darkMode)} className="hover:text-cyan-400 transition-colors">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a href="https://github.com/Linderlly" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/linderlly-santana/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-slate-800">
          <ul className="flex flex-col items-center gap-5 py-6 text-base">
            <li><a href="#about" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">Sobre</a></li>
            <li><a href="#projects" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">Projetos</a></li>
            <li><a href="#certificates" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">Certificados</a></li>
            <li><a href="#contact" onClick={closeMenu} className="hover:text-cyan-400 transition-colors">Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}