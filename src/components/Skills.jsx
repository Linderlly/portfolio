/**
 * Seção de habilidades técnicas
 * Exibe um grid com as tecnologias dominadas
 * 
 * @component
 * @author Linderlly Santana
 */

import { useLanguage } from '../context/LanguageContext'

const SKILLS_DATA = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'C#', category: 'Backend' },
  { name: 'Dart', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Oracle', category: 'Database' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'Git', category: 'DevOps' }
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section 
      id="skills" 
      className="px-4 md:px-6 py-10 md:py-16"
    >
      <div className="container-custom">
        <h2 className="
          text-center font-bold
          text-3xl md:text-5xl
          mb-8 md:mb-12
          text-slate-900 dark:text-white
        ">
          {t('skills.title')}
        </h2>

        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-4 md:gap-6
        ">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-sm
                border border-slate-200/50 dark:border-slate-800/50
                rounded-2xl
                p-5 md:p-8
                text-center
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-xl hover:shadow-cyan-500/10
                transition-all duration-300
                cursor-default
              "
            >
              <span className="
                text-xs text-cyan-600 dark:text-cyan-400/60 uppercase tracking-wider
                block mb-2
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              ">
                {skill.category}
              </span>
              <h3 className="
                font-semibold text-sm md:text-lg
                text-slate-800 dark:text-white
              ">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}