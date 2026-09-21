/**
 * Loader.jsx - Tela de carregamento da aplicação
 * 
 * @component
 * @author Linderlly Santana
 */

import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="
      fixed inset-0 z-[999]
      bg-slate-950
      flex flex-col items-center justify-center
      gap-8
    ">
      {/* Logo LS com fade-in e escala */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="
          text-6xl md:text-7xl
          font-extrabold
          gradient-text
          select-none
        "
      >
        LS
      </motion.div>

      {/* Nome com fade-in mais lento */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="
          text-slate-400
          text-sm md:text-base
          tracking-[0.3em]
          uppercase
          font-medium
        "
      >
        Linderlly Santana
      </motion.p>

      {/* Barra de progresso */}
      <div className="
        w-48 md:w-64
        h-1
        bg-slate-800
        rounded-full
        overflow-hidden
      ">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
          className="
            h-full
            bg-gradient-to-r
            from-cyan-400 via-cyan-500 to-blue-500
            rounded-full
          "
        />
      </div>
    </div>
  )
}