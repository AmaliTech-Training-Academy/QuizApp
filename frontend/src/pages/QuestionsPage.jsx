import React, { useState, useEffect } from 'react';
import { getQuestions} from '../features/quizSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTopics } from '../features/topicSlice';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineTimer } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Navbar from '../components/Navbar';
import { Question } from '../components/Question';
import { QuizSubmission } from '../components/QuizSubmission';
import { submit, submitAnswers, submitUserId, submitQuizId } from '../features/answersSlice';
import { setQuestion } from '../features/questionSlice';
import { SubmitModal } from '../components/SubmitModal';
import { sureSubmit } from '../features/sureSlice';
import Countdown from 'react-countdown';



export const Questions = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const {data:topics} = useSelector((state) => state.topics);
    const currentQuiz = topics.filter(topic => topic._id === id);
    const {data:question} = useSelector((state) => state.quiz);
    // const currentQuestion = useSelector((state) => state.question);
    // const currentPage = useSelector((state)=> state.question.questionNumber);
    const sure = useSelector(state => state.sure);
    const chosenAnswers = useSelector(state=> state.answers.answersData)
    console.log(chosenAnswers);
    console.log(question);
    
    // const [page, setPage] = useState(currentPage);

    const [page, setPage] = useState(1);


    const currentQuizName = currentQuiz[0].topic;

    const [selectedAnswer, setSelectedAnswer] = useState({
        questionNumber: '',
        answer: '',
    });

    console.log(question);

    useEffect(()=>{
        dispatch(getQuestions({topicId:id}));
    },[id]);

    // useEffect(()=>{
    //     dispatch(setQuestion({
    //         data: question.question,
    //         answers: question.answers,
    //         questionNumber: question.page,
    //     }))

    // }, [question, page, dispatch])

    const boxShadow = {
        boxShadow: "4px 4px 17px -3px rgba(0, 0, 0, 0.25)"
    };

    const activeQuestions = {
        background: "#0267FF",
        color: "#FFFFFF",
    };

    const changeQuestion = (e) => {
        const questionNumber = e.target.innerText;
        setPage(questionNumber);
        setQuestion({
            data: question.question,
            answers: question.answers,
            })
        setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    };

    const questionNav = [];
    for( let i = 0; i < question.limit; i++){
        const questionNumber = i + 1;
        questionNav.push(
            <div 
            key={i} 
            className='w-16 border border-gray-900 text-center py-2 cursor-pointer' 
            style={questionNumber === parseInt(page) ? activeQuestions: {}}
            onClick={changeQuestion}
            >
                {questionNumber}
            </div>  
        )
    };

    const backArrowNav = () => {
        if(page > 1){
            setPage(page - 1);
            setQuestion({
                data: question.question,
                answers: question.answers,
            })
        }
        setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '', quiz_id: '',}))
    };

    const forwardArrowNav = () => {
        if(page < question.limit){
            setPage(page + 1);
            setQuestion({
                data: question.question,
                answers: question.answers,
            })
        setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '', quiz_id: '',}))
    }}

    const handleChoice = (e) => {
        const chosenAnswer = e.target.value;
        const result = {
            questionNumber: page,
            answer: chosenAnswer,
        };
        setSelectedAnswer(result);
        if (chosenAnswers.answers.some((answer) => answer.questionNumber === result.questionNumber)) {
            // Update the existing answer in the `answers` array
            dispatch(submitAnswers(result))
        } else {
            dispatch(submitAnswers(result))
        }     
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
    };

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
        return (<div>Time's Up!</div>);
        } else {
          // Render a countdown
        return (
            <span>
            {hours}:{minutes}:{seconds}
            </span>
            );
        }
    };

    console.log();
    
    return (
        <div className='bg-[#0267FF] lg:bg-transparent'>
            {
                sure[0] ? <SubmitModal handleUnsure={handleUnsure} handleSureSubmit={handleSureSubmit}/> : ''
            }
        <div className='hidden lg:block'>
        <Navbar/>
        </div>
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between mb-8' id='quiz-header' >
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            <Link to={`/quiz/${id}`}>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {currentQuizName}</div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3 text-center'>Question {page} of {question.totalQuestions} </div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end mt-5 lg:mt-0 mx-auto'><MdOutlineTimer className='w-14 h-8'/> <Countdown date={Date.now() + 600000} renderer={renderer}/> </div>
        </div>

        {/* Questions */}
        <div className='bg-white rounded-t-[2rem] relative pt-24 lg:pt-0 px-4 lg:px-0 '>

            {/* Question Navigation */}
        
             {/* Mobile Question Nav */}
            <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
                Question <span className='font-semibold'>{page}/{question.totalQuestions}</span>
            </div>
            <div className='hidden lg:flex justify-center w-3/12 mx-auto mt-7'>

            {/* Back */}
            <div 
                className='w-14 flex items-center justify-center border border-gray-900 rounded-s-lg cursor-pointer'
                style={parseInt(page) === 1 ? {opacity:0} : {opacity: 10} }
                onClick={backArrowNav}
                >
                <BsArrowLeft/>
            </div>

            {/* Question Navbar */}
            {/* Mobile Question Nav */}
            <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
                Question <span className='font-semibold'>{page}/{question.totalQuestions}</span>
            </div>

            { questionNav }
            
            {/* Forward */}
            <div 
                className='w-14 flex items-center justify-center border border-gray-900 rounded-e-lg cursor-pointer'
                onClick={forwardArrowNav}
                style={parseInt(page) === question.totalQuestions ? {opacity:0} : {opacity: 10} }
                >
                <BsArrowRight/>
            </div>
        </div>
        {/* Current Question */}
        <div className='lg:mt-28 h-80'>
            <Question 
            data={currentQuestion} 
            questionNumber={currentPage} 
            selectedAnswer={selectedAnswer} 
            handleChoice={handleChoice}
            chosenAnswers={chosenAnswers}
            />
        </div>
        {/* Mobile Buttons */}
        <div className='lg:hidden flex justify-between mt-14'>
            <button 
            className='w-[48%] rounded py-[10px] px-16'
            onClick={backArrowNav}
            style={parseInt(page) === 1 ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
            >Previous</button>
            <button 
            className='w-[48%] rounded py-[10px] px-16' 
            onClick={forwardArrowNav}
            style={parseInt(page) === question.totalQuestions ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
            >Next</button>
        </div> 
        {
            chosenAnswers.answers.length === question.limit ?  <QuizSubmission handleSure={handleSure} id={id}/> : ''
        }
        </div>
    </div>
    )
};

