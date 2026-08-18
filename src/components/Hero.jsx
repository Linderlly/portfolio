import profile from '../assets/images/profile.png'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="
        min-h-[70vh]
        md:min-h-screen

        flex
        items-center
        justify-center

        px-5
        pt-20
        md:pt-28
        pb-8
        md:pb-0

        transition-colors
        duration-500
      "
    >
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
              decoding="async"
              width="224"
              height="224"
              className="
                w-28
                h-28
                sm:w-36
                sm:h-36
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
              mt-5
              md:mt-8

              text-3xl
              sm:text-4xl
              md:text-7xl

              font-extrabold
              leading-tight

              gradient-text
            "
          >
            Linderlly Santana
          </h1>

          <p
            className="
              mt-3

              max-w-xl

              text-sm
              sm:text-base
              md:text-2xl

              leading-relaxed

              text-slate-600
              dark:text-slate-300

              transition-colors
              duration-500
            "
          >
            Engenheiro de Software
          </p>

          <p
            className="
              mt-4

              max-w-2xl

              text-sm
              md:text-lg

              leading-7

              text-slate-500
              dark:text-slate-400

              transition-colors
              duration-500
            "
          >
            Desenvolvedor Full Stack especializado em aplicações web modernas,
            responsivas e escaláveis utilizando React, JavaScript, Firebase,
            Node.js e outras tecnologias do ecossistema web.
          </p>
        </motion.div>
      </div>
    </section>
  )
}