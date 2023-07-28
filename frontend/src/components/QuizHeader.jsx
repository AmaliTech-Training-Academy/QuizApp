import React from 'react'
import { Timer } from './Timer'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineTimer } from 'react-icons/md'
import { Link } from 'react-router-dom'


export const QuizHeader = ({id, quizTitle, questions, questionNumber, totalQuestions, isRunning, onTimerExpired}) => {
  return (
    <div>
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between mb-8' id='quiz-header' >
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            <Link to={`/quiz/${id}`}>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {quizTitle}</div>
            { !questions || questions.length === 0 || questionNumber === undefined ? "" :
            <div className='hidden lg:block text-2xl font-semibold w-1/3 text-center'>Question {questionNumber} of {totalQuestions} </div>
            }
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end mt-5 lg:mt-0 mx-auto'><MdOutlineTimer className='w-14 h-8'/>
                <Timer time={10} isRunning={isRunning} onTimerExpired={onTimerExpired}/>
            </div>
        </div>
    </div>
  )
}
