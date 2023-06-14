import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { QuizSearch } from './QuizSearch';


export const PageNavigation = () => {
  return (
    <div className='flex justify-between'>
      {/* Links */}
      <div className='flex'>
        <div className='flex items-center text-[#B3B3B3]'>
          <span className='mr-4'>Home</span> 
          <span className='mr-4'><IoIosArrowForward/></span>
        </div>
        <img src="" alt="" />
        <div className='flex items-center text-[#B3B3B3]'>
          <span className='mr-4'>Profile</span>
          <span className='mr-4'><IoIosArrowForward/></span>
        </div>
        <img src="" alt="" />
        <div className='text-[#B3B3B3] flex items-center'>
          <span className='text-[#B3B3B3]'>Quizzes</span>
        </div>
      </div>
      {/* Search */}
      <QuizSearch/>
    </div>
  )
}
