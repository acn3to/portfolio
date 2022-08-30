import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Lottie from 'react-lottie'
import { toast, ToastContainer } from 'react-toastify'

import contactAnimation from '../lotties/contactAnimation.json'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const router = useRouter()

  async function onFormSubmit(data) {
    let config = {
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    try {
      const response = await axios(config)
      if (response.status == 200) {
        toast.success('Email enviado com sucesso! 🚀', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        })
        reset()
        router.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div id="contact" className="w-full lg:h-screen pt-20">
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <p className="text-xl tracking-widest uppercase text-[#803C90]">
          Contato
        </p>
        <h2 className="py-4">Fale comigo</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Lottie options={defaultOptions} height={200} width={300} />
              </div>
              <div>
                <h2 className="py-2">Arnaldo Neto</h2>
                <p>Desenvolvedor Front-End</p>
                <p className="py-4">
                  Estou disponível para freelances, trabalho em tempo integral
                  ou estágio. Conecte-se às minhas redes e vamos bater um papo.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Entre em contato</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/arnaldo-n3to/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
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

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm py-2">Nome</label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        errors.name ? 'ring-2 ring-red-500' : null
                      }`}
                      type="text"
                      {...register('name', { required: true })}
                    />
                    <span className="text-[red]">
                      {errors.name?.type === 'required' &&
                        'Por favor, preencha o nome'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm py-2">
                      Número de telefone (Opcional)
                    </label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        errors.number ? 'ring-2 ring-red-500' : null
                      }`}
                      type="tel"
                      {...register('number')}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm py-2">Email</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.email ? 'ring-2 ring-red-500' : null
                    }`}
                    type="text"
                    {...register('email', {
                      required: 'Por favor, preencha o email',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Digite um endereço de email válido',
                      },
                    })}
                  />
                  <span className="text-[red]">{errors?.email?.message}</span>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm py-2">Assunto</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.name ? 'ring-2 ring-red-500' : null
                    }`}
                    type="text"
                    {...register('subject', { required: true })}
                  />
                  <span className="text-[red]">
                    {errors.subject?.type === 'required' &&
                      'Por favor, preencha o assunto'}
                  </span>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm py-2">Mensagem</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.message ? 'ring-2 ring-red-500' : null
                    }`}
                    rows="10"
                    {...register('message', { required: true })}
                  ></textarea>{' '}
                  <span className="text-[red]">
                    {errors.message?.type === 'required' &&
                      'A mensagem não pode ser vazia'}
                  </span>
                </div>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <button
                  onClick={onFormSubmit}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#803C90]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
