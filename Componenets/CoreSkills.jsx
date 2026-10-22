import React from 'react'

const CoreSkills = () => {
    return (
        <div id='skills'>
        <div className='mx-6 md:mx-25'>
            <div className=''>
                <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>Core Skills</h1>
                <p className='text-gray-400 text-lg mb-16'>Technologies and tools I leverage to build modern web solutions.</p>
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-bold mb-6 text-[#e6edf3]'>Skills</h1>
                </div>
                <div className='flex flex-wrap gap-2 mb-8'>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>HTML</span>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>CSS</span>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>Javascript</span>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>React</span>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>Tailwind CSS</span>
                </div>
            </div>
             <div>
                <div>
                    <h1 className='text-xl font-bold mb-6 text-[#e6edf3]'>Tools</h1>
                </div>
                <div className='flex text-center flex-wrap gap-2 mb-8'>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>Git</span>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>Git Hub</span>
                    <span className='px-3 py-1 bg-[#161b22] rounded-full text-lg border border-gray-700 text-gray-300 hover:border-[#58a6ff]'>Postman</span>
                </div>
            </div>
        </div>
        <div className='mx-6 md:mx-25 border-b border-[#30363d] mt-[10%] mb-[10%]'></div>
        </div>
    )
}

export default CoreSkills
