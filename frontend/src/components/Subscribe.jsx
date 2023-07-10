import React, { useState } from 'react';
import { bGround } from './bGround';
import axios from 'axios';


export const Subscribe = () => {

  const [userMail, setUserMail] = useState("");
  const notify = () => toast("You have subscribed successfully!", {theme:"light",})

  const URL = "https://nss-quizapp.up.railway.app/api/subscribe";

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {userMail}
    const response = await axios.post(URL, data);
    if(response.status === 201){
        console.log('success')
        notify();
        setUserMail("");
    }else{
        console.log('error');
    }
  };

  return (
    <div className='mt-32 px-4 py-7 lg:px-14 lg:py-16 relative z-20' style={bGround}>
        <div className=' text-white lg:flex lg:justify-between'>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold text-[27px] lg:text-[33px] text-left mb-4 lg:mb-2'>Subscribe to Our News Letter</div>
            <p className='hidden lg:block lg:text-base'>Be the first to know about releases and indusrty news and insights.</p>
          </div>
        <div>
        <div className='p-1 bg-white rounded-md flex justify-between mb-2 lg:w-[358px] relative z-20'>
            <input className="w-9/12 pl-4 focus:outline-none text-black" 
            type="email" 
            name="email"  
            placeholder='Your e-mail address'
            value={userMail}
            onChange={(e) =>setUserMail(e.target.value)}
            />

            <button className="px-2.5 py-2 rounded-md cursor-pointer" style={bGround} onClick={onSubmit}> Submit</button>
        </div>
        <p className='text-sm lg:text-base'>We care about your data in our privacy policy.</p>
        </div>
        </div>
        <div className='design-spot-mobile top-0 right-4 lg:w-16 lg:h-16 lg:bg-[#9A73DF] lg:top-28 lg:right-1 '></div>
        <div className='design-spot-mobile top-0 right-28 lg:right-[452px] lg:w-16 lg:h-16'></div>
        <div className='design-spot-mobile bottom-0 right-4 lg:left-[730px] lg:w-32 lg:h-32'></div>
        <div className='design-spot-mobile top-[54px] left-24 lg:w-36 lg:h-36 lg:top-0 lg:left-36 lg:bg-[#9354ED] z-10'></div>
    </div>
  )
};

