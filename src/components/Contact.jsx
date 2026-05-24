import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-20 px-4 md:px-5 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="
          glass rounded-3xl
          p-6 md:p-14
          border border-slate-800
          text-center
          flex flex-col items-center justify-center
        ">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Contato
          </h2>

          <p className="
            w-full max-w-2xl
            text-gray-400
            text-sm md:text-xl
            leading-7 md:leading-8
            text-center
            mb-8 md:mb-12
          ">
            Vamos transformar ideias em projetos modernos, profissionais e eficientes.
            <br className="hidden md:block" />
            Entre em contato para trabalharmos juntos no seu próximo projeto.
          </p>

          <div className="
            w-full
            flex flex-col lg:flex-row
            justify-center items-center
            gap-4 md:gap-5
          ">
            <a
              href="mailto:linderllysantana22@gmail.com"
              className="
                w-full sm:w-[140px] md:w-[150px]
                h-14 md:h-16
                flex items-center justify-center gap-2 md:gap-3
                bg-cyan-500 hover:bg-cyan-400
                rounded-2xl
                font-semibold text-base md:text-lg
                transition-all duration-300
                hover:scale-105
              "
            >
              <FaEnvelope className="text-lg md:text-xl" />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/linderlly-santana/"
              target="_blank"
              rel="noreferrer"
              className="
                w-full sm:w-[140px] md:w-[150px]
                h-14 md:h-16
                flex items-center justify-center gap-2 md:gap-3
                bg-slate-800 hover:bg-slate-700
                rounded-2xl
                font-semibold text-base md:text-lg
                transition-all duration-300
                hover:scale-105
              "
            >
              <FaLinkedin className="text-lg md:text-xl" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Linderlly"
              target="_blank"
              rel="noreferrer"
              className="
                w-full sm:w-[140px] md:w-[150px]
                h-14 md:h-16
                flex items-center justify-center gap-2 md:gap-3
                bg-slate-800 hover:bg-slate-700
                rounded-2xl
                font-semibold text-base md:text-lg
                transition-all duration-300
                hover:scale-105
              "
            >
              <FaGithub className="text-lg md:text-xl" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}