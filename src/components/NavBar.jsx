import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

export const NavBar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav = () => {
    setNav(false)
  }

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: '-100%', transition: { stiffness: 20, damping: 15 } },
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[900px] mx-auto flex justify-between text-gray-400
      text-xl items-center px-12 h-20 "
      >
        <Link spy={true} to="contact" className="font-bold text-2xl cursor-pointer">
          Daylin
        </Link>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <Link spy={true} to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>
            <li className=" hover:text-purple-500"> About</li>
          </Link>

          <Link spy={true} to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>
            <li className=" hover:text-purple-500"> Skills</li>
          </Link>

          <Link spy={true} to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>
            <li className=" hover:text-purple-500"> Projects </li>
          </Link>

          <Link spy={true} to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
            <li className=" hover:text-purple-500"> Contact </li>
          </Link>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-30 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 "
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <Link spy={true} to="about" onClick={closeNav} smooth={true} offset={50} duration={500}>
              <li className=" hover:text-purple-500"> About</li>
            </Link>

            <Link spy={true} to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>
              <li className=" hover:text-purple-500"> Skills</li>
            </Link>

            <Link spy={true} to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>
              <li className=" hover:text-purple-500"> Projects </li>
            </Link>

            <Link spy={true} to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
              <li className=" hover:text-purple-500"> Contact </li>
            </Link>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
