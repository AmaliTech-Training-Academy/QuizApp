import React from 'react';
import { bGround } from './bGround';


export const Subscribe = () => {
  return (
    <div className='mt-32 px-4 py-7 relative' style={bGround}>
        <div className=' text-white'>
        <div className='font-semibold text-lg text-left mb-4'>Subscribe to Our News Letter</div>
        <div className='p-1 bg-white rounded-md flex justify-between mb-2'>
            <input  className="w-9/12 pl-4 focus:outline-none" type="text" placeholder='Your e-mail address' />
            <button className="px-2.5 py-2 rounded-md cursor-pointer" style={bGround}> Submit</button>
        </div>
        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='w-8 h-8 bg-[#D1BEF2] rounded-full opacity-50 absolute top-0 right-4'></div>
        <div className='w-8 h-8 bg-[#D1BEF2] rounded-full opacity-50 absolute top-0 right-28'></div>
        <div className='w-8 h-8 bg-[#D1BEF2] rounded-full opacity-50 absolute bottom-0 right-4'></div>
        <div className='w-8 h-8 bg-[#D1BEF2] rounded-full opacity-50 absolute top-9 left-24'></div>
    </div>
  )
};

