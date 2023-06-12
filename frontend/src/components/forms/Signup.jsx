import React, { useState, useEffect } from 'react'
import styles from './forms.module.css'
import Register from './registerForm/Register'
import AddPhoto from './uploadPhoto/AddPhoto'
import SelectInterest from './selectInterest/SelectInterest'
import AddInterst from './addInterest/AddInterst'
import CompletedRegistration from './CompletedRegistration'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, json } from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { decreaseCount } from '../../features/stepperSlice'
import Api from './services/api'

const Signup = () => {
  const [completed, setCompleted] = useState(false)

  const { count } = useSelector(store => store.counter)
  const dispatch = useDispatch()

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

  const handleSubmit =async  e => {
    e.preventDefault()
    useEffect(() => {
      const fetchData = async ()=>{
        try {
          const response = await Api.post('', {
            headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
          if(response){
            console.log(response)
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    
    }, [response])
    
  }

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
      {!completed && (
        <div className={styles.pageCounter} onClick={()=> dispatch(decreaseCount())}>
          <p className={styles.back}><IoMdArrowRoundBack className={styles.backArrow}/> <span>Back</span></p>
          <p className={styles.counter}>
            Step {count}
            <span> of 4</span>
          </p>
          <NavLink to='/' className={styles.exit}>Exit</NavLink>
        </div>
      )}

      {getNextStep(count)}
    </form>
  )
}

export default Signup
