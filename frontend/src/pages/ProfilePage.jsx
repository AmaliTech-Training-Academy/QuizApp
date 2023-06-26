import React, {useEffect} from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import {Header} from '../components/Header'
import { Footer } from '../components/Footer'
import {AiOutlineRight} from 'react-icons/ai'
import {QuizSearch} from '../components/QuizSearch'

const ProfilePage = () => {
  const navigate = useNavigate()
  const verifyCookie = Cookies.get('rememberMe')

  useEffect(() => {
    {!verifyCookie && navigate('/login')}
  }, [])

  return (
    <>
      <UserNavbar/>
      <Header quizzes='Profile'/>
      <section>
        <div className='flex'>
          <div className='navigations flex'>
            <p>Home</p>
            <AiOutlineRight/>
            <p>Profile</p>
          </div>
          <QuizSearch/>
        </div>
        <div className='helloUser'></div>
        <div className='quizLogs'></div>
        <div className='charts'></div>
        <div className='reminders'></div>
      </section>
      <Footer/>
    </>
    
  )
}

export default ProfilePage
