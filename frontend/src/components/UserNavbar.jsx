import React from 'react';
import navLogo from '../assets/Desktop View/Icons/Navbar logo.png';
import {Link, animationScroll as scroll} from 'react-scroll';
import person from '../assets/Desktop View/Icons/person.png'
import { NavLink,useLocation,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const UserNavbar = ({setShowSettings, showSettings}) => {
  
  return (
    <div className='sticky top-0 bg-white z-30 drop-shadow-xl border px-4  py-4 hidden lg:block 3xl:px-[230px]'>
      {/* Navbar items */}
      <div className='flex justify-between items-center w-full h-full'>

        <div className='flex items-center'> 
        <img className='h-[35px]' src={navLogo}/>
        <img src="" alt="" />
        </div>

        <div>
        <ul className='hidden md:flex text-blue-700 justify-between'>
          <li><NavLink className='cursor-pointer' to='/'> Home</NavLink></li>
          <li><Link className='cursor-pointer' activeClass="active" to="services" smooth={true} offset={-202} duration={1000} >Services</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="about" smooth={true} offset={-90} duration={900} >About Us</Link></li>
          <li><Link className='cursor-pointer' activeClass="active" to="contact" smooth={true} offset={-150} duration={2500} >Contact Us</Link></li>
        </ul>
        </div>

        <div className='items-center justify-between gap-5 flex'>
          <p className='px-2 py-2 bg-transparent text-blue-700'>Hello <span>{Cookies.get('name')}</span></p>
          <img className='border-2 rounded-full h-14 w-14 bg-[#b3b3b3] cursor-pointer' src={person} alt="person image" onClick={()=>setShowSettings(!showSettings)}/>
          <span className='relative top-5 right-10 border-8 border-green-400 rounded-full'></span>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar;

export const DropdownList = () =>{
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleLogout = ()=>{
    Cookies.remove('rememberMe')
    Cookies.remove('userId')
    navigate('/login')
  }

  return(
    <div className='absolute  top-[112px] lg:right-[75px] px-6 pd-6 pt-2 bg-[#FFFFFF] z-10 rounded-lg shadow-lg shadow-[rgba(0, 0, 0, 0.25)] opacity-100 w-[18.25rem]'>
      <div>
        <div className='items-center gap-[16px] flex'>
          <img className='border-2 rounded-[50%] h-14 w-14 bg-[#b3b3b3]' src={person} alt="person image"/>
          <span className='relative top-6 right-8 border-8 border-green-400 rounded-full'></span>
          <p className='font-semibold'>{Cookies.get('name')}</p>
        </div>
      </div>

      <ul className='list mt-[16px] font-semibold'>
        <li className='hover:text-blue-700 cursor-pointer'>
          <NavLink to='/profile' style={{color: location.pathname === '/profile' ? 'blue' : 'black'}}>Profile</NavLink></li>
        <hr className='h-[1px]'/>
        <li className='cursor-pointer hover:text-blue-700'>
          <NavLink to='/account-settings' style={{ color: location.pathname === '/account-settings' ? 'blue' : 'black' }}>Account Settings</NavLink> </li>
        <hr className='h-[1px]'/>
        <li className='cursor-pointer hover:text-blue-700' onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}