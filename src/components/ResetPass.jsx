

const ResetPass = () => {
  return (
    <div className='items-center font-Roboto m-auto'>
        <div>
      <h2 className='text-[39.81px] font-extrabold text-[#1D2939]'>Reset Password</h2>
      <p className='text-base text-[#A6A6A6] mt-8 w-80'>&#34;Looks like you forgot your password, no worries- hit that reset button and let&#39;s get you back in!&#34;</p>
      </div>
      <div className='flex flex-col mt-8'>
        <label htmlFor="New password" className="text-gray-400">New Password</label>
        <div className='mt-2 mb-8'>
        <input className='w-[300px] h-10 border-2 rounded focus:outline-none focus:border-[#1E1E1E] pl-5 placeholder="Johndoe@gmail.com"' type="password" id="new-password"/>
        </div>
        <label htmlFor="Confirm password" className="text-gray-400">Confirm Password</label>
        <div className='mt-2 mb-8'>
        <input className='w-[300px] h-10 border-2 rounded focus:outline-none focus:border-[#1E1E1E] pl-5 placeholder="Johndoe@gmail.com"' type="password" id="confirm-password"/>
        </div>
        <button className='h-10 w-[300px] bg-[#0267ff]'>Reset</button>
      </div>
    </div>
  )
}
export default ResetPass