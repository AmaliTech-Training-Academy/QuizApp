import React from 'react'
import { Answer } from './Answer';

export const Question = (props) => {
    const answerDesignations = ['A.', 'B.', 'C.', 'D.'];

    const { number, data} = props.data;
    console.log(number, data);
  return (
    <div className='w-8/12 mx-auto text-left'>
    <div className='text-2xl'>{number}. {data.question}</div>
    <div className='grid grid-cols-2 justify-center gap-x-28 gap-y-9 mt-16'>
    { 
        data.answers.map((answer, index) => { 
        const letter = answerDesignations[index % answerDesignations.length];
        return(
            <Answer 
            letter={letter}
            text={answer.text}
            key={answer._id}
            />
        )})
    }
    </div>
    </div>
  )
}
