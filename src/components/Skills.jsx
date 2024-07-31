import React from 'react'
import {
  DiCss3,
  DiHtml5,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiNodejs,
  DiPhp,
  DiMongodb,
  DiFirebase,
  DiMysql,
  DiReact,
} from 'react-icons/di'
import { Reveal } from './Reveal'

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className="text-orange-600" /> },
      { name: 'CSS', icon: <DiCss3 className="text-blue-600" /> },
      { name: 'Sass', icon: <DiSass className="text-pink-600" /> },
      { name: 'Bootstrap', icon: <DiBootstrap className="text-purple-600" /> },
      { name: 'Javascript', icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: 'React', icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node', icon: <DiNodejs className="text-green-500" /> },
      { name: 'PHP', icon: <DiPhp className="text-red-400" /> },
      { name: 'Mongodb', icon: <DiMongodb className="text-green-600" /> },
      { name: 'Firebase', icon: <DiFirebase className="text-yellow-300" /> },
      { name: 'Mysql', icon: <DiMysql className="text-blue-400" /> },
      { name: 'React', icon: <DiReact className="text-blue-500" /> },
    ],
  },
]

export const Skills = () => {
  return (
    <div className="max-w-[600px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-6 md:py-8" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8 ">
          I worked on varius frontend and fullstack projects. These are the skills I've worked with
          {/* <a href="#" className="underline">
            them
          </a> */}
        </p>
        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
      "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 
          shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
