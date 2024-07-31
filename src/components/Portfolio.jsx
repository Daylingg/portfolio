import React from 'react'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { projects } from './utils'

export const Portfolio = () => {
  return (
    <div className="max-w-[900px] mx-auto p-6 md:my-16 " id="portfolio">
      <Reveal>
        <h2 className="text-center text-3xl font-bold text-gray-200 mb-4">My Projects</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              imgUrl={project.img}
              description={project.description}
              previewUrl={project.link.site}
            />
          ))}
        </div>
      </Reveal>
    </div>
  )
}

/**{projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12 align-middle `}
        >
          <div className="w-1/2 md:w-1/2 p-4 ">
            <img src={project.img} alt={project.title} className=" w-50 h-50 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
            <p className=" text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.link.site}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                transition duration-300"
              >
                View Site
              </a>
            </div>
          </div>
        </div>

      ))} */
