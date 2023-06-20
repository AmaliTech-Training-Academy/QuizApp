import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { RiFilter2Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { QuizFilters } from '../components/QuizFilters';



export const FilterPage = () => {
    const navShadow = {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    };
return (
    <div>
        <div className='flex items-center justify-between bg-[#0267FF] py-6 pl-4 pr-8 text-white' style={navShadow}>
            <NavLink to="/search" className='flex items-center'>
                <IoIosArrowBack className='mr-3'/> Back
            </NavLink>
            <div className='flex items-center border border-[#808080] rounded bg-white pl-4'>
                <AiOutlineSearch className='text-black opacity-50' size={17}/>
                <input type='text' className='w-56'/>
            </div>
            <NavLink to="/filter">
                <RiFilter2Line size={16}/>
            </NavLink>
        </div>
        <QuizFilters/>
    </div>
    )
}
