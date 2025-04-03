import React from 'react'
import banner from '../assets/images/Banner.svg'

const Introduction = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-1/2'>
        <p className='text-5xl leading-20'>Hello I am <span className='font-bold'>Nannan Wang. Frontend</span><span className='text-gray-100 [text-shadow:_2px_1px_0_black]'> Developer</span> Based in <span className='font-bold'>USA.</span></p>
        <p className='text-gray-500 mt-5'>Welcome to my little corner of the internet!
          I'm a UCLA Computer Science sophomore, a curious mind, an adventure seeker, and someone who believes caffeine and good vibes can solve most problems. Currently focusing on front-end development and always up for learning something new.
          Stick around, explore, and let’s make things happen! 🚀</p>
      </div>
      <img src={banner} alt='banner'></img>
    </div>
  )
}

export default Introduction
