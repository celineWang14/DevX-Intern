import React from 'react'
import logo from '../assets/images/logo.svg'
import download from '../assets/images/download.svg'

const Header = () => {
  return (
    <div className='w-full h-20 flex flex-row justify-between items-center'>
      <div className='flex flex-row justify-center items-center gap-3'>
        <img src={logo} alt='logo' className='w-10'></img>
        <p className="text-black font-bold text-xl">Personal</p>
      </div>
      <div className='flex gap-7'>
        <p className="text-black font-semibold text-xl">About Me</p>
        <p className="text-black font-semibold text-xl">Skills</p>
        <p className="text-black font-semibold text-xl">Project</p>
        <p className="text-black font-semibold text-xl">Contact Me</p>
      </div>
      <div>
        <button className='flex justify-center items-center gap-3 w-38 h-14 rounded-sm bg-black text-white font-semibold text-xl'>Resume<img src={download} alt='download' className='w-5'></img></button>
      </div>
    </div>
  )
}

export default Header
