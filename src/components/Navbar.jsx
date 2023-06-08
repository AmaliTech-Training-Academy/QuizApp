import React from 'react'
import navLogo from '../assets/Desktop View/Icons/Navbar logo.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white z-30 drop-show-lg border px-4 md:px-16 py-4'>
      {/* Navbar items */}
      <div className='flex justify-between items-center w-full h-full'>

        <div className='flex items-center'> 
        <img className='h-[35px]' src={navLogo}/>
        </div>

        <div>
        <ul className='hidden md:flex text-blue-700 justify-between'>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        </div>

        <div className='justify-between gap-5 flex h-10'>
          <button className='md:border-none px-2 py-2 bg-transparent text-blue-700'>Login</button>
          <button className='px-1 py-2'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;