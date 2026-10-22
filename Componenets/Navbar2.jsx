import React from 'react'
import { Link } from 'react-scroll'
import { useState } from 'react'

const Navbar2 = ({ isOpen , setIsOpen}) => {

  return (
        <div className={`fixed top-15 right-0 h-full bg-black w-[60vw] transform transition-all duration-300 ease-in-out pt-2 ${ isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div onClick={() => setIsOpen(false)} className='flex justify-end items-end ml-[80%] mt-2 w-fit'>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className='flex flex-col p-8 gap-8 font-medium text-sm'>
            <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] w-fit transition-all duration-300 cursor-pointer" to="home">Home</Link>
            <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] w-fit transition-all duration-300 cursor-pointer" to="projects">Projects</Link>
            <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] w-fit transition-all duration-300 cursor-pointer" to="skills">Skills</Link>
            <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] w-fit transition-all duration-300 cursor-pointer" to="contact">Contact</Link>
          </div>
        </div>
  )
}

export default Navbar2
