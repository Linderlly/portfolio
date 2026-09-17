/**
 * Dados das experiências profissionais e acadêmicas
 * 
 * @author Linderlly Santana
 */

export const experiences = [
    {
        id: 1,
        type: 'work',
        period: '09/2024 - 04/2026',
        company: 'Microlins F1 Cursos',
        role: {
            pt: 'Instrutor de Informática',
            en: 'Computer Instructor'
        },
        location: {
            pt: 'Manaus - AM',
            en: 'Manaus - AM'
        },
        description: {
            pt: 'Ensino de Desenvolvimento Web e Desenvolvimento Mobile; \nOrientação de alunos durante atividades práticas de programação; \nDesenvolvimento e aplicação de exercícios e avaliações; \nSuporte técnico durante atividades práticas; \nDesenvolvimento de materiais e conteúdos relacionados à tecnologia.',
            en: 'Teaching Web Development and Mobile Development; \nGuiding students during practical programming activities; \nDeveloping and applying exercises and assessments; \nProviding technical support during practical activities; \nDeveloping materials and content related to technology.'
        },
       highlights: {
      pt: [
        'Planejamento e condução de aulas',
        'Suporte acadêmico personalizado',
        'Desenvolvimento de material didático',
        'Acompanhamento do progresso dos alunos'
      ],
      en: [
        'Lesson planning and delivery',
        'Personalized academic support',
        'Teaching material development',
        'Student progress monitoring'
      ]
    },
        technologies: ['HTML', 'CSS', 'JavaScript', 'Excel', 'Power BI', 'Python'],
        logo: null
    },
    {
        id: 2,
        type: 'work',
        period: '05/2024 - 08/2026',
        company: 'Microlins F1 Cursos',
        role: {
            pt: 'Estágio Monitoramento de Sala',
            en: 'Room Monitoring Internship'
        },
        location: {
            pt: 'Manaus - AM',
            en: 'Manaus - AM'
        },
        description: {
            pt: 'Auxílio aos instrutores durante as aulas; \nSuporte aos alunos nas atividades acadêmicas; \nCorreção de provas e exercícios; \nDesenvolvimento de avaliações voltadas à área de tecnologia; \nApoio em manutenção básica de computadores; \nOrganização dos ambientes de aprendizagem.',
            en: 'Assisting instructors during classes; \nGuiding students during practical programming activities; \nCorrecting exams and exercises; \nDeveloping assessments focused on the technology field; \nProviding support in basic computer maintenance; \nOrganizing learning environments.'
        },
       highlights: {
      pt: [
        'Organização do ambiente de trabalho',
        'Montagem e manutenção de computadores',
        'Prestação de suporte técnico e operacional em nível interno',
        'Verificação do progresso dos alunos'
      ],
      en: [
        'Organization of the work environment',
        'Computer assembly and maintenance',
        'Technical and operational support at the internal level',
        'Monitoring student progress'
      ]
    },
        technologies: ['Organização', 'Suporte', 'Montagem e Manutenção', 'Análise de Dados',],
        logo: null
    },
    {
        id: 3,
        type: 'education',
        period: '02/2025 - 09/2025',
        company: 'Universidade Estácio de Sá',
        role: {
            pt: 'Trabalho de Extensão',
            en: 'Extension Work'
        },
        location: {
            pt: 'Manaus - AM',
            en: 'Manaus - AM'
        },
        description: {
            pt: 'O Gerenciador de Alunos é uma aplicação desenvolvida para centralizar e simplificar o controle de informações acadêmicas, permitindo o cadastro, consulta, atualização e exclusão de dados dos estudantes por meio de operações CRUD. O sistema facilita a organização de informações como dados pessoais, turmas, cursos e registros acadêmicos, contribuindo para a digitalização e eficiência dos processos administrativos escolares. \n O projeto utiliza tecnologias modernas no front-end, back-end e banco de dados, proporcionando uma aplicação responsiva, estruturada e escalável. Além das funcionalidades principais, demonstra conhecimentos em arquitetura de software, modelagem e persistência de dados, integração entre camadas, regras de negócio e boas práticas de desenvolvimento, aplicando conceitos relevantes da Engenharia de Software.',
            en: 'The Student Manager is an application developed with the aim of simplifying the control and administration of academic information, offering a centralized platform for registration, consultation, updating, and management of student data. The system was designed to meet common needs of educational institutions, allowing CRUD (Create, Read, Update, and Delete) operations, as well as facilitating the organization of information such as personal data, classes, courses, and academic records. The solution contributes to the digitization of administrative processes, reducing reliance on manual controls and increasing efficiency in school management. For the development of the project, modern technologies were used to ensure performance, scalability, and a good user experience. In the front-end, interface resources were applied to provide intuitive and responsive navigation. In the back-end, business rules were implemented, along with database integration and mechanisms for information persistence. The database is responsible for the secure and structured storage of student records. In addition to the main functionalities, the project also demonstrates knowledge in software architecture, database modeling, integration between application layers, data manipulation, and application of best development practices, showcasing important competencies in the field of Software Engineering.'},
       highlights: {
      pt: [
        'Levantamento de requisitos e análise de necessidades do usuário',
        'Planejamento e desenvolvimento de funcionalidades do sistema',
        'Usabilidade e experiência do usuário',
        'CRUD (Create, Read, Update e Delete) de informações acadêmicas',
      ],
      en: [
        'Requirement gathering and user need analysis',
        'Planning and development of system functionalities',
        'Usability and user experience',
        'CRUD (Create, Read, Update, and Delete) of academic information',
      ]
    },
        technologies: ['React', 'Vue.JS', 'Firebase', 'TypeScript'],
        logo: null
    },
]

export const experienceTypes = {
  work: {
    pt: 'Experiência Profissional',
    en: 'Work Experience'
  },
  education: {
    pt: 'Experiência Acadêmica',
    en: 'Academic Experience'
  },
  freelance: {
    pt: 'Freelance',
    en: 'Freelance'
  }
}