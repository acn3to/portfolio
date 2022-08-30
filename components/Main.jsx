import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center pt-16 2xl:pt-20">
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
            Especializado na construção e design de conteúdos digitais, focado
            em desenvolver aplicações web responsivas e experiências que tornem
            a vida das pessoas mais simples.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/arnaldo-n3to/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://discordapp.com/users/366398902846619649/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaDiscord />
              </div>
            </a>
            <a
              href="https://github.com/acn3to/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.instagram.com/acn3to/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
            <a
              href="mailto:costanetoow@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
