import { useState } from 'react'
import Api from './forms/services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import AddPhoto from './forms/uploadPhoto/AddPhoto'
import { RotatingLines } from 'react-loader-spinner'

export const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(true)

  const handlePassword = async e => {
    const id = Cookies.get('id')
    e.preventDefault()
    if (
      currentPassword !== '' &&
      newPassword !== '' &&
      confirmPassword !== ''
    ) {
      if (newPassword === confirmPassword) {
        try {
          setLoading(!loading)
          const response = await Api.patch(`users/account/${id}/password`, {
            currentPassword,
            newPassword,
            confirmPassword
          })
          toast.success(response.data.message)
          setTimeout(() => {
            setLoading(true)
          }, 3000);
        } catch (error) {
          toast.warn(error.response.data.message)
          setTimeout(() => {
            setLoading(true)
          }, 3000);
        }
      }
    }
  }

  return (
    <form className="md:mt-[100px]  px-8 md:px-0" onSubmit={handlePassword}>
      <div className="mb-[48px]">
        <label>Current password*</label>
        <div className="mt-[8px] md:w-fit">
          <input
            className="border py-[0.5rem] px-[1rem] w-full"
            type="password"
            name="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-[48px]">
        <label>New Password*</label>
        <div className="mt-[8px] md:w-fit">
          <input
            className="border py-[0.5rem] px-[1rem] w-full"
            type="password"
            name="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-[18px]">
        <label>Confirm New password*</label>
        <div className="mt-[8px] md:w-fit">
          <input
            className="border py-[0.5rem] px-[1rem] w-full"
            type="password"
            name="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </div>
      {!loading ? ( <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true}/>
      ):(
      <button
        className="p-[0.5rem] w-max h-fit self-center mt-[34px] bg-[#0267FF]">
        Save changes
      </button>)}
      
    </form>
  )
};

// Update Profile name, email, location and contact

export const UpdateProfile = () => {
  const [email, setEmail] = useState(Cookies.get('email'))
  const [name, setName] = useState(Cookies.get('name'))
  const [contact, SetContact] = useState('')
  const [location, setLocation] = useState('')
  const [gender, setGender] = useState();

  const handleProfileUpdate = async e =>{
    const id = Cookies.get('id')
    e.preventDefault()
    const data = {name, email, contact, location, gender}
    try {
      const response = await Api.patch(`users/account/${id}/details`, data)
      toast.success(response.data.message)
    } catch (error) {
      const err = error.response.data.message
      toast.warn(err)
    }
    
  }

  return (
    <div className="lg:ml-[5rem] 2xl:ml-[-3rem]" >
      <div className='hidden md:block'><AddPhoto component='updateProfile'/></div>
      <form onSubmit={handleProfileUpdate} className='px-8 md:px-0'>
      <div className="md:mt-[41px] md:grid md:grid-cols-2 md:gap-[1.5rem] md:w-fit">
        <div className=''>
          <label>Full Name* </label>
          <div className="mt-[8px] md:w-fit ">
            <input
              className="border py-[0.5rem] px-[1rem] rounded w-full"
              placeholder={Cookies.get('name')}
              type="text"
              value={name}
              onChange = {e=>setName(e.target.value)}
            />
          </div>
        </div>
        <div className=' md:mt-[0px] mt-[24px]'>
          <label htmlFor='email'>Email*</label>
          <div className="mt-[8px] md:w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded w-full"
              placeholder={Cookies.get('email')}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
            />
          </div>
        </div>
        <div className=' md:mt-[0px] mt-[24px]'>
          <label htmlFor='contact'>Contact</label>
          <div className="mt-[8px] md:w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded w-full"
              type="tel"
              name='contact'
              value={contact}
              onChange={e=>SetContact(e.target.value)}
            />
          </div>
        </div>
        <div className=' md:mt-[0px] mt-[24px]'>
          <label htmlFor='location'>Location</label>
          <div className="mt-[8px] md:w-fit">
            <input className="border py-[0.5rem] px-[1rem] rounded w-full"
            name='location' 
            value={location}
            onChange={e=>setLocation(e.target.value)}/>
          </div>
        </div>
        <div className="flex gap-[3rem]  md:mt-[0px] mt-[24px]" >
          <div>
            <input className="border" type="radio" value='male' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender'>Male</label>
          </div>
          <div>
            <input className="border" type="radio" value='female' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender'>Female</label>
          </div>
        </div>
      </div>
      <button className="p-[0.5rem] w-max h-fit self-center mt-[34px] bg-[#0267FF]">
        Save changes
      </button>
      </form>
    </div>
  )
}
