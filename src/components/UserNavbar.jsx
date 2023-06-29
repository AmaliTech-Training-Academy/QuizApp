import React from 'react';
import navLogo from '../assets/Desktop View/Icons/Navbar logo.png';
import userImg from '../assets/Desktop View/Images/Indoor horizontal image of delighted good looking young man looking directly  smiling sincerely, wearing spectacles.png'
import {Link, animationScroll as scroll} from 'react-scroll';

const UserNavbar = () => {
  return (
    <div className='sticky top-0 bg-white z-30 drop-shadow-xl border px-4 md:px-16 py-4'>
      {/* Navbar items */}
      <div className='flex justify-between items-center w-full h-full'>

        <div className='flex items-center'> 
        <img className='h-[35px]' src={navLogo}/>
        <img src="" alt="" />
        </div>

        <div>
        <ul className='hidden md:flex text-blue-700 justify-between'>
          <li><Link className='cursor-pointer' activeClass="active" to="home" smooth={true} duration={900} >Home</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="services" smooth={true} offset={-202} duration={1000} >Services</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="about" smooth={true} offset={-90} duration={900} >About Us</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="contact" smooth={true} offset={-150} duration={2500} >Contact Us</Link></li>
        </ul>
        </div>

        <div className='items-center justify-between gap-5 flex'>
          <p className='px-2 py-2 bg-transparent text-blue-700'>Hello John Doe</p>
          <img className='border-2 rounded-full h-14 w-14' src={userImg} alt="" />
          <span className='relative top-5 right-10 border-8 border-green-400 rounded-full'></span>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar;