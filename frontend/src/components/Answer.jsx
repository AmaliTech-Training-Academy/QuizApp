import React from 'react'

export const Answer = (props) => {
    const {letter, text, id, value, handleChoice, selectedAnswer} = props;
    // console.log(selectedAnswer);
return (
    <div key={id} className='flex border-2 border-[#737373] lg:border-black rounded-lg p-4 mb-4'>
        <div className='mr-1'>{letter}</div>
        <div>{text}</div>
        <input 
        type='radio' 
        className='ml-auto h-5 w-5 border-2 border-black'
        name='option'
        value={text}
        // checked={selectedAnswer.answer === `option${value}`}
        onChange={handleChoice}/>
    </div>
    )
}
