import profile from '../assets/images/profile.png'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="
      min-h-[70vh] md:min-h-screen
      flex items-center justify-center
      px-5 pt-20 md:pt-28 pb-8 md:pb-0
    ">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src={profile}
            alt="Linderlly Santana"
            className="
              w-28 h-28 
              sm:w-36 sm:h-36 
              md:w-56 md:h-56
              rounded-full object-cover
              border-4 border-cyan-400
              shadow-2xl shadow-cyan-500/20
            "
          />

          <h1 className="
            text-3xl sm:text-4xl md:text-7xl
            font-extrabold
            mt-5 md:mt-8
            gradient-text
            leading-tight
          ">
            Linderlly Santana
          </h1>

          <p className="
            text-gray-400
            text-sm sm:text-base md:text-2xl
            mt-2 md:mt-4
            max-w-xl
            leading-relaxed
          ">
            Engenheiro de Software
          </p>
        </motion.div>
      </div>
    </section>
  )
}