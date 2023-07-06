import React from 'react';

export const SubmitModal = ({handleSureSubmit, handleUnsure}) => {
    
return (
    <div 
    style={{background: 'rgba(88, 88, 88, 0.64)'}}
    className='absolute w-full h-full z-50 flex items-center justify-center'>
        <div className='bg-white w-96 rounded-lg p-6'>
            <div className='font-semibold mb-4'>Submit Quiz</div>
            <div className='mb-4'>Hey, if you're absolutely sure you want to submit this quiz? we got you covered. This Process cannot be undone</div>
            <div className='flex justify-between'>
                <button className='bg-white border border-[#B3B3B3] rounded text-black w-36 py-[6px]' onClick={handleUnsure}>No</button>
                <button className='w-36 px-2 py-[6px]' onClick={() => { handleSureSubmit(); handleUnsure(); }}>Yes, Submit Quiz</button>
            </div>
        </div>
    </div>
  )
}
