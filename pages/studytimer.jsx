import React from 'react'
import studytimerImg from '../public/assets/projects/studytimerImg.jpg'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const studytimer = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={studytimerImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Study Timer</h2>
          <h3>React / TypeScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#803C90]">
            Projeto
          </p>
          <h2 className="py-4">Visão Geral</h2>
          <p>
            O Study Timer trata-se de um cronômetro para atividades que podem
            ser adicionadas pelo usuário. O objetivo desse projeto foi entender
            e pôr em prática os conceitos de Componentização, Props e State em
            React, e a utilização dos hooks useState e useEffect.
          </p>
          <a
            href="https://study-timer.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/acn3to/study-timer"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Código</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Voltar</p>
        </Link>
      </div>
    </div>
  )
}

export default studytimer
