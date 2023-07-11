import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const QuizSubmission = ({handleSure, id}) => {
    const [check, setCheck] = useState(false);

    const handleChange = () => {
    setCheck(!check);
    };
    
    const handleSubmit = () => {
        if(check){
        handleSure();
        }
    };

    const userName = Cookies.get('name');

    // console.log(userName);
return (
    <div className='flex flex-col lg:w-8/12 mx-auto my-20 bg-white'>
        <div className='font-semibold'>QuizMaster honor code <span className='text-[#0267FF]'>Learn more</span> </div>
        <div className='flex items-start mt-2'>
            <input 
            type="checkbox" 
            className='mr-2 w-6 h-6'
            checked = {check}
            onChange={handleChange}
            />
            <div>
                I {userName}, understand that submitting work that isn't my own may result in permanent failure of this quiz or deactivativation of my quiz master account                                      
            </div>
        </div>
        {/* <NavLink to={`${id}/results`}> */}
        <button 
        className='self-center px-32 py-4 mt-16 w-full lg:w-auto bg-[#0267FF]'
        onClick={handleSubmit}>
        Submit
        </button>
        {/* </NavLink> */}
    </div>
  )
}
