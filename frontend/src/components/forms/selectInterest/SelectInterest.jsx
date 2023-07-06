import React, { useState } from 'react'
import styles from './selectInterest.module.css'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'
import { GrFormAdd } from 'react-icons/gr'
import { toast } from 'react-toastify'
import Api from '../services/api'
import Cookies from 'js-cookie'

const SelectInterest = () => {
  const [selectedInterest, setSelectectedInterest] = useState([])

  const userId = Cookies.get('userId')

  const dispatch = useDispatch()

  const handleSelectedInterest = value => {
    setSelectectedInterest(prev => [...prev, value])
  };
  const handleClick = async () => {
    const response = await Api.patch(`users/${userId}`, {interest: selectedInterest})
    const msg = response.data.message
    if(response.data.success === true){
      toast.success(msg)
      dispatch(increaseCount())
    }else{
      toast.warn(msg)
    }
  }

  
  return (
    <div className={styles.formsStep3}>
      <h2 className={styles.heading}>Hey there! What brings you here?</h2>
      <p className={styles.interestDescription}>
        This will help us make great recommendations.
      </p>

      <div className={styles.btn1}>
        <button
          className={
            selectedInterest.includes('Social Interaction')
              ? styles.btnSelected
              : styles.addBtn
          }
          onClick={() => handleSelectedInterest('Social Interaction')}>
          <GrFormAdd className={styles.addIcon} />
          <span className={styles.interestSpan}>Social Interaction</span>
        </button>
      </div>

      <div className={styles.btn2}>
        <button
          className={
            selectedInterest.includes('Personal development')
              ? styles.btnSelected
              : styles.addBtn
          }
          onClick={() => handleSelectedInterest('Personal development')}>
          <GrFormAdd className={styles.addIcon} style={{ color: 'white' }} />
          <span className={styles.interestSpan}>Personal development</span>
        </button>
      </div>

      <div className={styles.btn3}>
        <button
          className={
            selectedInterest.includes('Entertainment and Fun')
              ? styles.btnSelected
              : styles.addBtn
          }
          onClick={() => handleSelectedInterest('Entertainment and Fun')}>
          <GrFormAdd className={styles.addIcon} />
          <span className={styles.interestSpan}>Entertainment and Fun </span>
        </button>
      </div>

      <div className={styles.btn4}>
        <button
          className={
            selectedInterest.includes('Rewards and recognition')
              ? styles.btnSelected
              : styles.addBtn
          }
          onClick={() => handleSelectedInterest('Rewards and recognition')}>
          <GrFormAdd className={styles.addIcon} />
          <span className={styles.interestSpan}>Rewards and recognition</span>
        </button>
      </div>

      <div className={styles.continueInterest}>
        <button
          className={styles.continueBtn}
          onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default SelectInterest
