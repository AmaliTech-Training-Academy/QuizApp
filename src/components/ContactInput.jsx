import React, { useState } from 'react'
import { bGround } from './bGround';

export const ContactInput = () => {
  const [name, setName] = useState('');
  console.log(name);

  return (
    <div>
          {/* Inputs */}
        <form className='w-full lg:w-[722px]'>

          {/* Top half */}
            <div className='flex flex-col lg:flex-row gap-6'>
                {/* Name */}
                <label className='mt-6 flex flex-col lg:w-1/2' htmlFor='name'>
                    <span className='mb-2 text-xl font-semibold'>Name</span>
                    <input type="text" id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
                </label>
                {/* Email */}
                <label className='mt-6 flex flex-col lg:w-1/2' htmlFor='email'>
                    <span className='mb-2 text-xl font-semibold'>Email</span>
                    <input type="email" id='email' name='email' className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
                </label>
            </div>

            {/* Bottom half */}
            <div className='flex gap-6'>
                {/* Phone */}
                <label className='mt-6  w-1/2 hidden lg:flex lg:flex-col' htmlFor='phone'>
                    <span className='mb-2 text-xl font-semibold'>Phone Number</span>
                    <input type="phone" id='phone' name='phone' className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
                </label>
                {/* Subject */}
                <label className='mt-6 w-1/2 hidden lg:flex lg:flex-col' htmlFor='subject'>
                    <span className='mb-2 text-xl font-semibold'>Subject</span>
                    <input type="text" id='subject' name='subject' className="h-10 lg:h-16 border border-gray-400 rounded focus:outline-none" />
                </label>
            </div>
                <label className='mt-6 flex flex-col' htmlFor='subject'>
                    <span className='mb-2 text-xl font-semibold'>Message</span>
                    <input type="textarea" id='message' name='message' className="h-44 border border-gray-400 rounded focus:outline-none" />
              </label>
              <button className='w-full lg:w-5/12 mt-6 py-2.5 rounded text-white' style={bGround}>Submit</button>
        </form>
    </div>
  )
}
