import React, { useState } from 'react'
import styles from './forms.module.css'
import Register from './registerForm/Register'
import AddPhoto from './uploadPhoto/AddPhoto'
import SelectInterest from './selectInterest/SelectInterest'
import AddInterst from './addInterest/AddInterst'
import CompletedRegistration from './CompletedRegistration'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { decreaseCount, resetCount } from '../../features/stepperSlice'


const Signup = () => {
  const [completed, setCompleted] = useState(false)

  const { count } = useSelector(store => store.counter)
  const dispatch = useDispatch()

  const handleExit = () => {
    dispatch(resetCount())
  }

  const getNextStep = count => {
    switch (count) {
      case 1:
        return <Register />
      case 2:
        return <AddPhoto />
      case 3:
        return <SelectInterest />
      case 4:
        return <AddInterst setCompleted={setCompleted} />
      case 5:
        return <CompletedRegistration />
      default:
        return
    }
  }

  
  const handleSubmit =async e => {
    e.preventDefault()    
  }

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
      {!completed && (
        <div className={styles.pageCounter} onClick={()=> dispatch(decreaseCount())}>
          {count > 1 && <p className={styles.back}><IoMdArrowRoundBack className={styles.backArrow}/> <span>Back</span></p>}
          {count <= 4 && <p className={styles.counter}>
            Step {count}
            <span> of 4</span>
          </p> }
          
          <NavLink to='/' className={styles.exit} onClick={handleExit}>Exit</NavLink>
        </div>
      )}

      {getNextStep(count)}
    </form>
  )
}

export default Signup
