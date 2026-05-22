import profile from '../assets/images/profile.png'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-28
      "
    >

      <div className="container-custom">

        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <img
            src={profile}
            alt="Linderlly Santana"
            className="
              w-44
              h-44
              md:w-56
              md:h-56
              rounded-full
              object-cover
              border-4
              border-cyan-400
              shadow-2xl
              shadow-cyan-500/20
            "
          />

          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              mt-8
              gradient-text
            "
          >
            Linderlly Santana
          </h1>

          <p
            className="
              text-gray-400
              text-lg
              md:text-2xl
              mt-4
              max-w-2xl
            "
          >
            Engenheiro de Software
          </p>

        </motion.div>

      </div>

    </section>
  )
}