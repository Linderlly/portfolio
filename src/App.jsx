import { useEffect, useState } from 'react'

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

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 1800)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (

    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Certificates />

        <Contact />

      </main>

      <Footer />

    </div>

  )
}