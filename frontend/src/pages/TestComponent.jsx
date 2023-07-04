import React, { useState, useEffect } from 'react';
import { getQuestions } from '../features/quizSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTopics } from '../features/topicSlice';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineTimer } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Navbar from '../components/Navbar';
import { Question } from '../components/Question';
import { QuizSubmission } from '../components/QuizSubmission';


export const TestComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    // const [questionData, setQuestionData] = useState(null);
    // const [quizData, setQuizData] = useState(null);
    const [page, setPage] = useState(1);
    const {data:questions} = useSelector((state) => state.questions);
    const {data:topics} = useSelector((state) => state.topics);


    const currentQuiz = topics.filter(topic => topic._id === id);

    const currentQuizName = currentQuiz[0].topic;

    const [question, setQuestion] = useState({
        data: null,
        answers: null,
    });
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState({
        questionNumber: '',
        answer: '',
    });

    useEffect(()=>{
        dispatch(getQuestions({topicId:id, page:page}));
    },[id, page]);

    useEffect(()=>{
        setQuestion({
            data: questions.question,
            answers: questions.answers,
        })
    }, [questions])

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
            data: questions.question,
            answers: questions.answers,
            })
        setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    };

    const questionNav = [];
    for( let i = 0; i < questions.totalQuestions; i++){
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
                data: questions.question,
                answers: questions.answers,
            })
        }
        // setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    };

    const forwardArrowNav = () => {
        if(page < questions.totalQuestions){
            setPage(page + 1);
            setQuestion({
                data: questions.question,
                answers: questions.answers,
            })
        // setSelectedAnswer(prev => ({...prev, questionNumber: '', answer: '',}))
    }}

    const handleChoice = (e) => {
        const chosenAnswer = e.target.value;
        const result = {
            questionNumber: page,
            answer: null,
            is_correct: null,
            rightAnswer: null,
        };
        const correctAns = questions.answers.filter(answer => answer.is_correct);
        if(chosenAnswer === correctAns[0].text){
            const correct = correctAns[0].text;
            result.answer = chosenAnswer;
            result.is_correct = true;
            result.rightAnswer = correct;
            setSelectedAnswer(result);
        }else{
            const correct = correctAns[0].text;
            result.answer = chosenAnswer;
            result.is_correct = false;
            result.rightAnswer = correct;
            setSelectedAnswer(result);
            } 
        if (answers.some((answer) => answer.questionNumber === result.questionNumber)) {
            // Update the existing answer in the `answers` array
            setAnswers((prev) =>
            prev.map((answer) =>
                answer.questionNumber === result.questionNumber ? { ...answer, answer: chosenAnswer, is_correct: chosenAnswer === correctAns[0].text } : answer
            )
            );
        } else {
            setAnswers((prev) => [...prev, result]);
        }     
    }

    const handleAnswerChange = () => {
        const answerChange = answers.find(answer => answer.questionNumber === result.questionNumber);
        if (answerChange) {
            const updatedAnswer = { ...answerChange, rightAnswer: result.rightAnswer };
            setAnswers(prev => prev.map(answer => answer.questionNumber === result.questionNumber ? updatedAnswer : answer));
        } else {
        setAnswers(prev => [...prev, result]);
            }
    }

    console.log(answers);

    return (
    <div className='bg-[#0267FF] lg:bg-transparent'>
        <div className='hidden lg:block'>
        <Navbar/>
        </div>
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col lg:justify-between mb-8' id='quiz-header' >
            <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            <Link to={`/quiz/${id}`}>Back</Link>
            </div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3'>Test your knowledge on {currentQuizName}</div>
            <div className='hidden lg:block text-2xl font-semibold w-1/3 text-center'>Question {page} of {questions.totalQuestions} </div>
            <div className='flex items-center text-2xl font-semibold lg:w-1/3 lg:justify-end mt-5 lg:mt-0 mx-auto'><MdOutlineTimer className='w-14 h-8'/> 00:59:00</div>
        </div>

        {/* Questions */}
        <div className='bg-white rounded-t-[2rem] relative pt-24 lg:pt-0 px-4 lg:px-0 '>

            {/* Question Navigation */}
        
             {/* Mobile Question Nav */}
            <div className='lg:hidden absolute -top-7 mx-auto left-0 right-0 w-60 bg-white py-5 px-14 rounded-xl text-xl text-[#0267FF]' style={boxShadow}>
                Question <span className='font-semibold'>{page}/{questions.totalQuestions}</span>
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
                Question <span className='font-semibold'>{page}/{questions.totalQuestions}</span>
            </div>

            {
                questionNav
            }
            
            {/* Forward */}
            <div 
                className='w-14 flex items-center justify-center border border-gray-900 rounded-e-lg cursor-pointer'
                onClick={forwardArrowNav}
                style={parseInt(page) === questions.totalQuestions ? {opacity:0} : {opacity: 10} }
                >
                <BsArrowRight/>
            </div>
        </div>
        {/* Question */}
        <div className='lg:mt-28 h-80'>
            <Question 
            data={question} 
            questionNumber={page} 
            selectedAnswer={selectedAnswer} 
            handleChoice={handleChoice}
            handleAnswerChange={handleAnswerChange}
            />
        </div>
        <div className='lg:hidden flex justify-between mt-14'>
            <button 
            className='w-[48%] rounded py-[10px] px-16'
            onClick={backArrowNav}
            style={parseInt(page) === 1 ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
            >Previous</button>
            <button 
            className='w-[48%] rounded py-[10px] px-16' 
            onClick={forwardArrowNav}
            style={parseInt(page) === questions.totalQuestions ? {background: "white", color: "#0267FF"} : {background: "#0267FF", color: "white"} }
            >Next</button>
        </div> 
        {
            answers.length === questions.totalQuestions ?  <QuizSubmission/> : ''
        }
        </div>
    </div>
    )
}


