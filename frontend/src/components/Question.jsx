import React from 'react'
import { Answer } from './Answer';

export const Question = (props) => {
    const answerDesignations = ['A.', 'B.', 'C.', 'D.'];

    const { number, data} = props.data;
    // console.log(number, data);
  return (
    <div className='lg:w-8/12 mx-auto text-left text-[#737373] lg:text-black'>
    <div className='lg:text-2xl'>{number}. {data.question}</div>

    <div className='lg:grid lg:grid-cols-2 justify-center lg:gap-x-28 lg:gap-y-9 gap-y-4 lg:mt-16 mt-4'>
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
