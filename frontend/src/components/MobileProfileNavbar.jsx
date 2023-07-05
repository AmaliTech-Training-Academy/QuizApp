import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineBell} from 'react-icons/ai'

const MobileProfileNavbar = ({setShowSettings, showSettings}) => {
  return (
    <div className='sticky top-0  z-30 bg-[#0267FF]  text-white lg:hidden flex justify-between px-4 py-8 sticky top-0'>
        <AiOutlineMenu className='text-white' onClick={()=>setShowSettings(!showSettings)}/>
        <div className='flex gap-3'>
            <AiOutlineSearch className='w-fit'/>
            <AiOutlineBell/>
        </div>
      
    </div>
  )
}

export default MobileProfileNavbar
