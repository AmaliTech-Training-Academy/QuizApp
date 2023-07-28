import React from 'react'
import { Answer } from './Answer';
import { ThreeDots } from 'react-loader-spinner';


export const Question = (props) => {
    const { handleChoice, questionNumber, questionIndex, data } = props; 

    const answerDesignations = ['A.', 'B.', 'C.', 'D.'];

    const questions = data;
    const answerOptions = questions && questions[questionIndex].answers;
    
    if (!questions || questions.length === 0 || questionNumber === undefined) {
        return <div className='mx-auto flex justify-center items-center'>Please wait...<ThreeDots color='#0267FF'/></div>;
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
