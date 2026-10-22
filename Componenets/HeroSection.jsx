import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
    return (
        <div id='home' className=''>
        <div className='mx-6 md:mx-25 md:pt-35 pt-24'>
            <div className='md:w-[80%] w-fit'>
                <h1 className='text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight'>Hi, I'm Usman Muneer, a <span className='text-[#58a6ff]'>Mern-Stack Developer.</span></h1>
                <div className='md:w-[70%] w-fit md:text-xl text-lg text-gray-400 mb-12'>
                <div className=''>
                    <p>I specialize in building high-performance, scalable web applications that solve real-world problems. With a deep understanding of modern frontend and backend architectures, I bridge the gap between design and robust engineering.</p> <p className='hidden md:block'> My focus is always on writing clean, maintainable code and delivering exceptional user experiences. </p>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col w-fit gap-5'>
            <Link spy={true} smooth={true} duration={500} offset={-70} className='bg-[#58a6ff] px-8 py-4 text-[#0d1117] font-semibold rounded-md cursor-pointer hover:bg-[#58a6ffe6] hover:-translate-y-1 transition-all duration-300' to="projects" >View Work</Link>
            <Link spy={true} smooth={true} duration={500} offset={-70} className='bg-transparent border-2 border-gray-600 text-[#e6edf3] px-8 py-4 font-semibold rounded-md cursor-pointer hover:border-[#58A6FF] hover:border-2 hover:text-[#58A6FF] hover:bg-[#58a6ff0d] transition-all duration-300' to="contact">Contact Me</Link>
            </div>
        </div>
        <div className='mx-6 md:mx-25 border-b border-[#30363d] mt-[10%] mb-[10%]'></div>
        </div>
    )
}

export default HeroSection
