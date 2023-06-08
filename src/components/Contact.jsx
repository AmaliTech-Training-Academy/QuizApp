import React from 'react';
import { bGround } from './bGround';
import  phoneIcon  from "../assets/Desktop View/Icons/phone.png";
import mailIcon from "../assets/Desktop View/Icons/mail.png";
import faxIcon from "../assets/Desktop View/Icons/fax.png";
import locationIcon from "../assets/Desktop View/Icons/location_on.png";



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

            {/* Inputs */}
            <div className='w-full lg:w-6/12'>
              <div className='flex flex-col lg:flex-row gap-6'>
                {/* Name */}
              <label className='mt-6 flex flex-col lg:w-1/2'>
                <span className='mb-2 text-xl font-semibold'>Name</span>
                <input type="text" className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
              </label>
              {/* Email */}
              <label className='mt-6 flex flex-col lg:w-1/2'>
                <span className='mb-2 text-xl font-semibold'>Email</span>
                <input type="email" className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
              </label>
              </div>
              <div className='flex gap-6'>
                {/* Phone */}
              <label className='mt-6 flex flex-col w-1/2 hidden lg:flex'>
                <span className='mb-2 text-xl font-semibold'>Phone Number</span>
                <input type="text" className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
              </label>
              {/* Subject */}
              <label className='mt-6 flex flex-col w-1/2 hidden lg:flex'>
                <span className='mb-2 text-xl font-semibold'>Subject</span>
                <input type="email" className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
              </label>
              </div>
              <label className='mt-6 flex flex-col'>
                <span className='mb-2 text-xl font-semibold'>Message</span>
                <input type="textarea" className="h-44 border border-gray-400 rounded focus:outline-none" />
              </label>
              <button className='w-full lg:w-5/12 mt-6 py-2.5 rounded text-white' style={bGround}>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}
