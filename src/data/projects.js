/**
 * projects.js - Dados dos projetos
 * 
 * @author Linderlly Santana
 */

// Importação das imagens dos projetos
import quiz from '../assets/images/quiz.png'
import ecommerce from '../assets/images/ecommerce.png'
import memorygame from '../assets/images/memorygame.png'
import gerenciadorAlunos from '../assets/images/gerenciador_alunos.png'
import gerenciadorTarefas from '../assets/images/gerenciador_tarefas.png'
import campeonatomanager from '../assets/images/campeonato_manager.png'

/**
 * Lista de projetos
 */
export const projects = [
  {
    id: 1,
    titleKey: 'projectsData.0.title',
    descriptionKey: 'projectsData.0.description',
    image: quiz,
    link: 'https://linderlly.github.io/site-educacional/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    category: 'web',
    featured: true
  },
  {
    id: 2,
    titleKey: 'projectsData.1.title',
    descriptionKey: 'projectsData.1.description',
    image: ecommerce,
    link: 'https://linderlly.github.io/ecommerce/#/',
    tech: ['Vue.js', 'TypeScript', 'Tailwind'],
    category: 'web',
    featured: true
  },
  {
    id: 3,
    titleKey: 'projectsData.2.title',
    descriptionKey: 'projectsData.2.description',
    image: memorygame,
    link: 'https://linderlly.github.io/memorygame/',
    tech: ['JavaScript', 'CSS', 'HTML5'],
    category: 'web',
    featured: true
  },
  {
    id: 4,
    titleKey: 'projectsData.3.title',
    descriptionKey: 'projectsData.3.description',
    image: gerenciadorAlunos,
    link: 'https://github.com/Linderlly/gerenciador-alunos',
    tech: ['React Native', 'Firebase', 'Expo'],
    category: 'mobile',
    featured: false
  },
  {
    id: 5,
    titleKey: 'projectsData.4.title',
    descriptionKey: 'projectsData.4.description',
    image: gerenciadorTarefas,
    link: 'https://github.com/Linderlly/gerenciador-tarefas',
    tech: ['Flutter', 'Firebase', 'Dart'],
    category: 'mobile',
    featured: false
  },
  {
  id: 6,
  titleKey: 'projectsData.5.title',
  descriptionKey: 'projectsData.5.description',
  image: campeonatomanager,
  link: 'https://linderlly.github.io/campeonato_manager/',
  tech: ['React Native', 'JavaScript', 'Vite'],
  category: 'web',
  featured: false
}
]