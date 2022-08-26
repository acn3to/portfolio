import React from 'react'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#803C90]">
            Sobre
          </p>
          <h2 className="py-4">Quem eu sou</h2>
          <p className="py-2 text-gray-600">
            // Não sou apenas um desenvolvedor qualquer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut modi
            aliquid dignissimos neque enim voluptatibus labore odio. Magnam
            tempora libero cupiditate quae, dicta saepe sint incidunt. Ipsa
            illum delectus esse.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut modi
            aliquid dignissimos neque enim voluptatibus labore odio. Magnam
            tempora libero cupiditate quae, dicta saepe sint incidunt. Ipsa
            illum delectus esse.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Confira alguns dos meus projetos
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1620748229976-a78c7e0932a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default About
