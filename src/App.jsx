import { useContext, useEffect, useState } from 'react'

import { ThemeContext } from './context/ThemeContext'

import Loader from './components/Loader'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {

  const { darkMode } = useContext(ThemeContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (

    <div
      className={`
        min-h-screen
        transition-all
        duration-500

        ${
          darkMode
            ? 'bg-slate-950 text-white'
            : 'bg-slate-50 text-slate-900'
        }
      `}
    >

      <Navbar />

      <main>

        <Hero />

        <div style={{ height: '40px' }}></div>

        <About />

        <div style={{ height: '40px' }}></div>

        <Skills />

        <div style={{ height: '40px' }}></div>

        <Projects />

        <div style={{ height: '40px' }}></div>

        <Certificates />

        <div style={{ height: '40px' }}></div>

        <Contact />

      </main>

      <Footer />

    </div>

  )
}