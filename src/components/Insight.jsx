
import insImg from '../assets/Desktop View/Images/Rectangle 28.png'
import vectImg from '../assets/Desktop View/Images/Vector.png'

const Insight = () => {
  return (
    <div className='md:flex bg-gray-200 md:h-[610px] h-[843px] border-4 border-green-900'>
      <div className='relative flex flex-col gap-8 md:w-3/4 h-28 text-left md:left-40 md:top-32 border-4 border-green-900'>
        <h2 className='text-[#1D2939] md:text-4xl font-semibold font-Roboto'>Knowledge at Your Fingertips, Quiz with Confidence!</h2>
        <p className='text-[#808080] md:w-[571px] md:text-xl'>Join our quiz app to expand your knowledge and challenge your skills with engaging quizzes anytime, anywhere.&#34;Experience fun, excitement, and learning in one place with our user-friendly quiz app that guarantees a confident quiz-taking experience.&#34;</p>
        <button className='px-3 py-5 h-20 w-52'>Start your quiz now</button>
      </div>
      <div className='relative'>
        <img className='absolute md:w-[378px] h-[398px] md:h-[566px] top-11 z-10' src={insImg} alt="" />
        <img className=' w-[445px] h-[446px] relative top-[63px]' src={vectImg} alt="" />
      </div>
      </div>
  )
}

export default Insight