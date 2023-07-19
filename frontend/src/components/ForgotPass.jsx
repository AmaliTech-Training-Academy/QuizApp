import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner'
import { useSelector } from 'react-redux';


const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true)
  const [buttonClicked, setButtonClicked] = useState(false)
  const notify = () => toast("Please check your email to reset password", {theme:"light",})

  const token = useSelector(state=> state.userData.user_token);


  const handleClick = async(e) =>{
   e.preventDefault();
   setButtonClicked(true)
   if(email !== '' ){
    try{
      const URL = "https://quiz-master.onrender.com/api/users/forgetPassword";
    //   const headers = {
    //     'Authorization': `Bearer ${token}`
    // };
    const response = await axios.post(URL, {email});
    console.log(response);
    // return response.data;
      // const response = await axios.post(URL, {email});
      setLoading(!loading)
      if(response.status === 200){
        notify(); 
       }
       setTimeout(() => {
        setLoading(true)
      }, 2000)
     }catch(error) {
       toast.warn(error.response.data.message)
     }
   }
  };

  return (
    <form className='items-center font-Roboto mt-20 lg:m-auto w-[350px]'>
        <div className='flex flex-col items-center'>
      <h2 className='text-[39.81px] font-extrabold text-[#1D2939] self-start'>Forgot Password?</h2>
      <p className='text-base text-[#A6A6A6] mt-8'>&#34;Oops, I totally forgot my password - time for a quick reset!&#34;</p>
      </div>
      <div className='flex flex-col mt-8 items-center'>
        <label htmlFor="E-mail" className='text-gray-400 self-start'>E-mail</label>
        <div className='mt-2 mb-8 w-full'>
        <input className='w-full h-10 border rounded-md bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E1E1E] pl-5 pr-5' 
        placeholder="Johndoe@gmail.com" 
        type="email" 
        name="email"
        value={email}
        onChange={(event)=>setEmail(event.target.value)} required/>
        { buttonClicked && email === '' &&
          <p className='text-red-400'>Enter your Email.</p>
      }
        </div>
        
        
        {!loading ? (
        <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true}/>
        ): (
          <button className='h-10 w-full bg-[#0267ff]'  onClick={handleClick}>Next</button>
        )}
        
      </div>
    </form>
  )
}

export default ForgotPass
