import React from 'react'

export const Answer = (props) => {
    const {letter, text, id} = props;
  return (
    <div key={id} className='flex border-2 border-[#737373] rounded-lg p-4'>
        <div>{letter}</div>
        <div>{text}</div>
        <input type='radio' className='ml-auto h-5 w-5 border-2 border-black'/>
    </div>
  )
}
