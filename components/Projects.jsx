import React from 'react'

import cerveshopImg from '../public/assets/projects/cerveshopImg.jpg'
import dragonImg from '../public/assets/projects/dragonImg.jpg'
import studytimerImg from '../public/assets/projects/studytimerImg.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#803C90]">
          Projetos
        </p>
        <h2 className="py-4">O que eu construí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Cerve Shop"
            technology="React + TypeScript"
            backgroundImg={cerveshopImg}
            projectUrl="/"
          />
          <ProjectItem
            title="Study Timer"
            technology="React + TypeScript"
            backgroundImg={studytimerImg}
            projectUrl="/"
          />
          <ProjectItem
            title="Dragon Ball Login UI"
            technology="HTML + CSS + JavaScript"
            backgroundImg={dragonImg}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
