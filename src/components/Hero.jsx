import React from 'react'
import bgImg from '../assets/Desktop View/Images/Pexels Photo by Liza Summer.png'

const Hero = () => {
  return (
    <div className='w-full mt-18'>
        <div className='relative'>
            <div className='w-full h-[850px]'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="" />
            </div>
            <div className='items-center absolute top-10 left-10'>
                <h1>Enjoy a User-Friendly Interface and Interactive Quiz Experience!</h1>
                <p>Want to expand your knowledge and challenge your brain? Look no further than QuizMaster - the ultimate quiz platform! With a range of quizzes on any topic imaginable, QuizMaster makes learning fun and engaging.</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero