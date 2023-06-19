import React, {useState} from 'react'
import ResetPassword from '../pages/ResetPassword'
import axios from 'axios';

const ForgotPass = () => {
  const [userMail, setUserMail] = useState("");
  const notify = () => toast("You have subscribed successfully!", {theme:"light",})

  const [btnClicked, setBtnClicked] = useState(true)

  const URL = "https://nss-quizapp.up.railway.app/api/forgetPassword";

  const handleClick = async(e) =>{
   e.preventDefault();
   const data = {userMail}
   const response = await axios.post(URL, data);
   if(response.status === 201){
    console.log('success')
    notify();
    setUserMail("");
   }else{
    console.log('error');
   }
  };

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
        <input className='w-[300px] h-10 border rounded-md bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E1E1E] pl-5' 
        placeholder="Johndoe@gmail.com" 
        type="email" 
        name="email"
        value={userMail}
        onChange={(event)=>setUserMail(event.target.value)} />
        </div>
        <button className='h-10 w-[300px] bg-[#0267ff]'  onClick={handleClick}>Next</button>
      </div>
        </>
      }
      {confirmMail && <ResetPassword/>}
      
    </form>
  )
}

export default ForgotPass