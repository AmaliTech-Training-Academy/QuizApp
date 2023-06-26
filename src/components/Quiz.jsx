import React from 'react';
import star from "../assets/Desktop View/Icons/star.png";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
// import { quizPhotos } from './QuizPhotos';

export const Quiz = (props) => {
    const {name, creator, rating, duration, image, id} = props;
    const border = {border: "1px solid rgba(255, 255, 255, 0.4)"};
    const infoBackground = {background: "rgba(153, 153, 153, 0.4)"};
  return (
    <div key={id}>
        <div className='relative h-80 rounded-lg overflow-hidden'>
        {/* background */}
        <div className='absolute z-20 h-full'>
            <img src={image} alt="" className='h-full object-cover' />
        </div>
        {/*Quiz Info */}
        <div className='relative z-30 border border-black top-[235px] lg:top-[200px] w-11/12 h-28 mx-auto rounded-lg backdrop-blur-lg lg:px-2 py-3 px-[14px] text-white' style={{...border, ...infoBackground}}>
            <div className='flex flex-col absolute top-0 lg:relative'>
                {/* Quiz Name & Creator*/}
                <div>
                <p className='font-bold hidden lg:block'>{name}</p>
                </div>
                <div className='hidden lg:flex'>
                    <div className='lg:mr-4 xl:mr-2'>By {creator}</div>
                    <div className='flex items-center justify bg-[#0267FF] rounded-[50px] p-1 h-6 mt-auto absolute lg:relative lg:bottom-4 lg:right-0'>
                        <img src={star} alt="" className='w-3 h-3 mr-1' />
                        <span className='text-xs pr-1'>{rating}</span>
                    </div>
                </div>
                <div className='lg:hidden text-sm flex items-center'>
                    <MdOutlineTimer className='mt-1 mr-1'/> By {creator}
                </div>
            </div>
            <div className='flex justify-between mt-3 absolute lg:relative lg:bottom-2'>
                <div className='hidden lg:flex items-center'><MdOutlineTimer className='mt-0.5 w-5 h-3 lg:w-4 lg:h-4 lg:mr-2'/> {duration}</div>
                <span className='flex items-center text-xs absolute top-0 lg:relative'><AiOutlineEye className='mr-2 mt-0.5'/> {rating}</span>
            </div>
        </div>
    </div>
        <div className='text-black lg:hidden mt-2'>
            <div className='font-semibold'>{name}</div>
            <div className='text-xs opacity-50'>{creator}</div> 
        </div>
    </div>
    
    )
}
