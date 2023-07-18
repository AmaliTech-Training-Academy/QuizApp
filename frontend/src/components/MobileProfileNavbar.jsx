import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineBell} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSettings } from '../features/accountSettingsSlice'
import { NavLink } from 'react-router-dom'


const MobileProfileNavbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSettings());
  };
  return (
    <div className='z-30 bg-[#0267FF]  text-white lg:hidden flex justify-between px-4 py-8 sticky top-0'>
        <AiOutlineMenu className='text-white' onClick={handleClick}/>
        <div className='flex gap-3'>
          <NavLink to="/search">
            <AiOutlineSearch className='w-fit'/>
          </NavLink>
          <NavLink to="/notifications">
            <AiOutlineBell/>
          </NavLink>
        </div>
      
    </div>
  )
}

export default MobileProfileNavbar
