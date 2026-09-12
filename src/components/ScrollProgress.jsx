/**
 * Barra de progresso de leitura
 * Mostra quanto da página foi lida com uma barra colorida no topo
 * 
 * @component
 * @author Linderlly Santana
 */

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    // Calcula o progresso na primeira renderização
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="
          h-full
          bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500
          shadow-lg shadow-cyan-500/50
          transition-[width] duration-150 ease-out
        "
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}