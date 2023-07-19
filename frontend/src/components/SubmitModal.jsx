import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';


export const SubmitModal = ({handleSureSubmit, handleUnsure}) => {
    const { id } = useParams();
    const userId = useSelector(state=> state.userData.user_id)

return (
    <div 
    style={{background: 'rgba(88, 88, 88, 0.64)'}}
    className='absolute w-full h-[170%] lg:h-[140%] top-0 z-50 flex items-center justify-center'>
        <div className='bg-white w-96 rounded-lg p-6'>
            <div className='font-semibold mb-4'>Submit Quiz</div>
            <div className='mb-4'>Hey, if you're absolutely sure you want to submit this quiz? we got you covered. This Process cannot be undone</div>
            <div className='flex justify-between'>
                <button className='bg-white border border-[#B3B3B3] rounded text-black w-36 py-[6px]' onClick={handleUnsure}>No</button>
                <NavLink to={`/quiz/${id}/results`}>
                <button className='w-36 px-2 py-[6px] bg-[#0267FF]' onClick={() => { handleSureSubmit(userId); handleUnsure(); }}>Yes, Submit Quiz</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
