export default function Contact() {
  return (
    <section className="py-24 px-6">

      <div className="container-custom">

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-10
            md:p-16
            text-center
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
              text-gray-400
              text-lg
              leading-8
              max-w-2xl
              mx-auto
              mb-10
            "
          >
            Vamos trabalhar juntos no seu próximo projeto
            ou oportunidade profissional.
          </p>

          <a
            href="mailto:seuemail@gmail.com"
            className="
              inline-flex
              items-center
              justify-center
              bg-cyan-500
              hover:bg-cyan-400
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition-all
            "
          >
            Entrar em Contato
          </a>

        </div>

      </div>

    </section>
  )
}