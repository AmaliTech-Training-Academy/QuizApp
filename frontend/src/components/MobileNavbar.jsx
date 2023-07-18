import React from 'react';
import {NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBell } from "react-icons/bs"
import { useState } from 'react';
// import profileImg from "../assets/MobileView/Images/Indoor-horizontal-image-of-delighted-good-looking-young-man-looking-directly-smiling-sincerely-wearing-spectacles.png"

export const MobileNavbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(prev => !prev);
    };

    const navMenu = (
        <div className='pl-6 pt-4'>
            <div className='mb-6 font-semibold flex items-center'>
                <img src={profileImg} alt="" className='w-[60px] h-[60px] rounded-full mr-2'/>
                <span>John Doe</span>
            </div>
            <div className='mb-6 font-semibold'>Profile</div>
            <div className='mb-6 font-semibold'>Account Settings</div>
            <div className='mb-6 font-semibold'>Log out</div>
        </div>
    );
    return (
        <>
            <div className='flex items-center justify-between bg-[#0267FF] py-6 px-5 text-white lg:hidden'>
            {/* Nav Items */}
            <div className='flex justify-between items-center w-full'>
            <GiHamburgerMenu size={18} onClick={toggleNavbar}/>
                <div className='flex'>
                <NavLink to="/search" className="mr-4">
                    <AiOutlineSearch size={24}/>
                </NavLink>
                <NavLink to="/notifications" className="w-4 h-5">
                    <BsBell size={22}/>
                </NavLink>
                    </div>
                </div>
            </div>
            { navbarOpen && (
            <div className='absolute z-50 bg-white w-2/3'>
                {navMenu}
            </div>
            )}
        </>
    )
}
