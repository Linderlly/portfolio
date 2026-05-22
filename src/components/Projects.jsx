export default function Projects() {
  return (
    <section className="py-32 px-6">

      <h2 className="text-4xl font-bold text-center mb-20">
        Projetos
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Projeto 1
          </h3>

          <p className="text-gray-400">
            Descrição do projeto.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Projeto 2
          </h3>

          <p className="text-gray-400">
            Descrição do projeto.
          </p>
        </div>

      </div>

    </section>
  )
}