import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaDiscord, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            DESENVOLVENDO IDEIAS, TORNANDO-AS REAIS!
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, eu sou <span className="text-[#7F3B8F]">Arnaldo Neto</span>
          </h1>
          <h1 className="py-4 text-gray-700">Um Desenvolvedor Web Front-End</h1>
          <p className="py-4 text-gray-600 max-w-[80%] m-auto">
            Sou um desenvolvedor web front-end especializado na construção e
            design de conteúdos digitais. Atualmente estou focado em construir
            aplicações web responsivas utilizando o ecossistema React.
          </p>
          <p className="py-4 text-gray-600 max-w-[80%] m-auto">
            Quero desenvolver ideias e torná-las reais, com a possibilidade de
            construir aplicações utilizáveis ​​e escaláveis ​​que façam a
            diferença no mundo.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaDiscord />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
