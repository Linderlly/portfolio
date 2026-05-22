export default function Certificates() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Certificados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Desenvolvimento Web
            </h3>

            <p className="text-gray-400">
              Certificação em HTML, CSS e JavaScript.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              React Avançado
            </h3>

            <p className="text-gray-400">
              Construção de aplicações modernas com React.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}