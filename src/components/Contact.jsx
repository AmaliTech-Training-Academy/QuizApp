import React from 'react'
import { ContactInput } from './ContactInput'
import { ContactMethods } from './ContactMethods'



export const Contact = () => {
  return (
    <div name="contact" className='mt-36 lg:mt-20 px-4'>
      
      <div className='lg:px-[76px]'>
        <div className='font-bold text-[27px] text-center'>Contact Us</div>
        {/* Contact Items */}
          <div className=' lg:mt-20 flex lg:flex-row lg:justify-between'>
             {/* Contact methods */}
            <ContactMethods/>
            <ContactInput/>
          </div>
        </div>
    </div>
  )
}
