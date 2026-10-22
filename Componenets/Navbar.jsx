import React from 'react'
import { Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';

// text-[#58a6ff]

const Navbar = ({setIsOpen}) => {
  return (
     <div className='border-b border-[#30363d] flex justify-between items-center md:px-25 px-6 backdrop-blur-lg sticky top-0 z-50 bg-[#0d1117cc]'>
      <div className='text-xl font-bold hover:text-[#58a6ff] transition-all duration-300 cursor-pointer'>
        <img className='h-[10vh]' src="Images/logo2.png" alt="" />
      </div>
      <div className='hidden md:flex gap-8 font-medium text-sm'>
      <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] transition-all duration-300 cursor-pointer" to="home">Home</Link>
      <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] transition-all duration-300 cursor-pointer" to="projects">Projects</Link>
      <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] transition-all duration-300 cursor-pointer" to="skills">Skills</Link>
      <Link spy={true} smooth={true} duration={500} offset={-70} ignoreCancelEvents={true} className="hover:text-[#58a6ff] transition-all duration-300 cursor-pointer" to="contact">Contact</Link>
      </div>
      <div onClick={() => setIsOpen(true)} className='md:hidden'>
        <i className="md:hidden cursor-pointer fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Navbar
