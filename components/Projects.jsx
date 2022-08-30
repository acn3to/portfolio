import React from 'react'

import cerveshopImg from '../public/assets/projects/cerveshopImg.jpg'
import dragonImg from '../public/assets/projects/dragonImg.jpg'
import f4lifeImg from '../public/assets/projects/f4lifeImg.jpg'
import studytimerImg from '../public/assets/projects/studytimerImg.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-10">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="text-xl tracking-widest uppercase text-[#803C90]">
          Projetos
        </p>
        <h2 className="py-4">O que eu construí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Cerve Shop"
            backgroundImg={cerveshopImg}
            projectUrl="/cerveshop"
          />
          <ProjectItem
            title="Study Timer App"
            backgroundImg={studytimerImg}
            projectUrl="/studytimer"
          />
          <ProjectItem
            title="F4Life Landing Page"
            backgroundImg={f4lifeImg}
            projectUrl="/f4life"
          />
          <ProjectItem
            title="Dragon Ball Login UI"
            backgroundImg={dragonImg}
            projectUrl="/dragonball"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
