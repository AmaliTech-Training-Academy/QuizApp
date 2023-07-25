import React, { useState }from 'react';
import navLogo from '../assets/DesktopView/Icons/navbarLogo.png';
import {Link, animationScroll as scroll} from 'react-scroll';
import { VscThreeBars, VscClose } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (to) =>{
      setActiveLink(to);
    }

    const handleClick = () =>{
      setNav(!nav)
    }

    const handleClose = () => setNav(!nav)

  return (
    <div className='sticky top-0 bg-white z-30 drop-shadow-xl border px-4 md:px-16 py-4'>
      {/* Navbar items */}  
      <div className='flex flex-row-reverse lg:flex-row  justify-between items-center w-full h-full'>

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

        <div className='hidden justify-between gap-5 md:flex'>
          <NavLink to={"/login"}>
          <button className='md:border-none px-2 py-2 bg-transparent text-blue-700'>Login</button>
          </NavLink>
          
          <NavLink to={"/signup"}>
          <button className='px-1 md:px-3 py-2 bg-blue-700 text-white'>Register</button>
          </NavLink> 
        </div>
{/* mobile Nav */}
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <VscThreeBars className='text-2xl text-blue-700'/> : <VscClose className='text-2xl text-blue-700'/>}
        </div>
      </div>
      <div className='h-full w-full bg-slate-300 bg-opacity-50 z-40' onClick={handleClose}>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-60 left-0'}>
          <li><Link onClick={() => handleLinkClick('home')}
            className={activeLink === 'home' ? 'active' : ''} activeClass="active" to="home" smooth={true} duration={900} >Home</Link></li>
          <li><Link onClick={() => handleLinkClick('services')}
            className={activeLink === 'services' ? 'active' : ''} activeClass="active" to="services" smooth={true} offset={-202} duration={1000} >Services</Link></li>
          <li><Link onClick={() => handleLinkClick('about')}
            className={activeLink === 'about' ? 'active' : ''} activeClass="active" to="about" smooth={true} offset={-90} duration={900} >About Us</Link></li>
          <li><Link onClick={() => handleLinkClick('contact')}
            className={activeLink === 'contact' ? 'active' : ''} to="contact" smooth={true} offset={-150} duration={2500} >Contact Us</Link></li>

          <NavLink to={"/login"}>
          <li className=''>Login</li>
          </NavLink>
         <NavLink to={"/signup"}>
          <li className=''>Register</li>
          </NavLink> 
          
        </ul>
      </div>


    </div>
  )
}

export default Navbar;