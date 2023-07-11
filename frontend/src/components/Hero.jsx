
import bgImg from '../assets/DesktopView/Images/Pexels-Photo-by-Liza-Summer.png'
import imageUrl from '../assets/MobileView/Images/Pexels-Photo-by-Liza-Summer.png';

import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div name="home" className=' mt-18'>
        <div className='relative'>
            <div className='bg-gray-800/70'>
                <img className='hidden lg:block w-full h-screen object-cover mix-blend-soft-light' src={bgImg} alt="Girl with Laptop" />
                <img className='md:hidden mix-blend-overlay' src={imageUrl} alt="Girl with Laptop" />
            </div>
            <div className='flex flex-col gap-8 items-center sm:w-[300px] md:w-[860px] md:h-[363px] absolute top-16 md:top-[225px] md:left-[28%] text-center font-Roboto'>
                <h1 className='text-white font-extrabold text-3xl md:text-5xl md:leading-[55.99px]'>Enjoy a User-Friendly Interface and Interactive Quiz Experience!</h1>
                <p className='flex flex-wrap text-white font-Roboto w-[358px] text-[16px] md:w-[770px] md:h-[107px] md:text-xl text-center'>Want to expand your knowledge and challenge your brain? Look no further than QuizMaster - the ultimate quiz platform! With a range of quizzes on any topic imaginable, QuizMaster makes learning fun and engaging.</p>
                <NavLink to={"/signup"}>
                <button className='px-[25px] py-[21.5px] flex items-center bg-[#0267ff]'>Get Started <IoIosArrowForward className='ml-2'/></button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Hero