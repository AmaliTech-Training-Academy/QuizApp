import React, { useState} from 'react'
import { Answer } from './Answer';

export const Question = (props) => {
    const {selectedAnswer, handleChoice, chosenAnswers } = props;
    const {data, answers} = props.data;
    const page  = props.questionNumber;

    // console.log(chosenAnswers);
    

    const answerDesignations = ['A.', 'B.', 'C.', 'D.'];
    // console.log(answers);

return (
    <div className='lg:w-8/12 mx-auto text-left text-[#737373] lg:text-black'>
    <div className='lg:text-2xl'>{page}. {data}</div>

    <div className='lg:grid lg:grid-cols-2 justify-center lg:gap-x-28 lg:gap-y-9 gap-y-4 lg:mt-16 mt-4'>
    { 
        answers?.map((answer, index) => { 
        const letter = answerDesignations[index % answerDesignations.length];
        return(
            <Answer 
            letter={letter}
            text={answer.text}
            key={answer._id}
            handleChoice={handleChoice}
            selectedAnswer={selectedAnswer}
            chosenAnswers={chosenAnswers}
            handle
            />
        )})
    }
    </div>
    </div>
  )
}
