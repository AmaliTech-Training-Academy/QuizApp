import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const ResetPass = () => {
  const{id, token} = useParams()
  const getToken = token.replaceAll('-', '.')
  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alert, setAlert] = useState('')
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const url = 'https://nss-quizapp.up.railway.app/api/resetPassword/:id/:token'
    
    if(password === confirmPassword){
      try{
        console.log(getToken);
        const response = await axios.post(url,{password},{
          headers:{
            'Authorization': `Bearer ${getToken}`
      }
    }
        );
        console.log(response)
  }catch (error){
    toast.warn(error.response.data.message)
    console.log(error.response.data.message)
  }
}else{
  setAlert('Password mismatch')
  }
}
  return (
    <form className='items-center font-Roboto m-auto'onSubmit={handleSubmit}>
        <div>
      <h2 className='text-[39.81px] font-extrabold text-[#1D2939]'>Reset Password</h2>
      {password !== confirmPassword && <p className="text-pink-700 p-2 mb-4" >{alert}</p>}
      <p className='text-base text-[#A6A6A6] mt-8 w-80'>&#34;Looks like you forgot your password, no worries- hit that reset button and let&#39;s get you back in!&#34;</p>
      </div>

      <div className='flex flex-col mt-8'>
        <label htmlFor="New password" className="text-gray-400">New Password</label>
        <div className='mt-2 mb-8'>
        <input className='w-[300px] h-10 border-2 rounded focus:outline-none focus:border-[#1E1E1E] pl-5'
        placeholder="********" 
        type="password"
        value={password}
          onChange={e=>setPassword(e.target.value)} 
        id="new-password"/>
        </div>

        <label htmlFor="Confirm password" className="text-gray-400">Confirm Password</label>
        <div className='mt-2 mb-8'>
        <input className='w-[300px] h-10 border-2 rounded focus:outline-none focus:border-[#1E1E1E] pl-5'
        placeholder="*******" 
        type="password"
        value={confirmPassword}
          onChange={e=>setConfirmPassword(e.target.value)} 
        id="confirmPassword"
        />
        </div>
        <button className='h-10 w-[300px] bg-[#0267ff]' type="submit">Reset</button>
      </div>
    </form>
  )
}
export default ResetPass