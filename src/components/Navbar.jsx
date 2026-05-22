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

  const { darkMode, setDarkMode } =
    useContext(ThemeContext)

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        glass
        z-50
      "
    >

      <nav
        className="
          container-custom
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        <h1
          className="
            text-2xl
            font-bold
            gradient-text
          "
        >
          Linderlly Santana
        </h1>

        <ul
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-gray-300
          "
        >

          <li>
            <a href="#about">
              Sobre
            </a>
          </li>

          <li>
            <a href="#projects">
              Projetos
            </a>
          </li>

          <li>
            <a href="#contact">
              Contato
            </a>
          </li>

        </ul>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-5
            text-2xl
          "
        >

          <button
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="https://github.com/Linderlly"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/linderlly-santana/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {menuOpen && (

        <div
          className="
            md:hidden
            glass
            border-t
            border-slate-800
          "
        >

          <ul
            className="
              flex
              flex-col
              items-center
              gap-6
              py-8
            "
          >

            <li>
              <a href="#about">
                Sobre
              </a>
            </li>

            <li>
              <a href="#projects">
                Projetos
              </a>
            </li>

            <li>
              <a href="#contact">
                Contato
              </a>
            </li>

          </ul>

        </div>

      )}

    </header>
  )
}