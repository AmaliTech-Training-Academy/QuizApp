import React, { useEffect } from 'react'
import { nextQuestion, previousQuestion, selectQuestion, timerExpired, timerStart} from '../features/quizSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { sureSubmit } from '../features/sureSlice'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Question } from '../components/Question'
import { submit, submitAnswers, submitUserId, submitQuizId, resetAnswers } from '../features/answersSlice';
import { QuizSubmission } from '../components/QuizSubmission'
import { SubmitModal } from '../components/SubmitModal'
import UserNavbar, { DropdownList } from '../components/UserNavbar'
import MobileProfileNavbar from '../components/MobileProfileNavbar'
import { QuizHeader } from '../components/QuizHeader'




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
    // const token = useSelector(state=> state.userData.user_token)
    const sure = useSelector(state => state.sure);
    const answers = useSelector(state=> state.answers)
    const chosenAnswers = answers.answersData;
    // console.log(questionInfo);

    const showSettings = useSelector((state) => state.accountSettings.showSettings);  

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
        <QuizHeader 
          quizTitle={currentQuizName} 
          id={id} 
          questions={questions}
          questionNumber={number} 
          totalQuestions={questionInfo.totalQuestions} 
          isRunning={isRunning} 
          onTimerExpired={handleTimerExpired}
        />

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

        {/* Mobile Question Nav */}
        <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
            Question <span className='font-semibold'>{number}/{questionInfo.totalQuestions}</span>
        </div>

        { questionNav }

        {/* Forward */}
        { !questions || questions.length === 0 || number === undefined ? "" :
          <div 
              className='w-14 flex items-center justify-center border border-gray-900 rounded-e-lg cursor-pointer'
              onClick={forwardArrowNav}
              style={parseInt(number) === questionInfo.totalQuestions ? {opacity:0} : {opacity: 10} }
              >
              <BsArrowRight/>
          </div>
        }
        </div>
        {/* Current Question */}
        <div className='lg:mt-8 h-80'>
          <Question 
            data={questions}
            id={id}
            questionNumber={number}
            questionIndex={index}
            handleChoice={handleChoice}
            chosenAnswers={chosenAnswers}/>
        </div>

        {/* Mobile Buttons */}
        { !questions || questions.length === 0 || number === undefined ? 
        ("") : 
        chosenAnswers.answers.length === questionInfo.totalQuestions ? 
        (<QuizSubmission handleSure={handleSure} id={id}/> ) :
        (<div className='flex justify-between lg:justify-center mt-14 lg:mt-0'>
          <button 
          className='w-[48%] lg:w-48 lg:mr-4 rounded py-[10px] px-16'
          onClick={backArrowNav}
          style={parseInt(number) === 1 ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
          >Previous</button>
          <button 
          className='w-[48%] lg:w-48 rounded py-[10px] px-16' 
          onClick={forwardArrowNav}
          style={parseInt(number) === questionInfo.totalQuestions ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
          >Next</button>
        </div>) 
        }
        </div>
    </div>
  </>
  )
}
