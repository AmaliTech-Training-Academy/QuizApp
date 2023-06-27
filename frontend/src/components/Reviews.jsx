import React from 'react';
import star from "../assets/Desktop-View/Icons/star.png";
import profileImg from "../assets/Ellipse-18.png"

export const Reviews = (props) => {
  const {name, location, rating, content, id} = props;

  
  return (
    <div className='border-4 lg:border-[1px] border-[#1275D0] hover:border-[#1275D0] hover:border-[3px] lg:border-black rounded-lg px-2 py-4 lg:w-[420px]' id={id}>
        <div className='flex items-center'>
            <img className='w-20 h-20 border rounded-full mr-2' src={profileImg} alt="" />
            <div className=''>
              <div className='text-lg font-bold'>{name}</div>
              <div>{location}</div>
            </div>
            <div className='flex ml-auto font-bold'>{rating} <img className='w-5 h-5 ml-2.5' src= {star} alt="" /></div>
        </div>
        <div className='mt-4'>
          <p>
            {content}
          </p>
        </div>
    </div>
  )
}
