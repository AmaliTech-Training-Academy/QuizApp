import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from '../features/quizSlice';


// import { Link } from 'react-router-dom';

export const Test = () => {
const dispatch = useDispatch();

    const results = useSelector(state=> state.quiz);
    console.log(results);

    useEffect(()=>{
      dispatch(getQuestions({topicId:'64a4118ae994d9aaaea59f4d'}));
  },[]);
  return (
    <div>
      Hello
        {/* <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between mb-8' id='quiz-header' >
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            <Link to={`/quiz/${id}`}>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {currentQuizName}</div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3 text-center'>Question {page} of {question.totalQuestions} </div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end mt-5 lg:mt-0 mx-auto'><MdOutlineTimer className='w-14 h-8'/> <Countdown date={Date.now() + 600000} renderer={renderer}/> </div>
        </div> */}
    </div>
  )
}
