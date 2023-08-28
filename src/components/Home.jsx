import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' md:p-8 w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#00CFC8]'> Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Abrahan Frias</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Front-end Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700]'>I'm a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive web applications</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#00CFC8] hover:border-[#00CFC8]'>
                <Link to="work" smooth={true} duration={500}>
                View Work
                </Link>
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
