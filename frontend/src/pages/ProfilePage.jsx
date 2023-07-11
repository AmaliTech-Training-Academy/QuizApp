import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { NavLink, useNavigate } from 'react-router-dom'
import UserNavbar, { DropdownList } from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AiOutlineRight } from 'react-icons/ai'
import { QuizSearch } from '../components/QuizSearch'
import QuizCards from '../components/QuizCards'
import Calendar from 'react-calendar'
import '../components/calendar.css'
import MobileProfileNavbar from '../components/MobileProfileNavbar'
import { BarGraph, DonutChart } from '../components/Charts'
import { useDispatch, useSelector } from 'react-redux'


const ProfilePage = () => {
  const navigate = useNavigate()
  const verifyCookie = Cookies.get('rememberMe')
  const [date, setDate] = useState(new Date())

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  
  const showSettings = useSelector((state) => state.accountSettings.showSettings);

  useEffect(() => {
    {!verifyCookie && navigate('/login')}
  }, [])

  return (
    <div>
      <UserNavbar />
      <MobileProfileNavbar/>
      {showSettings ? <DropdownList/> : null}
      <div className='hidden lg:block'><Header quizzes="Profile" /></div>

      <section className="m-[auto] lg:mt-[38px] px-4  py-4 xl:px-8 3xl:px-[230px] md:px-16">
        {/* Page Navigation */}
        <div className="flex justify-between mb-[46px]">
          <div className="navigations w-[131px] flex justify-between text-gray-400 text-sm/[16px] font-normal">
            <p className="self-center hover:text-blue-700 active:text-blue-700 hidden lg:block">
              Home
            </p>
            <AiOutlineRight className="self-center text-gray-400 hover:text-blue-700 active:text-blue-700 hidden lg:block" />
            <p className="text-[#1D2939] font-semibold text-2xl lg:text-base lg:text-blue-700 self-center lg:font-normal">Profile</p>
          </div>
          <QuizSearch />
        </div>
        {/* user name */}
        <div className="helloUser text-[2.986rem] font-semibold leading-[3.499rem] mb-[44px]">
          Hello <span>{Cookies.get('name')}</span>
        </div>

        <div className="flex justify-between  flex-col gap-4 lg:flex-row mb-[46px]">
          <NavLink to='/quizlog' className='lg:w-4/12 lg:mr-16'>
            <QuizCards
            color="blueSlate"
            topic="Quiz log"
            iconType="quizLog"
            description="Review Your quiz results"
          /></NavLink>

          <NavLink to='/quizzes' className='lg:w-4/12 lg:mr-16'>
            <QuizCards
            color="lightBlue"
            topic="Quizzes"
            iconType="quizz"
            description="Expand your knowledge"
            />
          </NavLink>
          
          <NavLink to='' className='lg:w-4/12'>
            <QuizCards
            color="deepBlue"
            topic="100+ subjects"
            description="Challenge Your Knowledge"
            iconType="subject"
          />
          </NavLink>
          
        </div>

        <div className="charts flex justify-between flex-col lg:flex-row mb-[90px]">
          <div className='px-1.6  pt-12 
           shadow-lg rounded-lg md:mb-[70px]'>
            <p className='font-semibold text-2xl mb-[72px] text-center'>Performance Records</p>
            <div><DonutChart/></div>
          </div>
          <div className='px-1.6  pt-12 shadow-lg rounded-lg h-fit'>
            <p className='font-semibold text-2xl mb-[72px] text-center'>Performance Statistics</p>
            {/* <div className='lg:w-[20rem]'> */}
              <BarGraph/>
              {/* </div> */}
          </div>
          
        </div>

        <div className="reminders mt-[50px] mb-[90px] items-center flex justify-between flex-col lg:flex-row">
          <Calendar onChange={onChange} value={date} />

          <div className="recent-quizzes mt-[40px] py-[3.063rem] px-[1.75rem] lg:shadow-lg lg:shadow-[#00000040] rounded-lg">
            <div className="flex justify-between gap-[28px]  ">
              <p className="font-semibold text-[1.441rem]">Recent quizzes</p>
              <p className="text-blue-700">See All</p>
            </div>
            <div className="grid grid-cols-2"></div>
          </div>
        </div>
      </section>
      <div className='hidden lg:block'><Footer /></div>
      
    </div>
  )
}

export default ProfilePage

