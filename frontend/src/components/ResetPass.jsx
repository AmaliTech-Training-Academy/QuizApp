import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { RotatingLines } from 'react-loader-spinner'

const ResetPass = () => {
  const{id} = useParams()
  const navigate = useNavigate();

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(true);

  // Get the current URL
  const currentUrl = window.location.href;

  // Create a URLSearchParams object
  const searchParams = new URLSearchParams(new URL(currentUrl).search);
  const token = searchParams.get('token');
 
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    
    if(password !== '' && password === confirmPassword){
      try{
        const url = `https://nss-quizapp.up.railway.app/api/users/resetPassword/${id}/${token}`;
        const response = await axios.post(url, {password});
        setLoading(!loading)
        if(response.status === 200){
          toast.success(response.data.message)
        }
        setTimeout(() => {
          setLoading(true)
        }, 2000)
        navigate('login')
        
  }catch (error){
    toast.warn('response error')
  }
}else{
  setAlert('Password mismatch')
  }
};

  return (
    <form className='items-center font-Roboto mt-20 lg:m-auto w-[350px]'onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
      <h2 className='text-[39.81px] font-extrabold text-[#1D2939] self-start'>Reset Password</h2>
      {password !== confirmPassword && <p className="text-red-400  self-start" >{alert}</p>}
      <p className='text-base text-[#A6A6A6] mt-8'>&#34;Looks like you forgot your password, no worries- hit that reset button and let&#39;s get you back in!&#34;</p>
      </div>

      <div className='flex flex-col mt-8 items-center'>
        <label htmlFor="New password" className='text-gray-400 self-start'>New Password</label>
        <div className='mt-2 mb-8 w-full'>
        <input className='w-full h-10 border rounded-md bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E1E1E] pl-5 pr-5' 
        placeholder="********" 
        type="password"
        value={password}
          onChange={e=>setPassword(e.target.value)} 
        id="new-password"/>
        </div>

        <label htmlFor="Confirm password" className="text-gray-400 self-start">Confirm Password</label>
        <div className='mt-2 mb-8 w-full'>
        <input className='w-full h-10 border rounded-md bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E1E1E] pl-5 pr-5'
        placeholder="*******" 
        type="password"
        value={confirmPassword}
          onChange={e=>setConfirmPassword(e.target.value)} 
        id="confirmPassword"
        />
        </div>
        {!loading ? (
        <div className='lg:ml-[120px]'><RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true}/></div>
        ): (
          <button className='h-10 w-full bg-[#0267ff]'  type="submit">Reset</button>
        )}
      </div>
    </form>
  )
}
export default ResetPass