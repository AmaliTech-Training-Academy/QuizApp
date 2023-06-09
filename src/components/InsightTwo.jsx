import vectImg from '../assets/Desktop View/Images/Vector.png'
import insImg from '../assets/Desktop View/Images/Rectangle 48.png'

const InsightTwo = () => {
  return (
    <div className='md:flex flex-row-reverse justify-between px-[67px] font-Roboto my-20'>
      <div className='flex flex-col gap-8 md:py-[166px] py-[48px] md:text-left md:left-40 md:top-32'>
        <h2 className='text-[#1D2939] md:text-[33.18px] text-[19.96px] text-center font-semibold leading-8'>Get Educational Advices and Tips From Our Professionals</h2>
        <p className='text-[#808080] md:w-[571px] md:text-xl text-[14.5px] md:text-left text-center'>&#34;Gain a competitive edge with our educational professionals. Get expert advice and invaluable tips to enhance your learning journey. Unlock your full potential and achieve academic success with their guidance. Don&#39;t miss out on this opportunity to receive top-notch educational insights from our trusted team.&#34;</p>
        <button className='py-3 px-2 md:h-20 md:w-52'>Sign up for Expert Advice</button>
      </div>
      <div className='pt-20 relative'>
        <img className='absolute md:w-[572px] h-[409.09px] w-[325px] md:h-[566px] top-5 z-10' src={insImg} alt="" />
        <img className=' md:w-[445px] md:h-[446px] h-[302.18px] w-[301.64px] relative md:top-32 top-28' src={vectImg} alt="" />
      </div>
      </div>
  )
}

export default InsightTwo