import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import UserNavbar, { DropdownList, ProfileImage } from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Cookies from 'js-cookie'
import { AiOutlineRight } from 'react-icons/ai'
import {
  MdOutlinePeople,
  MdLockOutline,
  MdOutlineQuiz,
  MdDeleteOutline,
} from 'react-icons/md'
import { UpdatePassword, UpdateProfile } from '../components/UpdateAccount'

const AccountSettings = () => {
  const navigate = useNavigate()
  const [showSettings, setShowSettings] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [checkQuizzes, setCheckQuizzes] = useState(false)
  const [general, setGeneral] = useState(true)
  const [recentState, setRecentState] = useState({ general: true })

  const verifyCookie = Cookies.get('rememberMe') || Cookies.get('userId')
    const  stateArray = Object.entries(recentState)
    stateArray.map(element=>{element[0]})

  useEffect(() => {
    window.localStorage.setItem('recentState', JSON.stringify(recentState));
  }, [recentState]);
 

  useEffect(()=>{
    const data = JSON.parse(window.localStorage.getItem('recentState'));
    
      setRecentState(data)
  },[])

  useEffect(() => {
    {
      !verifyCookie && navigate('/login')
    };
  }, [])

 

  const handleGeneral = () => {
    setGeneral(true)
    setCheckQuizzes(false)
    setChangePassword(false)
    const newdata = {general : true}
    setRecentState(newdata)
  }

  const handlePassword = () => {
    setGeneral(false)
    setCheckQuizzes(false)
    setChangePassword(true)
    const newdata = {changePassword : true}
    setRecentState(newdata)
  }

  const handleQuizzes = () => {
    setGeneral(false)
    setCheckQuizzes(true)
    setChangePassword(false)
    const newdata = {checkQuizzes : true}
    setRecentState(newdata)
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

        <section className="m-[auto] lg:mt-[38px] px-4  py-4  3xl:px-[230px] md:px-16">
          <div className="navigations w-[241px] flex justify-between text-gray-400 text-sm/[16px] font-normal mt-[46px]">
            <p className="self-center hover:text-blue-700 active:text-blue-700 lg:block">
              Home
            </p>
            <AiOutlineRight className="self-center text-gray-400 hover:text-blue-700 active:text-blue-700  lg:block" />
            <p>{Cookies.get('name')}</p>
            <AiOutlineRight className="self-center text-gray-400 hover:text-blue-700 active:text-blue-700  lg:block" />
            <p className="text-[#1D2939]  lg:text-blue-700">Account</p>
          </div>

          <div className=" mt-[127px] mb-[316px] lg:justify-center xl:w-[70%]  m-auto">
            {/* profile name and mail */}
            <div className="flex gap-[1.5rem] mb-[104px]">
              <div className="rounded-[50%] w-16 h-16 bg-white-700 flex justify-center shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
                {/* <img
                  className="border-2 rounded-[50%] h-14 w-14 bg-[#b3b3b3] self-center"
                  src={person}
                  alt="person image"
                /> */}
                <ProfileImage component='settings'/>
              </div>
              <div className="self-center">
                <p>{Cookies.get('name')}</p>
                <p>{Cookies.get('email')}</p>
              </div>
            </div>

            <div className="flex  justify-around">
              {/* selections */}
              <div className="flex mt-[100px] justify-between lg:gap-[2.563rem]">
                <div className="font-semibold text-base tracking-wid w-max">
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center  hover:text-[#0267FF] cursor-pointer"
                    onClick={handleGeneral}
                    style={general ? { color: '#0267FF' } : { color: 'black' }}>
                    <MdOutlinePeople className=" self-center w-[1.5rem] h-[1.5rem]" />
                    <p>General</p>
                  </div>
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center mt-[50px] cursor-pointer"
                    onClick={handlePassword}
                    style={
                      changePassword ? { color: '#0267FF' } : { color: 'black' }
                    }>
                    <MdLockOutline className="w-[1.5rem] h-[1.5rem]" />
                    <p>Password</p>
                  </div>
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center mt-[50px] cursor-pointer"
                    onClick={handleQuizzes}
                    style={
                      checkQuizzes ? { color: '#0267FF' } : { color: 'black' }
                    }>
                    <MdOutlineQuiz className="w-[1.5rem] h-[1.5rem]" />
                    <p>My Quizzes</p>
                  </div>
                  <div
                    className="flex gap-[0.5rem] p-[0.5rem] content-center text-[#FF0000] mt-[50px] cursor-pointer"
                    onClick={() => setShowModal(!showModal)}>
                    <MdDeleteOutline className="w-[1.5rem] h-[1.5rem] " />
                    <p>Delete Account</p>
                  </div>
                </div>

                <div className="h-[600px] w-[1px] bg-[#CCCCCC] hidden md:block"></div>
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



export const UsersQuizzes = () => {
  return <div className="self-center">Hello</div>
}

export const DeleteModale = ({ showModal, setShowModal }) => {
  const handleDelete = () =>{}
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
          <button className="bg-[#FF0000] border-none px-5 py-2" onClick={handleDelete}>
            Yes, Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
