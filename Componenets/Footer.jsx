import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t border-[#30363d] py-10'>
    <div className='flex md:flex-row flex-col gap-6 justify-between mx-6 md:mx-25'>
      <div>
        <p className='text-gray-500 text-sm'>&copy; 2026. All rights reserved.</p>
      </div>
      <div className='flex gap-6'>
        <Link to="https://github.com/Usman-50" ><i className="text-xl text-gray-500 hover:text-[#58a6ff] transition-all fa-brands fa-github"></i></Link>
        <Link to="https://www.linkedin.com/in/usman-muneer-5b1034419/" ><i className="text-xl text-gray-500 hover:text-[#58a6ff] transition-all fa-brands fa-linkedin"></i></Link>
      </div>
    </div>
    </div>
  )
}

export default Footer
