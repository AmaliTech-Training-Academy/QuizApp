import React from 'react';
import footerLogoMobile from "../assets/Mobile View/Images/Mobile footer logo.png";
import footerLogoDesktop from "../assets/Desktop View/Images/Footer LOgo.png";
import facebook from "../assets/Desktop View/Icons/Facebook.png";
import github from "../assets/Desktop View/Icons/Group.png"
import linkedin from "../assets/Desktop View/Icons/Linkedin.png"



export const Footer = () => {
  return (
    // Footer Container
    <div className='relative'>
      {/* Footer */}
      <div className='mt-11 border pt-4 pb-9 px-[88px] lg:py-9 bg-[#F2F2F2]'>
        {/* Footer Items */}
        <div className='flex flex-col items-center justify-between lg:flex-row'>

              {/* Left side */}
              <div className='lg:block lg:w-[308px]'>
                 {/* Logo */}
            <img src={footerLogoDesktop} alt="" className='w-56 h-[59px] hidden lg:block'/>
            <img src={footerLogoMobile} alt="" className='h-50 lg:hidden'/>
            <p className='text-base text-[#808080] mt-8 hidden lg:block'>Feel free to join our quiz platform to expand your knowledge and challenge your skills with engaging quizzes anytime, anywhere."</p>
              </div>

              {/* Right Side */}
              <div>
                {/* Desktop Links */}
                <div className='flex'>
                <div className='footer-links-container'>
                  <div className='header'>Product</div>
                  <div className='footer-links'>Overview</div>
                  <div className='footer-links'>Features</div>
                  <div className='footer-links'>Pricing</div>
                  <div className='footer-links'>Releases</div>
                </div>
                <div className='footer-links-container'>
                  <div className='header'>Company</div>
                  <div className='footer-links'>About Us</div>
                  <div className='footer-links'>Careers</div>
                  <div className='footer-links'>News</div>
                  <div className='footer-links'>Contact</div>
                </div> 
                <div className='footer-links-container'>
                  <div className='header'>Resources</div>
                  <div className='footer-links'>News Letter</div>
                  <div className='footer-links'>Help Center</div>
                  <div className='footer-links'>Tutorials</div>
                  <div className='footer-links'>Support</div>
                </div>
                <div className='footer-links-container'>
                  <div className='header'>Social</div>
                  <div className='footer-links'>Twitter</div>
                  <div className='footer-links'>Linkedin</div>
                  <div className='footer-links'>Facebook</div>
                  <div className='footer-links'>Github</div>
                </div>
                <div className='footer-links-container'>
                  <div className='header'>Legal</div>
                  <div className='footer-links'>Terms</div>
                  <div className='footer-links'>Privacy</div>
                  <div className='footer-links'>Cookies</div>
                  <div className='footer-links'>Licenses</div>
                </div>
                </div>
                {/*Mobile Links */}
                <div className='flex flex-col items-center mt-4 h-[370px] lg:h-[auto] lg:hidden'>
                    <div className='footer-link'>Home</div>
                    <div className='footer-link'>About Us</div>
                    <div className='footer-link'>Services</div>
                    <div className='footer-link'>Contact Us</div>
                    <div className='footer-link'>Sign Up</div>
                    <div className='footer-link'>Login</div>
                </div>
              </div>
        </div>
    </div>

    {/* Footnotes */}
    <div className='flex flex-col absolute lg:relative bottom-0 left-[100px] lg:bottom-0 lg:left-0 lg:flex lg:flex-row-reverse lg:justify-between items-center lg:px-[70px] lg:py-8 mb-9 lg:mb-0'>
       {/* Socials */}
      <div className='w-7/12 lg:w-32 flex justify-between'> 
            <img src={github} className='w-6 h-6' alt="" />
            <img src={facebook} className='w-6 h-6' alt="" />
            <img src={linkedin} className='w-6 h-6' alt="" />
        </div>
        {/* Copyright */}
        <div className='text-xs text-[#808080] mt-8 lg:mt-0'>2023 QuizMaster All Rights Reserved</div>
    </div>
    </div>
  )
}
