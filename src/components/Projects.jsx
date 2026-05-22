import quiz from '../assets/images/quiz.png'


const projects = [
  {
    title: 'Quiz Educacional',

    description:
      'Site educacional voltado para aprendizado e interatividade, utilizando tecnologias como HTML, CSS, JavaScript, Firebase e outras ferramentas do ecossistema web.',

    image: quiz,

    link: 'https://linderlly.github.io/site-educacional/',
  },

]

export default function Projects() {
  return (
    <section
      id="projects"
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
          Projetos
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {projects.map((project, index) => (

            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-slate-900/70
                backdrop-blur-lg
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                hover:-translate-y-3
                hover:border-cyan-400
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
                  src={project.image}
                  alt={project.title}
                  className="
                    h-56
                    w-full
                    object-cover
                    hover:scale-110
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
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      mb-4
                      leading-tight
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-gray-400
                      leading-7
                      text-base
                    "
                  >
                    {project.description}
                  </p>

                </div>

                <button
                  className="
                    mt-8
                    bg-cyan-500
                    hover:bg-cyan-400
                    hover:scale-105
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Acessar Projeto
                </button>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}