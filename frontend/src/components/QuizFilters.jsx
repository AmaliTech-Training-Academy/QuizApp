import React from 'react';
import { SubjectFilters } from './SubjectFilters';



export const QuizFilters = () => {

  return (
    <div className='lg:border lg:border-l-0 lg:border-t-0 lg:border-b-0 lg:border-r-[#808080] mx-4 lg:w-48 pr-7'>
      <div className='text-2xl font-semibold hidden lg:block'>Filters</div>
      <hr className='border border-[#999999] mt-7 hidden lg:block'/>
      <SubjectFilters/>
      <hr className='mt-7 border border-[#999999]'/>
      <div className='mt-7'>
        <span className='font-semibold'>Level</span>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Beginner</div>
        </div>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Intermediate</div>
        </div>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Advance</div>
        </div>
      </div>
    </div>
  )
};


