const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Tailwind',
  'Firebase',
  'Git',
  'MySQL',
  'PostgreSQL',
  'Oracle',
  'SQL Server',
  'Angular',
  'Python',
  'C#',
  'Typescript',
  'Oracle',
  'Dart',
  'Flutter',
]

export default function Skills() {
  return (
    <section className="py-24 px-6">

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
          Tecnologias
        </h2>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-8
                text-center
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all
              "
            >

              <h3 className="font-semibold text-lg">
                {skill}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}