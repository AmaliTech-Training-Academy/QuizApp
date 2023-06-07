
import bgImg from '../assets/Desktop View/Images/Pexels Photo by Liza Summer.png'

const Hero = () => {
  return (
    <div className='w-full mt-18 top-[76px]'>
        <div className='relative'>
            <div className='bg-gray-700/90'>
                <img className='w-full h-screen object-cover mix-blend-overlay' src={bgImg} alt="" />
            </div>
            <div className='flex flex-col gap-8 items-center md:w-[860px] md:h-[363px] absolute md:top-[225px] md:left-[25%] text-center'>
                <h1 className='text-white font-extrabold text-5xl'>Enjoy a User-Friendly Interface and Interactive Quiz Experience!</h1>
                <p className='flex flex-wrap text-white w-[770px] h-[107px] font-normal text-xl'>Want to expand your knowledge and challenge your brain? Look no further than QuizMaster - the ultimate quiz platform! With a range of quizzes on any topic imaginable, QuizMaster makes learning fun and engaging.</p>
                <button className='h-20 w-52'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero