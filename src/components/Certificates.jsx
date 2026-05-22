import certificado1 from '../assets/certificates/certificado1.pdf'
import certificado2 from '../assets/certificates/certificado2.pdf'
import certificado3 from '../assets/certificates/certificado3.pdf'
import certificado4 from '../assets/certificates/certificado4.pdf'

import certificado1Img from '../assets/images/certificado1.png'
import certificado2Img from '../assets/images/certificado2.png'
import certificado3Img from '../assets/images/certificado3.png'
import certificado4Img from '../assets/images/certificado4.png'

import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'

const certificates = [
  {
    title: 'Programação de sistemas da informação',

    description:
      'Programação I e Modelagem de sistemas',

    image: certificado1Img,

    pdf: certificado1,
  },

  {
    title: 'Gerência de projetos de T.I',

    description:
      'Medidas de esforço de desenvolvimento de Software e Gestão de projetos para T.I',

    image: certificado2Img,

    pdf: certificado2,
  },

  {
    title: 'Direitos e Privacidade dos usuários',

    description:
      'Gestão de segurança da informação e Linhas de produtos de Software',

    image: certificado3Img,

    pdf: certificado3,
  },

  {
    title: 'Aplicação melhorada contínua',

    description:
      'Modelagem de dados, Modelagem de Sistemas e Métodos Ágeis',

    image: certificado4Img,

    pdf: certificado4,
  },
]

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 px-6"
    >

      <div className="container-custom">

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            mb-16
          "
        >
          Certificados
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className="
                bg-slate-900/70
                backdrop-blur-lg
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition-all
                duration-500
                flex
                flex-col
              "
            >

              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    h-56
                    w-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

              </div>

              <div
                className="
                  p-7
                  flex
                  flex-col
                  flex-1
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                  "
                >
                  {certificate.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-7
                    text-base
                    flex-1
                  "
                >
                  {certificate.description}
                </p>

                <div
                  className="
                    flex
                    gap-4
                    mt-8
                  "
                >

                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-3
                      bg-red-500
                      hover:bg-red-400
                      py-3
                      rounded-xl
                      font-semibold
                      transition-all
                    "
                  >

                    <FaFilePdf />

                    PDF

                  </a>

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-3
                      bg-cyan-500
                      hover:bg-cyan-400
                      py-3
                      rounded-xl
                      font-semibold
                      transition-all
                    "
                  >

                    <FaExternalLinkAlt />

                    Visualizar

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}