import React from 'react'
import { AiFillChrome } from 'react-icons/ai'

export const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="group relative  rounded-t-xl overflow-hidden mb-4 ">
      <div
        className="h-52 w-13 md:h-72 md:w-13 flex items-center justify-center"
        // style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <img src={imgUrl} alt={title} className="object-contain h-full w-full" />
        <div
          className="absolute inset-0 items-center justify-center bg-[#181818]
        bg-opacity-0  hidden group-hover:flex transition-all duration-500 group-hover:bg-opacity-80"
        >
          <a
            href={previewUrl}
            target="_blank"
            rel="noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] 
      hover:border-white group/link"
          >
            {/* <Link
            to={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] 
      hover:border-white group/link"
          > */}
            <AiFillChrome
              className="h-10 w-10 text-[#adb7be] cursor-pointer absolute top-1/2 left-1/2 
         transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
            />
            {/* </Link> */}
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl  bg-purple-900/20 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">
          <span className=" group-hover:text-white">{title}</span>
        </h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  )
}
