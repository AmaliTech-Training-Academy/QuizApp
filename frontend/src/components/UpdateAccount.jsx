import { useState } from 'react'
import Api from './forms/services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import AddPhoto from './forms/uploadPhoto/AddPhoto'
import { RotatingLines } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'

export const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const token = useSelector(state=>state.userData.user_token);

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
          const data = {
            currentPassword,
            newPassword,
            confirmPassword
          }
          const response = await Api.patch(`https://quiz-master.onrender.com/api/users/account/${id}/password`, data, {
            headers:{
              'Authorization' : `Bearer ${token}`
            }
          } )
          toast.success(response.data.message)
          setTimeout(() => {
            setLoading(true)
          }, 3000);

          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');

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
      {!loading ? ( 
        <div className=' flex justify-center align-center'>
          <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.95" width="40" visible={true} />
        </div>
      ):(
      <button
        className="p-[0.5rem] w-max h-fit self-center mt-[34px] bg-[#0267FF]">
        Save changes
      </button>)}
      
    </form>
  )
};

// Update Profile name, email, location and contact

