const skills = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Node.js', 'Tailwind', 'Firebase', 'Git',
  'MySQL', 'PostgreSQL', 'Oracle', 'SQL Server',
  'Angular', 'Python', 'C#', 'Typescript',
  'Dart', 'Flutter',
]

export default function Skills() {
  return (
    <section id="skills" style={{ paddingTop: '10px', paddingBottom: '10px' }} className="px-4 md:px-6">
      <div className="container-custom">
        <h2 style={{ 
          fontSize: 'clamp(1.875rem, 4vw, 3rem)', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Tecnologias
        </h2>

        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-4 md:gap-6
        ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border border-slate-800
                rounded-2xl
                p-5 md:p-8
                text-center
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <h3 className="font-semibold text-sm md:text-lg">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}