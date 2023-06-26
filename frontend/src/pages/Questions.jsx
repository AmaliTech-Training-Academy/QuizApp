import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTopics } from '../features/topicSlice';
import { Question } from '../components/Question';
import { MdOutlineTimer } from "react-icons/md";



export const Questions = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch();

    const [quizData, setQuizData] = useState(null);

    const {data:topics} = useSelector((state) => state.topics);

    // console.log(id, quizData);

    useEffect(()=> {
        if(!quizData){
        dispatch(getTopics())
        }

    setQuizData(topics)
    },[topics]);

    const quiz = topics.filter(topic => topic._id === id);
    const questions = quiz[0].questions;
    const [question, setQuestion] = useState(
        {number: 1,
        data: questions[0]});

    console.log(question);

    return (
    <div>
        <Navbar/>
        <div className='py-10 px-16 bg-[#0267FF] lg:text-white font-semibold flex justify-between' id='quiz-header'>
            <div className='text-2xl font-semibold'>Test your knowledge on {quiz[0].topic}</div>
            <div className='text-2xl font-semibold'>Question {question.number} of {questions.length}</div>
            <div className='flex items-center text-2xl font-semibold'><MdOutlineTimer className='w-7 h-8 mr-3'/> 00:59:00</div>
        </div>
        <div>
            <Question data={question}/>
        </div>
    </div>
  )
}
