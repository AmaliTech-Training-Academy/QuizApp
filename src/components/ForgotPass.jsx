import React, {useState} from 'react'
import ResetPass from './ResetPass'

const ForgotPass = () => {
  const [confirmMail, setConfirmMail] = useState(false)
  const [btnClicked, setBtnClicked] = useState(true)
  const handleClick = async(e) =>{
   e.preventDefault()
   setBtnClicked(false)
   setConfirmMail(true)
  }

  return (
    <form className='items-center font-Roboto m-auto'>
      {btnClicked && 
        <>
        <div className='flex flex-col '>
      <h2 className='text-[39.81px] font-extrabold text-[#1D2939]'>Forgot Password?</h2>
      <p className='text-base text-[#A6A6A6] mt-8 w-80'>&#34;Oops, I totally forgot my password - time for a quick reset!&#34;</p>
      </div>
      <div className='flex flex-col mt-8'>
        <label htmlFor="E-mail" className='text-gray-400'>E-mail</label>
        <div className='mt-2 mb-8'>
        <input className='w-[300px] h-10 border rounded-md bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E1E1E] pl-5' placeholder="Johndoe@gmail.com" type="email" id="E-mail"/>
        </div>
        <button className='h-10 w-[300px] bg-[#0267ff]'  onClick={handleClick}>Next</button>
      </div>
        </>
      }
      {confirmMail && <ResetPass/>}
      
    </form>
  )
}

export default ForgotPass