import React from 'react'
import Login from '../components/forms/Login'
import Gallery from '../components/gallery/Gallery'
import styles from './signuppage/signupPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.signupPage}>
    <Gallery page='login'/>
    <Login/>
    </div>
  )
}

export default LoginPage
