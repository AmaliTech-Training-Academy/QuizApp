import React, { useState } from 'react'
// import ResetPassword from '../pages/ResetPassword'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner'

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true)
  const notify = () => toast("Please check your email to reset password", {theme:"light",})

  // const [btnClicked, setBtnClicked] = useState(true)

  const URL = "https://nss-quizapp.up.railway.app/api/forgetPassword";

  const handleClick = async(e) =>{
   e.preventDefault();
   try{
     const response = await axios.post(URL, {email});
     setLoading(!loading)
     console.log(response)
     if(response.status === 200){
       notify();
      }
    }catch(error) {
      toast.warn('user does not exist')
    }
  };

  return (
    <form className='items-center font-Roboto m-auto'>
        <div className='flex flex-col '>
      <h2 className='text-[39.81px] font-extrabold text-[#1D2939]'>Forgot Password?</h2>
      <p className='text-base text-[#A6A6A6] mt-8 w-80'>&#34;Oops, I totally forgot my password - time for a quick reset!&#34;</p>
      </div>
      <div className='flex flex-col mt-8'>
        <label htmlFor="E-mail" className='text-gray-400'>E-mail</label>
        <div className='mt-2 mb-8'>
        <input className='w-[300px] h-10 border rounded-md bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E1E1E] pl-5' 
        placeholder="Johndoe@gmail.com" 
        type="email" 
        name="email"
        value={email}
        onChange={(event)=>setEmail(event.target.value)} />
        </div>
        <div className='items-center'>
        {!loading ? (
        <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true}/>
        ): (
          <button className='h-10 w-[300px] bg-[#0267ff]'  onClick={handleClick}>Next</button>
        )}
        
      </div>
      </div>
    </form>
  )
}

export default ForgotPass
