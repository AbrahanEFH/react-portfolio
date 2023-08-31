import React, { useState } from 'react'
import {FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo-sin-fondo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'400px'}}/>
        </div>

         {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
        
        {/* Hamburguer */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/* //Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* //Social icons */}
        <div className=' flex fixed flex-col top-[65%] md:top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/abrahan-frias/" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#040D12]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/AbrahanEFH" target="_blank">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#468B97]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/" target="_blank">
                        <Link to="contact" smooth={true} duration={500}>
                           Email
                        </Link>
                         <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EF6262]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://drive.google.com/file/d/1yVWi2aI_RmLwF7uHw2LCM58i5vIecnte/view?usp=drive_link" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar

