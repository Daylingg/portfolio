import React from 'react'
import { FaGithubSquare, FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Daylin</h3>
        <div className=" flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/daylingg" target="_blank" rel="noreferrer">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/daylin-garcia-071018193/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <p className="text-gray-400">@2024 Daylin</p>
    </div>
  )
}
