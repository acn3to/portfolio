import Link from 'next/link'
import React from 'react'
import Lottie from 'react-lottie'
import aboutAnimation from '../lotties/aboutAnimation.json'

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 pt-20"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#803C90]">
            Sobre
          </p>
          <h2 className="py-4">Quem eu sou</h2>
          <p className="py-2 text-gray-600">
            Louco por viagens, pai, às vezes DJ, apaixonado por tecnologia e
            entusiasta das infinitas possibilidades abertas por ela. Desde
            criança já me aventurava no desenvolvimento de servidores
            alternativos para jogos de RPG online. Passei a estudar o design e
            criação de conteúdos digitais em 2011, quando me especializei em Web
            Design e ilustração vetorial com Adobe Illustrator. Atualmente, com
            foco em Desenvolvimento Web Front-End, me especializo em React e
            todo seu ecossistema enquanto me graduo no curso tecnólogo em
            Análise e Desenvolvimento de Sistemas e no curso técnico em
            Desenvolvimento de Sistemas.
            <p className="py-2 text-gray-600">
              Quero desenvolver ideias e torná-las reais, com a possibilidade de
              construir aplicações utilizáveis ​​e escaláveis ​​que façam a
              diferença no mundo.
            </p>
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Confira alguns dos meus projetos
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 flex items-center justify-center p-4 hover:scale-110 ease-in-out duration-300">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  )
}

export default About
