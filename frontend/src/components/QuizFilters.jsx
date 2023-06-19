import React from 'react';

export const QuizFilters = () => {
  return (
    <div className='lg:border lg:border-l-0 lg:border-t-0 lg:border-b-0 lg:border-r-[#808080] mx-4 lg:w-48'>
      <div className='text-2xl font-semibold hidden lg:block'>Filters</div>
      <hr className='border border-[#999999] mt-7 hidden lg:block'/>
      <div className='lg:mt-7 mt-14'>
        <span className='font-semibold'>Subject</span>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Web Development</div>
        </div>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Design</div>
        </div>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Data Science</div>
        </div>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Marketing</div>
        </div>
        <div className='mt-7 flex items-center pl-12 lg:pl-0'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Virtual Assistance</div>
        </div>
      </div>
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
