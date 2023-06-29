// import ForgotPass from '../components/ForgotPass'
import Gallery from '../components/gallery/Gallery'
import ResetPass from '../components/ResetPass'

const ForgetPassword = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 flex justify-center w-[100vw] h-[100vh] px-4 lg:px-0'>
      <Gallery page="forgetpassword"/>
      <ResetPass/>
    </div>
  )
}

export default ForgetPassword