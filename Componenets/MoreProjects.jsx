import React from 'react'
import projectsData from './projectData'
import { Link } from 'react-router-dom'

const MoreProjects = () => {
  return (
     <div>
        <div className='mx-6 md:mx-25'>
            <div>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>More Projects</h1>
                <p className='text-gray-400 text-lg mb-16 md:w-[55%] w-fit'>A curated list of additional work, side projects, and personal experiments exploring different tools and frameworks.</p>
            </div>
            
            <div className='flex flex-wrap justify-center items-center gap-8 rounded-xl'>

                {projectsData.map((item) =>{
                    return  <div key={item.id} className='group md:w-[30%] w-fit rounded-xl border border-[#30363d] overflow-hidden hover:border-[#376091] transition-all duration-300'>
                    <div>
                    <img className='rounded-t-xl' src={item.img} alt="" />
                    </div>
                    <div className='flex flex-col p-6 bg-[#161B22]'>
                    <h1 className='text-2xl font-bold mb-3 group-hover:text-[#58a6ff] transition-all duration-300'>{item.title}</h1>
                    <p className='text-gray-400 mb-6'>{item.description}</p>
                    <div className='flex items-center flex-wrap text-center gap-2 mb-8'>
                        {item.technology.map((newItem , index) =>{
                            return <span key={index} className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>{newItem}</span>
                        })}
                    {/* <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>React</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Tailwind</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Node.js</span> */}
                    </div>
                    <div className='w-fit'>
                    <Link target="_blank" className='cursor-pointer group/btn text-[#58a6ff] font-medium' to={item.link}>View Project <i className="pl-2 text-sm group-hover/btn:translate-x-1 transition-all duration-300 fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                </div>
                })}

            </div>
        </div>
         <div className='mx-6 md:mx-25 border-b border-[#30363d] mt-[10%] mb-[10%]'></div>
         </div>
  )
}

export default MoreProjects
