import React from 'react'
import { Reviews } from './Reviews';
import fowardArrow from "../assets/Desktop View/Icons/arrow_forward.png"
import backArrow from "../assets/Desktop View/Icons/arrow_forward-1.png"

export const CustomerReviews = () => {

  const arrowBg = {
    background: "linear-gradient(0deg, #0267FF, #0267FF), linear-gradient(118.19deg, #1275D0 21.37%, #62AEF3 69.77%)"
  };

  const backArrowBorder = {
    background: 'linear-gradient(118.19deg, #0267FF 21.37%, #62AEF3 69.77%)',
  };


  return (
    <div className='border border-black mx-4 lg:mx-16'>
    <div className='text-2xl font-semibold text-center mb-9 mx-2 border lg:w-5/12 lg:mx-auto xl:w-3/12'>Trusted By Thousands of Happy Customers</div>
    {/* Reviews */}
    <div className='lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-16'>
    <Reviews/>
    <Reviews/>
    <Reviews/>
    </div>
    {/* Buttons */}
    <div className='border flex justify-between mt-5'>
    <div></div>
    <div className='flex'>
      <div className='border rounded-full w-12 h-12 mr-2.5 flex items-center justify-center' style={backArrowBorder}>
        <div className='w-11 h-11 rounded-full flex items-center justify-center' style={{background: "#fff"}}>
        <img src={backArrow} alt="" className='w-8 h-8' />
        </div>
        <div/>
      </div>
      <div className='w-12 h-12 flex items-center justify-center rounded-full' style={arrowBg}>
      <img src={fowardArrow} alt="" className='rounded-full w-8 h-8'/>
      </div>
    </div>
    </div>
    </div>
  )
};


