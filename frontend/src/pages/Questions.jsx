import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTopics } from '../features/topicSlice';
import { Question } from '../components/Question';
import { MdOutlineTimer } from "react-icons/md";;
import { IoIosArrowBack } from 'react-icons/io';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { getQuestions } from '../features/quizSlice';



export const Questions = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch();

    const {data:topics} = useSelector((state) => state.topics);

    const [quizData, setQuizData] = useState(null);
//  //   const [questionData, setQuestionData] = useState(null);
//     const questionss = useSelector((state) => state.questions.data);
    console.log(quizData);

    useEffect(()=> {
        dispatch(getTopics())
        // dispatch(getQuestions(id))
        // setQuestionData(questionss)
        setQuizData(topics)
    },[topics]);

    const quiz = topics.filter(topic => topic._id === id);
    const questions = quiz[0].questions;
    const [question, setQuestion] = useState(
        {number: 1,
        data: questions[0]}
    );
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState({
        questionNumber: '',
        answer: '',
    });

    const handleChoice = (e) => {
        const chosenAnswer = {
            questionNumber: question.number,
            answer: e.target.value,
        }
        setSelectedAnswer(chosenAnswer);
        if(answers.some(answer => answer.questionNumber === chosenAnswer.questionNumber)){
            console.log('Choose only one answer');
        }else{
            setAnswers(prev=> [...prev, chosenAnswer])
        }
    };

    const activeQuestions = {
        background: "#0267FF",
        color: "#FFFFFF",
    };

    // const changeQuestion = (e) => {
    //     const qNumber = e.target.innerText;
    //     setQuestion({number: qNumber ,
    //     data: questions[qNumber - 1 ]})
    //     setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    // };

    const backArrowNav = () => {
        if(question.number > 1){
            setQuestion({number: question.number - 1 ,
            data: questions[question.number - 1 ]})
        }
        setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    };

    const forwardArrowNav = () => {
        if(question.number < questions.length){
            setQuestion({number: question.number + 1 ,
            data: questions[question.number]})
        }
        setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    };

    const boxShadow = {
        boxShadow: "4px 4px 17px -3px rgba(0, 0, 0, 0.25)"
    };

    console.log(selectedAnswer);
    console.log(answers);

    return (
    <div className='bg-[#0267FF] lg:bg-transparent'>
        {/* <div className='hidden lg:block'>
        <Navbar/>
        </div>
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between mb-8' id='quiz-header' >
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            <Link to={`/quiz/${id}`}>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {quiz[0].topic}</div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3 text-center'>Question {question.number} of {questions.length}</div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end mt-5 lg:mt-0 mx-auto'><MdOutlineTimer className='w-14 h-8'/> 00:59:00</div>
        </div> */}

        {/* Questions */}
        <div className='bg-white rounded-t-[2rem] relative pt-24 lg:pt-0 px-4 lg:px-0 '>

            {/* Question Navigation */}

             {/* Mobile Question Nav */}
            <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
                Question <span className='font-semibold'>{question.number}/{questions.length}</span>
            </div>
            <div className='hidden lg:flex justify-center w-3/12 mx-auto mt-7'>

            {/* Back */}
            <div 
                className='w-14 flex items-center justify-center border border-gray-900 rounded-s-lg cursor-pointer'
                style={parseInt(question.number) === 1 ? {opacity:0} : {opacity: 10} }
                onClick={backArrowNav}>
                <BsArrowLeft/>
            </div>

            {/* Question Navbar */}
            {
                questions.map((q, index) => {
                const questionNumber = index + 1;
                return (
                    <div 
                    key={index} 
                    className='w-16 border border-gray-900 text-center py-2 cursor-pointer' 
                    style={questionNumber === parseInt(question.number) ? activeQuestions: {}}
                    onClick={changeQuestion}
                    >
                        {questionNumber}
                    </div>  
                )
            })
            }
            {/* Forward */}
            <div 
                className='w-14 flex items-center justify-center border border-gray-900 rounded-e-lg cursor-pointer'
                onClick={forwardArrowNav}
                style={parseInt(question.number) === questions.length ? {opacity:0} : {opacity: 10} }
                >
                <BsArrowRight/>
            </div>
        </div>
        {/* Question */}
        <div className='lg:mt-28 h-80'>
            <Question data={question} selectedAnswer={selectedAnswer} handleChoice={handleChoice}/>
        </div>
        <div className='lg:hidden flex justify-between mt-14'>
            <button 
            className='w-[48%] rounded py-[10px] px-16'
            onClick={backArrowNav}
            style={parseInt(question.number) === 1 ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
            >Previous</button>
            <button 
            className='w-[48%] rounded py-[10px] px-16' 
            onClick={forwardArrowNav}
            style={parseInt(question.number) === questions.length ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
            >Next</button>
        </div>
        </div>
    </div>
  )
}
