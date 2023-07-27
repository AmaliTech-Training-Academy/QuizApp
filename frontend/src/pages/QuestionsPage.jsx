import React, { useState, useEffect } from 'react'
import { getQuestions, nextQuestion, previousQuestion, selectQuestion, timerExpired, timerStart} from '../features/quizSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { sureSubmit } from '../features/sureSlice'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineTimer } from "react-icons/md"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Question } from '../components/Question'
import { submit, submitAnswers, submitUserId, submitQuizId, resetAnswers } from '../features/answersSlice';
import { QuizSubmission } from '../components/QuizSubmission'
import { SubmitModal } from '../components/SubmitModal'
import UserNavbar, { DropdownList } from '../components/UserNavbar'
import { RotatingLines } from 'react-loader-spinner'
import { Timer } from '../components/Timer'
import MobileProfileNavbar from '../components/MobileProfileNavbar'




export const QuestionsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
        
    const {data:topics} = useSelector((state) => state.topics);
    const currentQuiz = topics.filter(topic => topic._id === id);
    const currentQuizName = currentQuiz[0].topic;

    const quiz = useSelector(state=> state.quiz)
    const number = quiz.questionNumber;
    const index = quiz.index;
    const isRunning = quiz.isRunning;
    const questionInfo = quiz.data;
    const questions = questionInfo.questions;
    const token = useSelector(state=> state.userData.user_token)
    const sure = useSelector(state => state.sure);
    const answers = useSelector(state=> state.answers)
    const chosenAnswers = answers.answersData;
    console.log(index, number);

    const showSettings = useSelector((state) => state.accountSettings.showSettings);
    
    // useEffect(()=>{
    //     dispatch(getQuestions({topicId: id, token:token}));
    //     console.log("Got'em");
    // },[]);

    // dispatch(getQuestions({topicId: id, token:token}));    

  const boxShadow = {
    boxShadow: "4px 4px 17px -3px rgba(0, 0, 0, 0.25)"
};

const activeQuestions = {
    background: "#0267FF",
    color: "#FFFFFF",
};


const changeQuestion = (e) => {
  const questionNumber = e.target.innerText;
  dispatch(selectQuestion(questionNumber))
};

    const questionNav = [];
    for( let i = 0; i < questionInfo.totalQuestions; i++){
        const questionNumber = i + 1;
        questionNav.push(
            <div 
            key={i} 
            className='w-16 border border-gray-900 text-center py-2 cursor-pointer' 
            style={questionNumber === parseInt(number) ? activeQuestions: {}}
            onClick={changeQuestion}
            >
                {questionNumber}
            </div>  
        )
    }

    const backArrowNav = () => {
      if(number > 1){
        dispatch(previousQuestion())
      }
  };

  const forwardArrowNav = () => {
      if(number < questionInfo.totalQuestions){
      dispatch(nextQuestion())
  }
}

useEffect(() => {
  const handleUnload = (event) => {
    event.preventDefault();
    event.returnValue = '';

    dispatch(timerStart())
    dispatch(selectQuestion(1))
    dispatch(resetAnswers())
    dispatch(sureSubmit(false))
  };

  window.onbeforeunload = handleUnload;
  return () => {
    window.onbeforeunload = null;
  };
}, []);


const handleChoice = (e) => {
  const chosenAnswer = e.target.value;
  const result = {
      questionNumber: number,
      answer: chosenAnswer,
  };
  if (chosenAnswers.answers.some((answer) => answer.questionNumber === result.questionNumber)) {
      dispatch(submitAnswers(result))
    } else {
      dispatch(submitAnswers(result))
    }     
    setTimeout(() => {
      forwardArrowNav();
    }, 500);
}

const handleSure = () => {
  dispatch(sureSubmit(true))
};

const handleUnsure = () => {
  dispatch(sureSubmit(false))
};

const handleSureSubmit = (e) => {
  dispatch(submitUserId(e));
  dispatch(submitQuizId(id));
  dispatch(submit())
  dispatch(selectQuestion(1))
  dispatch(resetAnswers())
};

const handleTimerExpired = (e) => {
  dispatch(timerExpired());
    handleSureSubmit(e)
    navigate(`/quiz/${id}/results`);
  };
  
// } else{
//   navigate(`/quiz/${id}/quizintro`);
//   dispatch(resetAnswers())
//   dispatch(selectQuestion(1))
// }
  return (
    <>
    {
        sure[0] ? <SubmitModal handleUnsure={handleUnsure} handleSureSubmit={handleSureSubmit}/> : ''
      }
      <div className='bg-[#0267FF] lg:bg-transparent w-full h-4/5 lg:h-screen'>
      <div>
        <UserNavbar/>
        <MobileProfileNavbar/>
        {showSettings && <DropdownList/>}
        </div>
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between mb-8' id='quiz-header' >
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            <Link to={`/quiz/${id}`}>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {currentQuizName}</div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3 text-center'>Question {number} of {questionInfo.totalQuestions} </div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end mt-5 lg:mt-0 mx-auto'><MdOutlineTimer className='w-14 h-8'/>
            <Timer time={10} isRunning={isRunning} onTimerExpired={handleTimerExpired}/> </div>
        </div>

        <div className='bg-white rounded-t-[2rem] relative pt-24 lg:pt-0 px-4 lg:px-0 '>

        {/* Question Navigation */}

        {/* Mobile Question Nav */}
        <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
            Question <span className='font-semibold'>{number}/{questionInfo.totalQuestions}</span>
        </div>
        <div className='hidden lg:flex justify-center w-3/12 mx-auto mt-7'>

        {/* Back */}
        <div 
            className='w-14 flex items-center justify-center border border-gray-900 rounded-s-lg cursor-pointer'
            style={parseInt(number) === 1 ? {opacity:0} : {opacity: 10} }
            onClick={backArrowNav}
            >
            <BsArrowLeft/>
        </div>

        {/* Question Navbar */}
        {/* Mobile Question Nav */}
        <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
            Question <span className='font-semibold'>{number}/{questionInfo.totalQuestions}</span>
        </div>

        { questionNav }

        {/* Forward */}
        <div 
            className='w-14 flex items-center justify-center border border-gray-900 rounded-e-lg cursor-pointer'
            onClick={forwardArrowNav}
            style={parseInt(number) === questionInfo.totalQuestions ? {opacity:0} : {opacity: 10} }
            >
            <BsArrowRight/>
        </div>
        </div>
        {/* Current Question */}
        <div className='lg:mt-28 h-80'>
          <Question 
            id={id}
            questionNumber={number}
            questionIndex={index}
            handleChoice={handleChoice}
            chosenAnswers={chosenAnswers}/>
        </div>
        {/* Mobile Buttons */}
        <div className='lg:hidden flex justify-between mt-14'>
        <button 
        className='w-[48%] rounded py-[10px] px-16'
        onClick={backArrowNav}
        style={parseInt(number) === 1 ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
        >Previous</button>
        <button 
        className='w-[48%] rounded py-[10px] px-16' 
        onClick={forwardArrowNav}
        style={parseInt(number) === questionInfo.totalQuestions ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
        >Next</button>
        </div> 
        {
        chosenAnswers.answers.length === questionInfo.totalQuestions ?  <QuizSubmission handleSure={handleSure} id={id}/> : ''
        }
        </div>
    </div>
  </>
  )
}
