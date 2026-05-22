import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Tecnologias
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition-all"
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