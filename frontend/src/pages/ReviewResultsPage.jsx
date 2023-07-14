import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineClose, MdOutlineTimer } from 'react-icons/md'
import { getResults } from '../features/resultsSlice'
import { FiCheck } from 'react-icons/fi'


const ReviewResultsPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    const token = useSelector(state => state.userData.user_token);
    const userId = useSelector(state=> state.userData.user_id);
    const topics = useSelector((state) => state.topics.data);

    const answers = useSelector((state) => state.answers.resultsData[0]);
    const score = answers.score;
    console.log(score) 
    // const result = answers.filter(answer => answer[0] )
    // console.log(answers.results);

    const quiz = topics.filter(topic => id === topic._id);

    // const pass = {
    //     color: "#FFFFFF",
    // };

    useEffect(()=>{
        dispatch(getResults({userId: userId, quizResultsId: id, token:token}))
    }, [userId, id, token])

  return (
    <div>
        {/* header */}
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between font-Roboto' id='quiz-header'>
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
                <Link>Back</Link>
            </div>
            <div>
            <p className='lg:block text-2xl font-semibold'>Test your knowledge on {quiz[0].topic}</p>
            <p>Practice Quiz .1 hour</p>
            </div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end'><MdOutlineTimer className='w-14 h-8'/> 00:00:00 </div>
        </div>
        {/* Score */}
        <div className='flex justify-between bg-[#F0F2F4] px-16 py-6 mb-20'>
            <div>
                <p className='text-[#1d2939] font-semibold text-4xl'>{score >= 40 ? 'Congratulations! You passed!' : 'Sorry! you failed!'}</p>
                <p className='text-[#1d2939] font-semibold text-3xl'>Grade received <span style={score >= 40 ? {color: '#3f3'} : {color: 'red'}}>{score}%</span> To pass 80% or higher</p>
            </div>
            <NavLink to='/quizzes'>
            <button className='bg-[#0267FF] px-8 py-3'>Next Item</button>
            </NavLink>
        </div>
        {/* Results */}
        <div className='flex flex-col items-center justify-center'>
            <div>
                
            {answers.results && answers.results.map((result, index) => (
                <div key={index}>
                    {/* Render the individual result */}
                    <p>{result.questionNumber}. {result.question}</p>
                    <p className='my-5 py-5 px-3 rounded-lg flex justify-evenly items-center ' style={result.correctAnswer === result.chosenAnswer ? { color: 'green', borderColor: '#3f3', borderWidth: '2px', background: '#cfc' }  : { color: 'red', borderColor: 'red', borderWidth: '2px', background: '#FFE6E6'}}>
                        Answer:{result.chosenAnswer} {result.correctAnswer === result.chosenAnswer ? <FiCheck /> : <MdOutlineClose />}
                    </p>
                </div>
                ))}
            </div>
            <div className='my-5'>
                <Link to={`/quiz/${id}/quizintro`}>
                <button className='bg-[#0267FF] px-10 py-3'>Try again</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ReviewResultsPage
