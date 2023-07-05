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
    <form className="mt-[100px] mr-[5rem]" onSubmit={handlePassword}>
      <div className="mb-[48px]">
        <label>Current password*</label>
        <div className="mt-[8px] w-fit">
          <input
            className="border py-[0.5rem] px-[1rem]"
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
        <div className="mt-[8px] w-fit">
          <input
            className="border py-[0.5rem] px-[1rem]"
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
        <div className="mt-[8px] w-fit">
          <input
            className="border py-[0.5rem] px-[1rem]"
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
        className="p-[0.5rem] w-max h-fit self-center mt-[34px]">
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
      console.log(response)
    } catch (error) {
      const err = error.response.data.message
      toast.warn(err)
    }
    
  }

  return (
    <div className="lg:ml-[5rem]" >
      <AddPhoto component='updateProfile'/>
      <form onSubmit={handleProfileUpdate}>
      <div className="mt-[41px] grid grid-cols-2 gap-[1.5rem] w-fit">
        <div>
          <label>Full Name* </label>
          <div className="mt-[8px] w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded"
              placeholder={Cookies.get('name')}
              type="text"
              value={name}
              onChange = {e=>setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor='email'>Email*</label>
          <div className="mt-[8px] w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded"
              placeholder={Cookies.get('email')}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
            />
          </div>
        </div>
        <div>
          <label htmlFor='contact'>Contact</label>
          <div className="mt-[8px] w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded"
              type="tel"
              name='contact'
              value={contact}
              onChange={e=>SetContact(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <div className="mt-[8px] w-fit">
            <input className="border py-[0.5rem] px-[1rem] rounded"
            name='location' 
            value={location}
            onChange={e=>setLocation(e.target.value)}/>
          </div>
        </div>
        <div className="flex gap-[3rem]">
          <div>
            <input className="border" type="radio" value='Male' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender'>Male</label>
          </div>
          <div>
            <input className="border" type="radio" value='Female' name='gender' onChange={e=>setGender(e.target.value)}/> <label htmlFor='gender'>Female</label>
          </div>
        </div>
      </div>
      <button className="p-[0.5rem] w-max h-fit self-center mt-[34px]">
        Save changes
      </button>
      </form>
    </div>
  )
}
