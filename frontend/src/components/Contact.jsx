import React from 'react';
import { bGround } from './bGround';

export const Contact = () => {
  return (
    <div className='mt-36 px-4 mb-6'>
        {/* Inputs */}

        <div className='font-bold text-lg text-center'>Contact Us</div>
        <label className='mt-6 flex flex-col'>
            <span className='mb-2'>Name</span>
            <input type="text" className="h-10 border border-gray-400 rounded" />
        </label>
        <label className='mt-6 flex flex-col'>
            <span className='mb-2'>Email</span>
            <input type="email" className="h-10 border border-gray-400 rounded" />
        </label>
        <label className='mt-6 flex flex-col'>
            <span className='mb-2'>Message</span>
            <input type="textarea" className="h-44 border border-gray-400 rounded" />
        </label>
        <button className='w-full mt-6 py-2.5 rounded text-white' style={bGround}>Submit</button>
    </div>
  )
}
