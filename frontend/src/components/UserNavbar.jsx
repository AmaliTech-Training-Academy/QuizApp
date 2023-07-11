import React, { useEffect, useState } from 'react';
import navLogo from '../assets/DesktopView/Icons/navbarLogo.png';
import {Link, animationScroll as scroll} from 'react-scroll';
import personIcon from '../assets/DesktopView/Icons/person.png'
import { NavLink,useLocation,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { removeUser } from '../features/userSlice';
import { toggleSettings } from '../features/accountSettingsSlice';

const UserNavbar = () => {
  
  return (
    <div className='sticky top-0 bg-white z-30 drop-shadow-xl border px-4  py-4 hidden lg:block 3xl:px-[230px] md:px-16'>
      {/* Navbar items */}
      <div className='flex justify-between items-center w-full h-full'>

        <div className='flex items-center'>
           <img className='h-[35px]' src={navLogo}/> 
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
          <ProfileImage component='navbar'/>
          
          <span className='relative top-5 right-10 border-8 border-green-400 rounded-full'></span>
        </div>
      </div>
    </div>
  )
}
export default UserNavbar;

//profileImage

export const ProfileImage = ({component, getImage }) => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSettings());
  };
  

  useEffect(() => {
    const profileImage = Cookies.get('image');
    if (profileImage && profileImage !== 'undefined' && profileImage !== 'null') {
      setImage(profileImage);
    }
  }, []);

  const getImageSource = () => {
    if (getImage) {
      return `${getImage}`;
    } else if (image) {
      return `${image}`;
    } else {
      return personIcon;
    }
  };


  return (
    <img
      key={getImageSource()} // Add a key to the image component
      className="border rounded-full bg-[#b3b3b3] cursor-pointer self-center"
      style={
        component === 'settings'
          ? { height: '70px', width: '70px' }
          : component === 'updateProfile'
          ? { height: '160px', width: '160px' }
          : component === 'navbar'
          ? { height: '56px', width: '56px' }
          : { height: '56px', width: '56px' }
      }
      src={getImageSource()}
      alt="person image"
      onClick={handleClick}
    />
  );
};






// dropdown

export const DropdownList = () =>{
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch();
  
  const handleLogout = ()=>{
    Cookies.remove('rememberMe')
    Cookies.remove('userId')
    dispatch(removeUser())
    navigate('/login')
  }

  return(
    <div className=' h-full w-full absolute lg:right-0 flex content-center justify-center bg-black bg-opacity-50'>
      <div className='absolute lg:right-0 lg:left-auto left-0'>
      <div className='py-1 px-6  pt-2 bg-white rounded-lg shadow-lg shadow-[rgba(0, 0, 0, 0.25)] opacity-100 w-[18.25rem]'>
        <div>
          <div className='items-center  gap-[16px] flex'>
            <ProfileImage/>
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
      </div>
      
    </div>
  );
}