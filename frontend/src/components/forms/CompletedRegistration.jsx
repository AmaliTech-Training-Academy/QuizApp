import React from 'react'
import celebrate from '../../assets/DesktopView/Images/Frame.png'
import styles from './forms.module.css'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const CompletedRegistration = () => {
  return (
    <div className={styles.completedRegistration}>
      <h2 className={styles.heading} >Woohoo!</h2>
      <p className={styles.completedDescription}>Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life. Let's do this!</p>
      <img src={celebrate} className={styles.img}/>
      <NavLink to='/login'>
      <button className={styles.submitBtn} onClick={()=>{toast.success('Account created successfully')}}>Continue</button>
      </NavLink>
      
    </div>
  )
}

export default CompletedRegistration
