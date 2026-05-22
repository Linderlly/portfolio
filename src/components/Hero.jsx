import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from '../assets/images/profile.png'

<div className="flex justify-center gap-6 mt-8 text-3xl">

  <a href="#">
    <FaGithub />
  </a>

  <a href="#">
    <FaLinkedin />
  </a>

</div>

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900">
      
      <div className="text-center">

        <img
          src={profile}
          alt="Minha Foto"
          className="w-52 h-52 rounded-full mx-auto border-4 border-cyan-400"
        />

        <h1 className="text-5xl font-bold mt-8">
          Seu Nome
        </h1>

        <p className="text-gray-400 mt-4 text-xl">
          Desenvolvedor Full Stack
        </p>

      </div>

    </section>
  )
}