/**
 * Seção de projetos do portfólio
 * Exibe cards com projetos, imagens e links para demonstração
 * 
 * @component
 * @author Linderlly Santana
 */

import { useLanguage } from '../context/LanguageContext'
import quiz from '../assets/images/quiz.png'
import ecommerce from '../assets/images/ecommerce.png'
import memorygame from '../assets/images/memorygame.png'
import gerenciadorAlunos from '../assets/images/gerenciador_alunos.png'
import gerenciadorTarefas from '../assets/images/gerenciador_tarefas.png'

/**
 * Dados dos projetos
 */
const PROJECTS_DATA = [
  {
    id: 1,
    titleKey: 'projectsData.0.title',
    descriptionKey: 'projectsData.0.description',
    image: quiz,
    link: 'https://linderlly.github.io/site-educacional/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase']
  },
  {
    id: 2,
    titleKey: 'projectsData.1.title',
    descriptionKey: 'projectsData.1.description',
    image: ecommerce,
    link: 'https://linderlly.github.io/ecommerce/#/',
    tech: ['Vue.js', 'TypeScript', 'Tailwind']
  },
  {
    id: 3,
    titleKey: 'projectsData.2.title',
    descriptionKey: 'projectsData.2.description',
    image: memorygame,
    link: 'https://linderlly.github.io/memorygame/',
    tech: ['JavaScript', 'CSS', 'HTML5']
  },
  {
    id: 4,
    titleKey: 'projectsData.3.title',
    descriptionKey: 'projectsData.3.description',
    image: gerenciadorAlunos,
    link: 'https://github.com/Linderlly/gerenciador-alunos',
    tech: ['React Native', 'Firebase', 'Expo']
  },
  {
    id: 5,
    titleKey: 'projectsData.4.title',
    descriptionKey: 'projectsData.4.description',
    image: gerenciadorTarefas,
    link: 'https://github.com/Linderlly/gerenciador-tarefas',
    tech: ['Flutter', 'Firebase', 'Dart']
  }
]

/**
 * Componente ProjectCard - Card individual do projeto
 */
function ProjectCard({ project, t }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer noopener"
      className="
        group
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-lg
        border border-slate-200/50 dark:border-slate-800/50
        rounded-3xl overflow-hidden
        hover:border-cyan-400
        hover:-translate-y-2
        hover:shadow-2xl hover:shadow-cyan-500/10
        transition-all duration-500
        flex flex-col
      "
    >
      {/* Imagem com zoom no hover */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${t(project.titleKey)} - Projeto de portfólio`}
          loading="lazy"
          decoding="async"
          width="800"
          height="450"
          className="
            h-44 md:h-56 w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-4 md:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="
            text-lg md:text-2xl font-bold mb-2 md:mb-3 leading-tight
            text-slate-900 dark:text-white
          ">
            {t(project.titleKey)}
          </h3>
          <p className="
            text-slate-700 dark:text-slate-300
            leading-6 md:leading-7 text-xs md:text-base
          ">
            {t(project.descriptionKey)}
          </p>
        </div>

        {/* Badges de tecnologias */}
        <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-xs
                bg-cyan-500/10 text-cyan-600 dark:text-cyan-400
                rounded-full border border-cyan-500/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="
          mt-4 md:mt-6
          bg-cyan-500 hover:bg-cyan-400
          hover:scale-105
          py-2.5 md:py-3
          rounded-xl
          text-sm md:text-base
          font-semibold
          text-white
          shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
          transition-all duration-300
        ">
          {t('projects.viewProject')}
        </button>
      </div>
    </a>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section 
      id="projects" 
      className="px-4 md:px-5 py-10 md:py-16"
    >
      <div className="container-custom">
        <h2 className="
          text-center font-bold
          text-3xl md:text-5xl
          mb-8 md:mb-12
          text-slate-900 dark:text-white
        ">
          {t('projects.title')}
        </h2>

        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-5 md:gap-8
        ">
          {PROJECTS_DATA.map(project => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}