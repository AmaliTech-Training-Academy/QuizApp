import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Cookies from 'js-cookie'

const AccountSettings = () => {
    const navigate = useNavigate()
  const verifyCookie = Cookies.get('rememberMe') || Cookies.get('userId')
  useEffect(() => {
    {!verifyCookie && navigate('/login')}
  }, [])

  return (
    <>
    <UserNavbar/>
    <div>
        <Header quizzes='Account Settings'/>
    </div>
    <div><Footer/></div>
    </>
  )
}

export default AccountSettings
