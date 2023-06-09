import React from 'react';
import  phoneIcon  from "../assets/Desktop View/Icons/phone.png";
import mailIcon from "../assets/Desktop View/Icons/mail.png";
import faxIcon from "../assets/Desktop View/Icons/fax.png";
import locationIcon from "../assets/Desktop View/Icons/location_on.png";
import { ContactInput } from './ContactInput';



export const Contact = () => {

  const cardShadow = {
    boxShadow: "9px 4px 19px -2px rgba(0, 0, 0, 0.08)"
  };

  return (
    <div className='mt-36 lg:mt-20 px-4'>
      
      <div className='lg:px-[76px]'>
        <div className='font-bold text-[27px] text-center'>Contact Us</div>
        {/* Contact Items */}
          <div className=' lg:mt-20 flex lg:flex-row lg:justify-between'>
             {/* Contact methods */}
          <div className='hidden lg:block w-2/5'>
            {/* Phone */}
            <div className='px-6 py-4 flex items-center rounded-lg mb-6' style={cardShadow}>
              <div className='w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#CCE1FF] mr-6'>
                <img src={phoneIcon} className='w-10 h-10' alt="" /></div>
              <div className=''>
                <div className='text-xl font-semibold'>Phone Number</div>
                <div className='text-[#999999]'>(208) 555-0112</div>
              </div>
            </div>

            {/* Email */}
            <div className='px-6 py-4 flex items-center rounded-lg mb-6' style={cardShadow}>
            <div className='w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#CCE1FF] mr-6'>
              <img src={mailIcon} className='w-10 h-10' alt="" />
            </div>
              <div>
                <div className='text-xl font-semibold'>Email Address</div>
                <div className='text-[#999999]'>johndoe@gmail.com</div>
              </div>
            </div>

            {/* Fax */}
            <div className='px-6 py-4 flex items-center rounded-lg mb-6' style={cardShadow}>
            <div className='w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#CCE1FF] mr-6'>
              <img src={faxIcon} className='w-10 h-10' alt="" />
            </div>
              <div>
                <div className='text-xl font-semibold'>Fax Address</div>
                <div className='text-[#999999]'>(208) 555-0112</div>
              </div>
            </div>
            {/* Location */}
            <div className='px-6 py-4 flex items-center rounded-lg' style={cardShadow}>
            <div className='w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#CCE1FF] mr-6'>
              <img src={locationIcon} className='w-10 h-10' alt="" />
            </div>
              <div>
                <div className='text-xl font-semibold'>Location</div>
                <div className='text-[#999999]'>6391 Elgin St. Celina, Delaware 10299</div>
              </div>
            </div>
            </div>
            <ContactInput/>
          </div>
        </div>
    </div>
  )
}
