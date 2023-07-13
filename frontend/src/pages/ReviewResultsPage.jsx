import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineTimer } from 'react-icons/md'
import { getResults } from '../features/resultsSlice'


const ReviewResultsPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    const token = useSelector(state => state.userData.user_token);
    const userId = useSelector(state=> state.userData.user_id);
    const topics = useSelector((state) => state.topics.data);

    const answers = useSelector((state) => state.answers.resultsData[0]);
    const score = useSelector((state) => state.answers.resultsData[0].score);
    console.log(score) 
    // const result = answers.filter(answer => answer[0] )
    console.log(answers.results);

    const quiz = topics.filter(topic => id === topic._id);

    
    useEffect(()=>{
        dispatch(getResults({userId: userId, quizId: id, token:token}))
    }, [userId, id, token])

  return (
    <div>
        {/* header */}
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between' id='quiz-header'>
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
                <Link>Back</Link>
            </div>
            <NavLink to='/quizzes'>
            <button className='hidden lg:block border-white px-10 py-3'>Back</button>
            </NavLink>
            <p className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {quiz[0].topic}</p>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end'><MdOutlineTimer className='w-14 h-8'/> 00:00:00 </div>
        </div>
        {/* Score */}
        <div className='flex justify-between bg-[#F0F2F4] px-16 py-6 mb-20'>
            <div>
                <p className='text-[#1d2939] font-semibold text-4xl'>Congratulations! You passed!</p>
                <p className='text-[#1d2939] font-semibold text-3xl'>Grade received {score}% To pass 80% or higher</p>
            </div>
            <button className='bg-[#0267FF] px-8 py-3'>Next Item</button>
        </div>
        {/* Results */}
        <div className='flex flex-col items-center justify-center'>
            <div>
            {answers.results && answers.results.map((result, index) => (
                <div key={index}>
                    {/* Render the individual result */}
                    <p>Question: {result.question}</p>
                    <p className='my-5 py-5 px-3 border-2 rounded-lg border-[#3f3] bg-[#cfc]'>Answer: {result.chosenAnswer}</p>
                </div>
                ))}
            </div>
            <div className='my-5'>
                <button className='bg-[#0267FF] px-10 py-3'>Try again</button>
            </div>
        </div>
    </div>
  )
}

export default ReviewResultsPage
