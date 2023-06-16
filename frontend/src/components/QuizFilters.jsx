import React from 'react'

export const QuizFilters = () => {
  return (
    <div className=' border border-l-0 border-t-0 border-r-[#808080] pr-7'>
      <div className='text-2xl font-semibold '>Filters</div>
      <hr className='border border-[#999999] mt-7' />
      <div className='mt-7'>
        <span>Subject</span>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Web Development</div>
        </div>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Design</div>
        </div>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Data Science</div>
        </div>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Marketing</div>
        </div>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Virtual Assistance</div>
        </div>
      </div>
      <hr className='mt-7 border border-[#999999]'/>
      <div className='mt-7'>
        <span>Level</span>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Beginner</div>
        </div>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Intermediate</div>
        </div>
        <div className='mt-7 flex items-center'>
          <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
          <div>Advance</div>
        </div>
      </div>
    </div>
  )
};
