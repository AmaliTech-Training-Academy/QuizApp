import React from 'react';
import navLogo from '../assets/Desktop View/Icons/Navbar logo.png';
import {Link, animationScroll as scroll} from 'react-scroll';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white z-30 drop-shadow-xl border px-4 md:px-16 py-4'>
      {/* Navbar items */}
      <div className='flex justify-between items-center w-full h-full'>

        <div className='flex items-center'> 
        <img className='h-[35px]' src={navLogo}/>
        </div>

        <div>
        <ul className='hidden md:flex text-blue-700 justify-between'>
          <li><Link className='cursor-pointer' activeClass="active" to="home" smooth={true} duration={900} >Home</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="services" smooth={true} offset={-202} duration={1000} >Services</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="about" smooth={true} offset={-90} duration={900} >About Us</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="contact" smooth={true} offset={-150} duration={2500} >Contact Us</Link></li>
        </ul>
        </div>

        <div className='justify-between gap-5 flex'>
          <NavLink to={"/login"}>
          <button className='md:border-none px-2 py-2 bg-transparent text-blue-700'>Login</button>
          </NavLink>
         <NavLink to={"/signup"}>
          <button className='px-1 md:px-3 py-2'>Register</button>
          </NavLink> 
          
        </div>
      </div>
    </div>
  )
}

export default Navbar;