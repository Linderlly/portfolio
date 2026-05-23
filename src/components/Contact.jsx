import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

export default function Contact() {

  return (

    <section
      id="contact"
      className="
        w-full
        py-24
        px-5
        flex
        justify-center
      "
    >

      <div
        className="
          w-full
          max-w-6xl
        "
      >

        <div
          className="
            glass
            rounded-3xl
            p-8
            md:p-14
            border
            border-slate-800
            text-center
            flex
            flex-col
            items-center
            justify-center
          "
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-6
            "
          >
            Contato
          </h2>

          <p
            className="
              w-full
              max-w-2xl
              text-gray-400
              text-base
              md:text-xl
              leading-8
              text-center
              mb-12
            "
          >
            Vamos transformar ideias em projetos
            modernos, profissionais e eficientes.

            Entre em contato para trabalharmos juntos
            no seu próximo projeto.
          </p>

          <div
            className="
              w-full
              flex
              flex-col
              lg:flex-row
              justify-center
              items-center
              gap-5
            "
          >

            <a
              href="mailto:linderllysantana22@gmail.com"
              className="
                w-full
                sm:w-[150px]
                h-16

                flex
                items-center
                justify-center
                gap-3

                bg-cyan-500
                hover:bg-cyan-400

                rounded-2xl

                font-semibold
                text-lg

                transition-all
                duration-300

                hover:scale-105
              "
            >

              <FaEnvelope className="text-xl" />

              <span>
                Email
              </span>

            </a>

            <a
              href="https://www.linkedin.com/in/linderlly-santana/"
              target="_blank"
              rel="noreferrer"
              className="
                w-full
                sm:w-[150px]
                h-16

                flex
                items-center
                justify-center
                gap-3

                bg-slate-800
                hover:bg-slate-700

                rounded-2xl

                font-semibold
                text-lg

                transition-all
                duration-300

                hover:scale-105
              "
            >

              <FaLinkedin className="text-xl" />

              <span>
                LinkedIn
              </span>

            </a>

            <a
              href="https://github.com/Linderlly"
              target="_blank"
              rel="noreferrer"
              className="
                w-full
                sm:w-[150px]
                h-16

                flex
                items-center
                justify-center
                gap-3

                bg-slate-800
                hover:bg-slate-700

                rounded-2xl

                font-semibold
                text-lg

                transition-all
                duration-300

                hover:scale-105
              "
            >

              <FaGithub className="text-xl" />

              <span>
                GitHub
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}