import React from 'react';
import star from "../assets/Desktop View/Icons/star.png";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai"

export const Quiz = (props) => {
    const {name, creator, rating, duration, image} = props;
    const border = {border: "1px solid rgba(255, 255, 255, 0.4)"};
    const infoBackground = {background: "rgba(153, 153, 153, 0.4)"}
  return (
    <div className='relative h-80 rounded-lg overflow-hidden'>
        {/* background */}
        <div className='absolute z-20 h-full'>
            <img src={image} alt="" className='h-full object-cover' />
        </div>
        {/*Quiz Info */}
        <div className='relative z-30 border border-black top-[200px] w-11/12 mx-auto rounded-lg backdrop-blur-lg px-6 py-3 text-white' style={{...border, ...infoBackground}}>
            <p className='font-bold'>{name}</p>
            <div className='flex mt-1'>
                <div className='mr-4'>By {creator}</div>
                <div className='flex items-center bg-[#0267FF] rounded-[50px] p-1'>
                    <img src={star} alt="" className='w-3 h-3 mr-1' />
                    <span className='text-xs pr-1'>{rating}</span>
                </div>
            </div>
            <div className='flex justify-between mt-1'>
                <div className='flex items-center'><MdOutlineTimer className='mt-0.5'/> {duration}</div>
                <span className='flex items-center'><AiOutlineEye className='mr-2 mt-0.5'/> {rating}</span>
            </div>
        </div>
    </div>
    )
}
