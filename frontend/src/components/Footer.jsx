import React from 'react';
import logo from "../assets/Mobile View/Images/Mobile footer logo.png";
import facebook from "../assets/Desktop View/Icons/Facebook.png";
import github from "../assets/Desktop View/Icons/Group.png"
import linkedin from "../assets/Desktop View/Icons/Linkedin.png"



export const Footer = () => {
  return (
    <div className='mt-11 border pt-4 pb-9 px-[88px] bg-[#F2F2F2]'>
        {/* Footer Items */}
        <div className='flex flex-col items-center'>
             {/* Logo */}
            <img src={logo} alt="" className='h-10'/>
        {/* Links */}
        <div className='flex flex-col items-center mt-4'>
            <div className='footer-link'>Home</div>
            <div className='footer-link'>About Us</div>
            <div className='footer-link'>Services</div>
            <div className='footer-link'>Contact Us</div>
            <div className='footer-link'>Sign Up</div>
            <div className='footer-link'>Login</div>
        </div>
        {/* Socials */}
        <div className='w-7/12 flex justify-between'> 
            <img src={github} className='w-6 h-6' alt="" />
            <img src={facebook} className='w-6 h-6' alt="" />
            <img src={linkedin} className='w-6 h-6' alt="" />
        </div>
        {/* Copyright */}
        <div className='text-xs text-[#808080] mt-8'>2023 QuizMaster All Rights Reserved</div>
        </div>
    </div>
  )
}
