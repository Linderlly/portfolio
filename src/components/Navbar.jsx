import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          DevPortfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        <div className="flex gap-4 text-2xl text-white">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  )
}