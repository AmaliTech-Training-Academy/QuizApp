import { useState } from 'react'
import person from '../assets/Desktop View/Icons/person.png'
import Api from './forms/services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
          const response = await Api.patch(`users/account/${id}/password`, {
            currentPassword,
            newPassword,
          })
          console.log(response.response.data.message)
        } catch (error) {
          toast.warn(error.response.data.message)
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
      <button
        className="p-[0.5rem] w-max h-fit self-center mt-[34px]"
        type="submit">
        Save changes
      </button>
    </form>
  )
}

export const UpdateProfile = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [gender, setGender] = useState('')
  return (
    <div className="lg:ml-[5rem]">
      <div className="flex  w-fit">
        <div className="rounded-[50%] w-40 h-40 bg-white-700 flex justify-center shadow-lg shadow-[rgba(0, 0, 0, 0.25)] mr-[2rem] ">
          <img
            className="border-2 rounded-[50%] h-36 w-36 bg-[#b3b3b3] self-center"
            src={person}
            alt="person image"
          />
        </div>
        <button className="p-[0.5rem] w-max h-fit self-center mr-[0.55rem]">
          Upload New
        </button>
        <button className="p-[0.5rem] w-max h-fit self-center bg-white text-[#1D2939] border-none">
          Delete Avatar
        </button>
      </div>

      <div className="mt-[41px] grid grid-cols-2 gap-[1.5rem] w-fit">
        <div>
          <label>Full Name* </label>
          <div className="mt-[8px] w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded"
              placeholder={Cookies.get('name')}
              type="text"
            />
          </div>
        </div>
        <div>
          <label>Email*</label>
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
          <label>Contact</label>
          <div className="mt-[8px] w-fit">
            <input
              className="border py-[0.5rem] px-[1rem] rounded"
              type="tel"
            />
          </div>
        </div>
        <div>
          <label>Location</label>
          <div className="mt-[8px] w-fit">
            <input className="border py-[0.5rem] px-[1rem] rounded" />
          </div>
        </div>
        <div className="flex gap-[3rem]">
          <div>
            <input className="border" type="radio" /> <label>Male</label>
          </div>
          <div>
            <input className="border" type="radio" /> <label>Female</label>
          </div>
        </div>
      </div>
      <button className="p-[0.5rem] w-max h-fit self-center mt-[34px]">
        Save changes
      </button>
    </div>
  )
}
