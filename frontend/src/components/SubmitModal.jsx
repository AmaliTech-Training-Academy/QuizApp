import Cookies from 'js-cookie'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

// import { resetQuestion } from '../features/questionSlice';

export const SubmitModal = ({handleSureSubmit, handleUnsure}) => {
    const dispatch = useDispatch();
    const userId = Cookies.get('id');
    console.log(userId);

    // const handleReset = () => {
    //     dispatch(resetQuestion(1))
    // };

return (
    <div 
    style={{background: 'rgba(88, 88, 88, 0.64)'}}
    className='absolute w-full h-full z-50 flex items-center justify-center'>
        <div className='bg-white w-96 rounded-lg p-6'>
            <div className='font-semibold mb-4'>Submit Quiz</div>
            <div className='mb-4'>Hey, if you're absolutely sure you want to submit this quiz? we got you covered. This Process cannot be undone</div>
            <div className='flex justify-between'>
                <button className='bg-white border border-[#B3B3B3] rounded text-black w-36 py-[6px]' onClick={handleUnsure}>No</button>
                <button className='w-36 px-2 py-[6px] bg-[#0267FF]' onClick={() => { handleSureSubmit(userId); handleUnsure(); }}>Yes, Submit Quiz</button>
            </div>
        </div>
    </div>
  )
}
