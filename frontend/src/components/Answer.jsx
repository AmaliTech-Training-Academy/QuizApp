import React from 'react'
import { useSelector } from 'react-redux';


export const Answer = (props) => {
    const {letter, text, id, handleChoice, } = props;

    const answers = useSelector((state)=>state.answers);
    const checked = answers.some((answer) => answer.answer === text);

    const selectedAnswer = {
        border: '2px solid #0267FF',
        background: '#D3DCE9',
        color: '#0267FF',
    }

    console.log(answers, checked);

return (
    <div 
    key={id} 
    className='flex border-2 border-[#737373] lg:border-black rounded-lg p-4 mb-4'
    style={checked ? selectedAnswer : undefined}>
        <div className='mr-1'>{letter}</div>
        <div>{text}</div>
        <input 
        type='radio' 
        className='ml-auto h-5 w-5 border-2 border-black'
        name='option'
        value={text}
        checked={checked}
        onChange={handleChoice}/>
    </div>
    )
}
