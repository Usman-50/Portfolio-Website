import React from 'react'
import projectsDataFeatured from './featuredData'

const Featuredprojects = () => {
    return (
        <div id='projects'>
        <div className='mx-6 md:mx-25'>
            <div>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Featured Projects</h1>
                <p className='text-gray-400 text-lg mb-16 md:w-[55%] w-fit'>A selection of my recent work, showcasing robust engineering and clean design.</p>
            </div>
            
            <div className='flex md:flex-row flex-col flex-wrap justify-center items-stretch gap-8 rounded-xl'>

                {projectsDataFeatured.map((item) =>{
                    return  <div key={item.id} className='flex flex-col group md:w-[30%] w-fit rounded-xl border border-[#30363d] overflow-hidden hover:border-[#376091] transition-all duration-300'>
                    <div>
                    <img className='rounded-t-xl' src={item.img} alt="" />
                    </div>
                    <div className='flex flex-col p-6 bg-[#161B22]'>
                    <h1 className='text-2xl font-bold mb-3 group-hover:text-[#58a6ff] transition-all duration-300'>{item.title}</h1>
                    <p className='text-gray-400 mb-6 grow'>{item.description}</p>
                    <div className='flex items-center flex-wrap gap-2 mb-8'>
                        {item.technology.map((newItem , index) =>{
                            return <span key={index} className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>{newItem}</span>
                        })}
                    {/* <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>React</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Tailwind</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Node.js</span> */}
                    </div>
                    <div className='w-fit'>
                    <p className='cursor-pointer group/btn text-[#58a6ff] font-medium'>View Project <i className="pl-2 text-sm group-hover/btn:translate-x-1 transition-all duration-300 fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
                </div>
                })}

               

                 {/* <div className='w-[30%] rounded-xl'>
                    <img className='rounded-xl' src="car.avif" alt="" />
                    <div className='flex flex-col  p-6 bg-[#161B22]'>
                    <h1 className='text-2xl font-bold mb-3'>Fintech Dashboard</h1>
                    <p className='text-gray-400 mb-6'>A high-performance real-time analytics dashboard for tracking cryptocurrency portfolios.</p>
                    <div className='flex gap-2 mb-8'>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>React</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Tailwind</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Node.js</span>
                    </div>
                    <p>View Project</p>
                </div>
                </div>

                 <div className='w-[30%] rounded-xl'>
                    <img className='rounded-xl' src="car.avif" alt="" />
                    <div className='flex flex-col p-6 bg-[#161B22]'>
                    <h1 className='text-2xl font-bold mb-3'>Fintech Dashboard</h1>
                    <p className='text-gray-400 mb-6'>A high-performance real-time analytics dashboard for tracking cryptocurrency portfolios.</p>
                    <div className='flex gap-2 mb-8'>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>React</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Tailwind</span>
                    <span className='px-3 py-1 bg-[#0d1117] rounded-full text-xs border border-gray-700 text-gray-300'>Node.js</span>
                    </div>
                    <p>View Project</p>
                </div>
                </div> */}

            </div>
        </div>
         <div className='mx-6 md:mx-25 border-b border-[#30363d] mt-[10%] mb-[10%]'></div>
         </div>
    )
}

export default Featuredprojects
