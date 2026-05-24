import quiz from '../assets/images/quiz.png'
import ecommerce from '../assets/images/ecommerce.png'
import memorygame from '../assets/images/memorygame.png'
import gerenciador_alunos from '../assets/images/gerenciador_alunos.png'
import gerenciador_tarefas from '../assets/images/gerenciador_tarefas.png'

const projects = [
  {
    title: 'Quiz Educacional',
    description: 'Plataforma educacional interativa desenvolvida com HTML, CSS, JavaScript e Firebase.',
    image: quiz,
    link: 'https://linderlly.github.io/site-educacional/',
  },
  {
    title: 'E-Commerce',
    description: 'Projeto de comércio eletrônico criado com Vue e TypeScript durante Hackathon Full Stack.',
    image: ecommerce,
    link: 'https://linderlly.github.io/ecommerce/#/',
  },
  {
    title: 'Jogo da Memória',
    description: 'Game responsivo desenvolvido para praticar JavaScript, HTML e CSS com sistema de pontuação.',
    image: memorygame,
    link: 'https://linderlly.github.io/memorygame/',
  },
  {
    title: 'Gerenciador de Alunos',
    description: 'Aplicativo mobile desenvolvido com React Native para gerenciamento escolar.',
    image: gerenciador_alunos,
    link: 'https://github.com/Linderlly/gerenciador-alunos',
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicativo criado com Flutter e Firebase para organização de tarefas em tempo real.',
    image: gerenciador_tarefas,
    link: 'https://github.com/Linderlly/gerenciador-tarefas',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 px-4 md:px-5">
      <div className="container-custom">
        <h2 className="
          text-3xl md:text-5xl
          font-bold text-center
          mb-8 md:mb-16
        ">
          Projetos
        </h2>

        <div className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-5 md:gap-8
        ">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-slate-900/70 backdrop-blur-lg
                border border-slate-800
                rounded-3xl overflow-hidden
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-2xl hover:shadow-cyan-500/10
                transition-all duration-500
                flex flex-col
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-36 md:h-56
                    w-full object-cover
                    hover:scale-110
                    transition-transform duration-700
                  "
                />
              </div>

              <div className="
                p-4 md:p-7
                flex flex-col flex-1 justify-between
              ">
                <div>
                  <h3 className="
                    text-lg md:text-2xl
                    font-bold
                    mb-2 md:mb-3
                    leading-tight
                  ">
                    {project.title}
                  </h3>

                  <p className="
                    text-gray-400
                    leading-6 md:leading-7
                    text-xs md:text-base
                  ">
                    {project.description}
                  </p>
                </div>

                <button className="
                  mt-4 md:mt-6
                  bg-cyan-500 hover:bg-cyan-400
                  hover:scale-105
                  py-2.5 md:py-3
                  rounded-xl
                  text-sm md:text-base
                  font-semibold
                  transition-all duration-300
                ">
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