import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import UserNavbar, { DropdownList } from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Cookies from 'js-cookie'
import person from '../assets/Desktop View/Icons/person.png'
import { AiOutlineRight } from 'react-icons/ai'
import {
  MdOutlinePeople,
  MdLockOutline,
  MdOutlineQuiz,
  MdDeleteOutline,
} from 'react-icons/md'

const AccountSettings = () => {
  const navigate = useNavigate()
  const [showSettings, setShowSettings] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [checkQuizzes, setCheckQuizzes] = useState(false)
  const [general, setGeneral] = useState(false)

  const verifyCookie = Cookies.get('rememberMe') || Cookies.get('userId')
  useEffect(() => {
    {
      !verifyCookie && navigate('/login')
      setGeneral(true)
    }
  }, [])

  const handleGeneral = () => {
    setGeneral(true)
    setCheckQuizzes(false)
    setChangePassword(false)
  }

  const handlePassword = () => {
    setGeneral(false)
    setCheckQuizzes(false)
    setChangePassword(true)
  }

  const handleQuizzes = () => {
    setGeneral(false)
    setCheckQuizzes(true)
    setChangePassword(false)
    Cookies.set('myQuizzes', checkQuizzes)
  }

  return (
    <>
      {showModal && (
        <DeleteModale showModal={showModal} setShowModal={setShowModal} />
      )}
      <section>
        <UserNavbar
          setShowSettings={setShowSettings}
          showSettings={showSettings}
        />
        {showSettings && <DropdownList />}
        <div>
          <Header quizzes="Account Settings" />
        </div>

        <section className="m-[auto] lg:mt-[38px] px-4  py-4 xl:px-8 3xl:px-[230px]">
          <div className="navigations w-[241px] flex justify-between text-gray-400 text-sm/[16px] font-normal mt-[46px]">
            <p className="self-center hover:text-blue-700 active:text-blue-700 lg:block">
              Home
            </p>
            <AiOutlineRight className="self-center text-gray-400 hover:text-blue-700 active:text-blue-700  lg:block" />
            <p>Name</p>
            <AiOutlineRight className="self-center text-gray-400 hover:text-blue-700 active:text-blue-700  lg:block" />
            <p className="text-[#1D2939]  lg:text-blue-700">Account</p>
          </div>

          <div className=" mt-[127px] mb-[316px] lg:justify-center xl:w-[70%]  m-auto">
            {/* profile name and mail */}
            <div className="flex gap-[1.5rem] mb-[104px]">
              <div className="rounded-[50%] w-16 h-16 bg-white-700 flex justify-center shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
                <img
                  className="border-2 rounded-[50%] h-14 w-14 bg-[#b3b3b3] self-center"
                  src={person}
                  alt="person image"
                />
              </div>
              <div className="self-center">
                <p>Name of wjkw;ldld</p>
                <p>Email</p>
              </div>
            </div>

            <div className="flex  justify-around xl:justify-between">
              {/* selections */}
              <div className="flex mt-[100px] justify-between lg:gap-[2.563rem]">
                <div className="font-semibold text-base tracking-wid w-max">
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center  hover:text-[#0267FF]"
                    onClick={handleGeneral}
                    style={general ? { color: '#0267FF' } : { color: 'black' }}>
                    <MdOutlinePeople className=" self-center w-[1.5rem] h-[1.5rem]" />
                    <p>General</p>
                  </div>
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center mt-[50px]"
                    onClick={handlePassword}
                    style={
                      changePassword ? { color: '#0267FF' } : { color: 'black' }
                    }>
                    <MdLockOutline className="w-[1.5rem] h-[1.5rem]" />
                    <p>Password</p>
                  </div>
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center mt-[50px]"
                    onClick={handleQuizzes}
                    style={
                      checkQuizzes ? { color: '#0267FF' } : { color: 'black' }
                    }>
                    <MdOutlineQuiz className="w-[1.5rem] h-[1.5rem]" />
                    <p>My Quizzes</p>
                  </div>
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center text-[#FF0000] mt-[50px]"
                    onClick={() => setShowModal(!showModal)}>
                    <MdDeleteOutline className="w-[1.5rem] h-[1.5rem] " />
                    <p>Delete Account</p>
                  </div>
                </div>

                <div className="h-[600px] w-[1px] bg-[#CCCCCC]"></div>
              </div>
              {general && <UpdateProfile />}
              {changePassword && <UpdatePassword />}

              {checkQuizzes && <UsersQuizzes />}
            </div>
          </div>
        </section>
        {!showModal && <Footer />}
      </section>
    </>
  )
}

export default AccountSettings

export const UpdateProfile = () => {
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
            <input className="border py-[0.5rem] px-[1rem] rounded" />
          </div>
        </div>
        <div>
          <label>Email*</label>
          <div className="mt-[8px] w-fit">
            <input className="border py-[0.5rem] px-[1rem] rounded" />
          </div>
        </div>
        <div>
          <label>Contact</label>
          <div className="mt-[8px] w-fit">
            <input className="border py-[0.5rem] px-[1rem] rounded" />
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

export const UpdatePassword = () => {
  return (
    <div className="mt-[100px] mr-[5rem]">
      <div className="mb-[48px]">
        <label>Current password*</label>
        <div className="mt-[8px] w-fit">
          <input className="border py-[0.5rem] px-[1rem]" />
        </div>
      </div>

      <div className="mb-[48px]">
        <label>New Password*</label>
        <div className="mt-[8px] w-fit">
          <input className="border py-[0.5rem] px-[1rem]" />
        </div>
      </div>

      <div className="mb-[18px]">
        <label>Confirm New password*</label>
        <div className="mt-[8px] w-fit">
          <input className="border py-[0.5rem] px-[1rem]" />
        </div>
      </div>
      <button className="p-[0.5rem] w-max h-fit self-center mt-[34px]">
        Save changes
      </button>
    </div>
  )
}

export const UsersQuizzes = () => {
  return <div className="self-center">Hello</div>
}

export const DeleteModale = ({ showModal, setShowModal }) => {
  return (
    <div className="fixed  inset-x-0 inset-y-0 bg-[#CCCCCC] opacity-80 flex content-center justify-center">
      <div className="p-[1.5rem] w-[22.75rem] bg-[#FFFFFF] border-black rounded-lg m-auto opacity-100">
        <p className="mb-[8px] text-[#1D2939] font-semibold">Delete Account</p>
        <p className="mb-[16px]">
          Hey, if you're absolutely sure you want to delete your account, we got
          you covered. This Process cannot be undone
        </p>
        <div className="flex justify-between">
          <button
            className="border-[#B3B3B3] px-5 py-2 bg-[white] text-black"
            onClick={() => setShowModal(false)}>
            No keep it
          </button>
          <button className="bg-[#FF0000] border-none px-5 py-2">
            Yes, Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
