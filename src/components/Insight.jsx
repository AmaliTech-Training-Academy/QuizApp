
import insImg from '../assets/Desktop View/Images/Rectangle 28.png'
import vectImg from '../assets/Desktop View/Images/Vector.png'

const Insight = () => {
  return (
    <div className='md:flex justify-between px-[67px] bg-[#F2F2F2] font-Roboto'>
      <div className='flex flex-col  gap-8 py-[166px] text-left md:left-40 md:top-32'>
        <h4 className='text-[#1D2939] md:text-[33.18px] text-[27.65px] text-center font-semibold'>Knowledge at Your Fingertips, Quiz with Confidence!</h4>
        <p className='text-[#808080] md:w-[571px] md:text-xl'>Join our quiz app to expand your knowledge and challenge your skills with engaging quizzes anytime, anywhere.&#34;Experience fun, excitement, and learning in one place with our user-friendly quiz app that guarantees a confident quiz-taking experience.&#34;</p>
        <button className='px-3 py-5 h-20 w-52'>Start your quiz now</button>
      </div>
      <div className='pt-20 relative'>
        <img className='md:w-[378px] h-[398px] md:h-[566px] relative z-20' src={insImg} alt="" />
        <img className=' w-[445px] h-[446px] absolute top-32 z-10' src={vectImg} alt="" />
      </div>
    </div>
  )
}

export default Insight