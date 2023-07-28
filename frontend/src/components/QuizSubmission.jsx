import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const QuizSubmission = ({handleSure}) => {
    const [check, setCheck] = useState(false);

    const handleChange = () => {
    setCheck(!check);
    };
    
    const handleSubmit = () => {
        if(check){
        handleSure();
        }
    };

    const userName = useSelector(state=>state.userData.user_name);

    // console.log(userName);
return (
    <div className='flex flex-col lg:w-8/12 mx-auto bg-white mt-14 lg:mt-0'>
        {check === false ? (
        <>
        <div className='font-semibold'>QuizMaster honor code <span className='text-[#0267FF]'>Learn more</span> </div>
                <div className='flex items-start mt-2'>
                    <input 
                    type="checkbox" 
                    className='mr-2 w-6 h-6'
                    checked= {check}
                    onChange={handleChange}
                    />
                    <div onClick={handleChange} className='cursor-pointer'>
                        I <span className='font-semibold'>{userName}</span>, understand that submitting work that isn't my own may result in permanent failure of this quiz or deactivativation of my quiz master account.                                      
                    </div>
                </div>
        </>) :
            (
                <button 
                className='self-center px-32 py-4 w-full lg:w-auto bg-[#0267FF]'
                onClick={handleSubmit}>
                Submit
                </button>
            )
        }
    </div>
  )
}
