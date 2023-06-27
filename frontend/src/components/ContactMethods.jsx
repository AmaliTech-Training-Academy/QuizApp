import React from 'react'
import  phoneIcon  from "../assets/Desktop-View/Icons/phone.png"
import mailIcon from "../assets/Desktop-View/Icons/mail.png"
import faxIcon from "../assets/Desktop-View/Icons/fax.png"
import locationIcon from "../assets/Desktop-View/Icons/location_on.png"

export const ContactMethods = () => {
    const cardShadow = {
        boxShadow: "9px 4px 19px -2px rgba(0, 0, 0, 0.08)"
      };
  return (
        <div className='hidden lg:block w-2/5'>
            {/* Phone */}
            <div className='contact-card' style={cardShadow}>
                <div className='contact-card-image'>
                    <img src={phoneIcon} className='w-10 h-10' alt="" />
                </div>
                <div className=''>
                    <div className='text-xl font-semibold'>Phone Number</div>
                    <div className='text-[#999999]'>(208) 555-0112</div>
                </div>
            </div>

            {/* Email */}
            <div className='contact-card' style={cardShadow}>
                <div className='contact-card-image'>
                    <img src={mailIcon} className='w-10 h-10' alt="" />
                </div>
                <div>
                    <div className='text-xl font-semibold'>Email Address</div>
                    <div className='text-[#999999]'>johndoe@gmail.com</div>
                </div>
            </div>
            {/* Fax */}
            <div className='contact-card' style={cardShadow}>
                <div className='contact-card-image'>
                    <img src={faxIcon} className='w-10 h-10' alt="" />
                </div>
                <div>
                    <div className='text-xl font-semibold'>Fax Address</div>
                    <div className='text-[#999999]'>(208) 555-0112</div>
                </div>
            </div>
            {/* Location */}
            <div className='contact-card' style={cardShadow}>
                <div className='contact-card-image'>
                <img src={locationIcon} className='w-10 h-10' alt="" />
            </div>
                <div>
                    <div className='text-xl font-semibold'>Location</div>
                    <div className='text-[#999999]'>6391 Elgin St. Celina, Delaware 10299</div>
                </div>
            </div>
        </div>
  )
}
