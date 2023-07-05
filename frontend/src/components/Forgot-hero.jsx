import React from 'react'
import sideHero from '../assets/Desktop View/Images/f3bc8635-2f3d-48e0-a3f7-bf5bff42b766 1.png'
import vectImg from '../assets/Desktop View/Images/Group 427318875.png'

const ForgotHero = () => {
  return (
    <div className='relative bg-[#0267ff]'>
      <div>
        <img className='relative w-[710px] z-10' src={sideHero} alt="" />
      </div>
        <img className='absolute w-[769px] top-0' src={vectImg} alt="" />
    </div>
  )
}

export default ForgotHero