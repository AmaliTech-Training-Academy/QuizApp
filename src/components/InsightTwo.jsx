import vectImg from '../assets/Desktop View/Images/Vector.png'
import insImg from '../assets/Desktop View/Images/Rectangle 48.png'

const InsightTwo = () => {
  return (
    <div className='md:flex justify-between px-[67px] font-Roboto my-20'>
      <div className='pt-20 relative'>
        <img className='absolute md:w-[572px] h-[398px] md:h-[566px] top-5 z-10' src={insImg} alt="" />
        <img className=' w-[445px] h-[446px] relative top-32' src={vectImg} alt="" />
      </div>
      <div className='flex flex-col gap-8 py-[166px] text-left md:left-40 md:top-32'>
        <h2 className='text-[#1D2939] md:text-[33.18px] text-[19.96px] text-center font-semibold leading-8'>Get Educational Advices and Tips From Our Professionals</h2>
        <p className='text-[#808080] md:w-[571px] md:text-xl'>&#34;Gain a competitive edge with our educational professionals. Get expert advice and invaluable tips to enhance your learning journey. Unlock your full potential and achieve academic success with their guidance. Don&#39;t miss out on this opportunity to receive top-notch educational insights from our trusted team.&#34;</p>
        <button className='py-3 px-2 md:h-20 md:w-52'>Sign up for Expert Advice</button>
      </div>
      </div>
  )
}

export default InsightTwo