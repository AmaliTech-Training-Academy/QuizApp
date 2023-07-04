import React from 'react'

export const QuizSubmission = () => {
  return (
    <div className='flex flex-col lg:w-8/12 mx-auto my-20 bg-white'>
        <div className='font-semibold'>QuizMaster honor code <span className='text-[#0267FF]'>Learn more</span> </div>
        <div className='flex items-start mt-2'>
            <input 
            type="checkbox" 
            className='mr-2 w-6 h-6'
            />
            <div>
                I John Doe, understand that submitting work that isn't my own may result in permanent failure of this quiz or deactivativation of my quiz master account                                      
            </div>
        </div>
        <button className='self-center px-32 py-4 mt-16 w-full'>Submit</button>
    </div>
  )
}
