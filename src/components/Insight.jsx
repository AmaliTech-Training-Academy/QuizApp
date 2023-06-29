
import insImg from '../assets/Desktop View/Images/Rectangle 28.png'
import vectImg from '../assets/Desktop View/Images/Vector.png'

const Insight = () => {
  return (
    <div className='relative md:flex justify-between px-[67px] bg-[#F2F2F2] font-Roboto'>
      <div className='flex flex-col  gap-8 md:py-[166px] py-[48px] md:text-left md:left-40 md:top-32'>
        <h4 className='text-[#1D2939] md:text-[33.18px] text-[27.65px] text-center font-semibold'>Knowledge at Your Fingertips, Quiz with Confidence!</h4>
        <p className='text-[#808080] md:w-[571px] md:text-xl text-[12.5px] md:text-left text-center'>Join our quiz app to expand your knowledge and challenge your skills with engaging quizzes anytime, anywhere.&#34;Experience fun, excitement, and learning in one place with our user-friendly quiz app that guarantees a confident quiz-taking experience.&#34;</p>
        <button className='py-3 px-2 md:h-20 md:w-52'>Start your quiz now</button>
      </div>
      <div className='pt-20 relative'>
        <img className='md:w-[378px] h-[398px] md:h-[566px] relative z-20' src={insImg} alt="" />
        <img className=' md:w-[445px] md:h-[446px] h-[313px] w-[313px] absolute md:top-32 top-28 z-10' src={vectImg} alt="" />
      </div>
      <span className='design-spot-mobile lg:w-[91px] lg:h-[89px] lg:bottom-0 lg:left-20 lg:bg-[#DF9BE0] '></span>
        <span className='design-spot-mobile lg:right-[52px] lg:top-5 lg:w-[91px] lg:h-[89px] lg:bg-[#DF9BE0]'></span>
        <span className='design-spot-mobile right-4 lg:left-[75%] lg:top-[75%] lg:w-[91px] lg:h-[89px] z-20'></span>
        <span className='design-spot-mobile lg:w-[135px] lg:h-[135px] lg:left-[900px] lg:top-96  lg:bg-[#FFFFFF] z-10'></span>
    </div>
  )
}

export default Insight