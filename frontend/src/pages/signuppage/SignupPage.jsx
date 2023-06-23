import React from 'react'
import Signup from '../../components/forms/Signup'
import styles from '../signuppage/signupPage.module.css'
import Gallery from '../../components/gallery/Gallery'

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <Gallery/>
      <Signup/>
    </div>
  )
}

export default SignupPage;
