/**
 * ScrollToTop.jsx - Componente que:
 * 1. Rola ao topo ao mudar de rota
 * 2. Exibe botão flutuante para voltar ao topo
 * 
 * @component
 * @author Linderlly Santana
 */

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    // Salva o valor atual antes de mexer
    const prevOverflow = document.body.style.overflow

    // Reseta qualquer overflow que possa ter ficado
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''

    // Rola ao topo SEM bloquear
    window.scrollTo(0, 0)

    // Restaura o overflow anterior (se houver)
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="
        fixed bottom-24 right-6 z-40
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-cyan-500 hover:bg-cyan-400
        text-white
        shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:-translate-y-1
        animate-fade-in-up
      "
    >
      <FaArrowUp className="text-lg md:text-xl" />
    </button>
  )
}