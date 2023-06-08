
import bgImg from '../assets/Desktop View/Images/Pexels Photo by Liza Summer.png'

const Hero = () => {
  return (
    <div className=' mt-18'>
        <div className='relative'>
            <div className='bg-gray-700/90'>
                <img className='w-full h-screen object-cover mix-blend-overlay' src={bgImg} alt="" />
            </div>
            <div className='flex flex-col gap-8 items-center md:w-[860px] md:h-[363px] absolute top-16 md:top-[225px] md:left-[28%] text-center font-Roboto'>
                <h1 className='text-white font-extrabold text-3xl md:text-5xl md:leading-[55.99px]'>Enjoy a User-Friendly Interface and Interactive Quiz Experience!</h1>
                <p className='flex flex-wrap text-white w-[358px] text-lg md:w-[770px] md:h-[107px] md:text-xl'>Want to expand your knowledge and challenge your brain? Look no further than QuizMaster - the ultimate quiz platform! With a range of quizzes on any topic imaginable, QuizMaster makes learning fun and engaging.</p>
                <button className='px-4 py-4 md:h-20 md:w-52'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero