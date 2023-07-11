import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineTimer } from 'react-icons/md'

const ReviewResultsPage = () => {
    const results = useSelector(state => state.answers.resultsData);

  return (
    <div>
        {/* header */}
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between' id='quiz-header'>
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
                <Link>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on</div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end'><MdOutlineTimer className='w-14 h-8'/> 00:00:00 </div>
        </div>
        {/* Score */}
        <div className='flex justify-between bg-[#F0F2F4] px-16 py-6 mb-20'>
            <div>
                <div>Congratulations</div>
                <div>Grade received 90% To pass 80% or higher</div>
            </div>
            <button className='bg-[#0267FF] px-12 py-3'>Next Item</button>
        </div>
        {/* Results */}
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ReviewResultsPage
