/**
 * App.jsx - Componente raiz com roteamento
 * 
 * 
 * @component
 * @author Linderlly Santana
 */

import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

import Loader from './components/Loader'
import Home from './pages/Home'
import ExperiencesPage from './pages/ExperiencesPage'
import CertificatesPage from './pages/CertificatesPage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  const { darkMode } = useContext(ThemeContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <LanguageProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BrowserRouter basename="/portfolio">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiencias" element={<ExperiencesPage />} />
            <Route path="/certificados" element={<CertificatesPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </LanguageProvider>
  )
}