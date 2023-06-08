import vectImg from '../assets/Desktop View/Images/Vector.png'
import insImg from '../assets/Desktop View/Images/Rectangle 48.png'

const InsightTwo = () => {
  return (
    <div className='md:flex md:h-[842px] h-[843px] border-4 border-green-900 my-32'>
      <div className='relative'>
        <img className='absolute md:w-[px] h-[398px] md:h-[566px] top-11 z-10' src={insImg} alt="" />
        <img className=' w-[445px] h-[446px] relative top-[63px]' src={vectImg} alt="" />
      </div>
      <div className='relative flex flex-col gap-8 md:w-[642px] h-28 text-left md:left-40 md:top-32 border-4 border-green-900'>
        <h2 className='text-[#1D2939] md:text-4xl font-semibold font-Roboto'>Get Educational Advices and Tips From Our Professionals</h2>
        <p className='text-[#808080] md:w-[571px] md:text-xl'>&#34;Gain a competitive edge with our educational professionals. Get expert advice and invaluable tips to enhance your learning journey. Unlock your full potential and achieve academic success with their guidance. Don&#39;t miss out on this opportunity to receive top-notch educational insights from our trusted team.&#34;</p>
        <button className='px-3 py-5 h-20 w-52'>Sign up for Expert Advice</button>
      </div>
      </div>
  )
}

export default InsightTwo