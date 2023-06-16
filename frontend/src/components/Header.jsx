import React from 'react'

export const Header = (props) => {
  const {page} = props;
  return (
    <div className='py-11 bg-[#0267FF] text-white text-5xl font-semibold flex justify-center'>
      {page}
    </div>
  )
}
