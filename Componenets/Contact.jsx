import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='flex md:flex-row flex-col md:gap-24 gap-16 mx-6 md:mx-25 mb-[10%]'>
            <div className='md:w-[50%] w-fit'>
            <div className='md:w-fit w-[90%]'>
                <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>Let's connect</h1>
                <p className='text-gray-400 text-lg mb-8'>I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </div>
            <div className='space-y-2'>
                <p className='text-sm text-gray-500 font-medium tracking-wider'>EMAIL ME AT</p>
                <a href="" className='text-lg md:text-2xl font-medium hover:text-[#58a6ff] transition-all duration-300'>usmanO5muneer@gmail.com</a>
            </div>
            </div>
            <div className='flex flex-col gap-6 md:w-[50%]'>
                <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium text-gray-400' htmlFor="Name">Name</label>
                <input className='w-full bg-[#161b22] border border-[#30363d] rounded-md px-4 py-3 text-[#e6edf3] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58a6ff]' type="text" placeholder='Enter your name' />
                </div>
                <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium text-gray-400' htmlFor="Email">Email</label>
                <input className='w-full bg-[#161b22] border border-[#30363d] rounded-md px-4 py-3 text-[#e6edf3] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58a6ff]' type="text" placeholder='Enter your email' />
                </div>
                <div className='flex flex-col gap-2'>
                <label className='text-sm font-medium text-gray-400' htmlFor="Meassage">Message</label>
                <textarea className='w-full bg-[#161b22] border border-[#30363d] rounded-md px-4 py-3 text-[#e6edf3] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58a6ff] resize-none' name="" id="" rows="5" placeholder='How can I hepl you?'></textarea>
                </div>
                <div>
                    <button className='px-8 py-4 bg-[#58a6ff] text-[#0d1117] font-semibold rounded-md cursor-pointer hover:bg-[#58a6ffe6] hover:-translate-y-1 transition-all duration-300'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
