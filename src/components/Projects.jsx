import quiz from '../assets/images/quiz.png'
import ecommerce from '../assets/images/ecommerce.png'
import memorygame from '../assets/images/memorygame.png'
import gerenciador_alunos from '../assets/images/gerenciador_alunos.png'
import gerenciador_tarefas from '../assets/images/gerenciador_tarefas.png'


const projects = [
  {
    title: 'Quiz Educacional',

    description:
      'Site educacional voltado para aprendizado e interatividade, utilizando tecnologias como HTML, CSS, JavaScript, Firebase e outras ferramentas do ecossistema web.',

    image: quiz,

    link: 'https://linderlly.github.io/site-educacional/',
  },
  {
    title: 'E-Commerce',
   description:
      'Site de comércio eletrônico desenvolvido durante o Hackathon do curso de FullStack, utilizando Vue e Typescript, com foco em design moderno e experiência do usuário otimizada.',

    image: ecommerce,

    link: 'https://linderlly.github.io/ecommerce/#/',
  },
  {
    title: 'Jogo da Memória',
   description:
      'Jogo interativo de memória desenvolvido para testar meus conhecimentos em JavaScript, HTML e CSS, com design responsivo e funcionalidades de pontuação.',

    image: memorygame,

    link: 'https://linderlly.github.io/memorygame/',
  },
  {
    title: 'Gerenciador de Alunos',
   description:
      'Trablho de extensão da faculdade desenvolvido para gerenciar informações de alunos de uma escola, utilizando Javascript, juntamento com o Expo React Native, para criar um aplicativo móvel com funcionalidades de cadastro, consulta e atualização de dados dos alunos.',

    image: gerenciador_alunos,

    link: 'https://github.com/Linderlly/gerenciador-alunos',
  }
  ,
  {
    title: 'Gerenciador de Tarefas',
   description:
      'Aplicativo de gerenciamento de tarefas desenvolvido para organizar e acompanhar atividades diárias, utilizando Dart, Flutter e Firebase para sincronização em tempo real, com funcionalidades de criação, edição e exclusão de tarefas.',

    image: gerenciador_tarefas,

    link: 'https://github.com/Linderlly/gerenciador-tarefas',
  }
 

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