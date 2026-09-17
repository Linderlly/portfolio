/**
 * Home.jsx - Página principal do portfólio
 * 
 * @component
 * @author Linderlly Santana
 */

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ExperiencesSection from '../components/ExperiencesSection'
import Projects from '../components/Projects'
import CertificatesSection from '../components/CertificatesSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LanguageToggle from '../components/LanguageToggle'
import ScrollProgress from '../components/ScrollProgress'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      className={`
        min-h-screen transition-all duration-500
        ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}
      `}
    >
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div className="section-spacer" />
        <About />
        <div className="section-spacer" />
        <Skills />
        <div className="section-spacer" />
        <ExperiencesSection />
        <div className="section-spacer" />
        <Projects />
        <div className="section-spacer" />
        <CertificatesSection />
        <div className="section-spacer" />
        <Contact />
      </main>
      <Footer />

      <LanguageToggle />
      <ScrollToTop />
    </div>
  )
}