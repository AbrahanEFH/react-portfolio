import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo-sin-fondo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'400px'}}/>
        </div>

        // Menu
        <div className="div">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        //Hamburguer
        <div>

        </div>
        //Mobile Menu
        <div>

        </div>
        //Social icons
        <div></div>
    </div>
  )
}

export default Navbar

