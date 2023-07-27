import React, { useEffect, useState} from 'react'
import { Answer } from './Answer';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../features/quizSlice';


export const Question = (props) => {
    const { handleChoice, questionNumber, questionIndex } = props; 
    // const dispatch = useDispatch();

    const answerDesignations = ['A.', 'B.', 'C.', 'D.'];
    
    const token = useSelector(state=> state.userData.user_token)

    
    const quiz = useSelector(state=> state.quiz)
    const isRunning = quiz.isRunning;
    const questionInfo = quiz.data;
    const questions = questionInfo.questions;
    const sure = useSelector(state => state.sure);
    const answerOptions = questions && questions[questionIndex].answers;
    const chosenAnswers = useSelector(state=> state.answers.answersData);
    console.log(chosenAnswers);

    
    if (!questions || questions.length === 0 || questionNumber === undefined) {
        return <p>Please wait...</p>;
    }
    
return (
    <div className='lg:w-8/12 mx-auto text-left text-[#737373] lg:text-black'>
    { 
        <>
            <div className='lg:text-2xl'>{questionNumber}. {questions[questionIndex].question} </div>
            <div className='lg:grid lg:grid-cols-2 justify-center lg:gap-x-28 lg:gap-y-9 gap-y-4 lg:mt-16 mt-4'>
            { 
                answerOptions?.map((answer, index) => { 
                    const letter = answerDesignations[index % answerDesignations.length];
                    return(
                        <Answer 
                        letter={letter}
                        text={answer.text}
                        key={answer._id}
                        handleChoice={handleChoice}
                        />
                        )})
                    }
            </div>
        </>
    }
    </div>
  )
}
