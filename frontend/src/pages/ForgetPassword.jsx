// import React from 'react'
import ForgotPass from '../components/ForgotPass'
import Gallery from '../components/gallery/Gallery'
// import ResetPass from '../components/ResetPass'

const ForgetPassword = () => {
  return (
    <div className='grid grid-cols-2 w-[100vw] h-[100vh]'>
      <Gallery page="forgetpassword"/>
      <ForgotPass/>
    </div>
  )
}

export default ForgetPassword