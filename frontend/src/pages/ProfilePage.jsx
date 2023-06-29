import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AiOutlineRight } from 'react-icons/ai'
import { QuizSearch } from '../components/QuizSearch'
import QuizCards from '../components/QuizCards'
import Calendar from 'react-calendar'
import '../components/calendar.css'

const ProfilePage = () => {
  const navigate = useNavigate()
  const verifyCookie = Cookies.get('rememberMe')
  const [date, setDate] = useState(new Date())

  // useEffect(() => {
  //   {!verifyCookie && navigate('/login')}
  // }, [])

  return (
    <>
      <UserNavbar />
      <Header quizzes="Profile" />
      <section className="m-[auto] mt-[38px] ml-[5.5rem] mr-[5.5rem]">
        <div className="flex justify-between mb-[46px]">
          <div className="navigations w-[131px] flex justify-between text-gray-400 text-sm/[16px] font-normal ">
            <p className="self-center hover:text-blue-700 active:text-blue-700">
              Home
            </p>
            <AiOutlineRight className="self-center text-gray-400 hover:text-blue-700 active:text-blue-700" />
            <p className=" text-blue-700 self-center ">Profile</p>
          </div>
          <QuizSearch />
        </div>
        <div className="helloUser text-[2.986rem] font-semibold leading-[3.499rem] mb-[44px]">
          Hello <span>John Doe</span>
        </div>

        <div className="flex justify-between mb-[46px]">
          <QuizCards
            color="blueSlate"
            topic="Quiz log"
            iconType="quizLog"
            description="Review Your quiz results"
          />
          <QuizCards
            color="lightBlue"
            topic="Quizzes"
            iconType="quizz"
            description="Expand your knowledge"
          />
          <QuizCards
            color="deepBlue"
            topic="100+ subjects"
            description="Challenge Your Knowledge"
            iconType="subject"
          />
        </div>

        <div className="charts flex justify-between mb-[43px]">
          <div className="doughnutChart py-[3rem] px-[3.5rem] shadow-lg shadow-[#00000040]  rounded-lg">
            <p className='mb-[72px] font-semibold text-[1.441rem]'>Performance Records</p>
          </div>
          <div className="barChart py-[3rem] px-[3.5rem] shadow-lg shadow-[#00000040]  rounded-lg">
          <p className='mb-[48px] font-semibold text-[1.441rem]'>Performance Statistics</p>
          </div>
        </div>
        <div className="reminders mt-[50px] mb-[90px] flex justify-between">
          <Calendar onChange={setDate} value={date} />
          <div className="recent-quizzes py-[3.063rem] px-[1.75rem] shadow-lg shadow-[#00000040] rounded-lg">
            <div className="flex justify-between w-[23.625rem]">
              <p className="font-semibold text-[1.441rem]">Recent quizzes</p>
              <p className="text-blue-700">See All</p>
            </div>
            <div className="grid grid-cols-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProfilePage
