import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import profilepic from '../assets/fotPort2.png'
import { ShinyEffect } from './ShinyEffect'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di'
import { motion } from 'framer-motion'
import Resume from './CVDay.pdf'

export const About = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative " id="about">
      <div className="grid px-2 md:grid-cols-2 place-items-center gap-8 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hello, I am
            <br />
            <TypeAnimation
              sequence={['Daylin', 2000, 'Fullstack Dev', 1000, 'Frontend Dev', 1000]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-purple-400 text-4xl md:text-5xl italic mb-4"
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className=" text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg  mb-4"
          >
            I am a passionate fullstack developer with a desire to continue improving myself every day
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              href={Resume}
              download
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.3)' }}
              className="z-10 font-bold text-gray-200 md:w-auto p-4 border 
            border-purple-400 rounded-xl hover:scale-105 shadow-white cursor-pointer"
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/daylingg" target="_blank">
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/daylin-garcia-071018193/"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[540px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-20 "
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className=" text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className=" text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={900} />
      </div>
    </div>
  )
}
