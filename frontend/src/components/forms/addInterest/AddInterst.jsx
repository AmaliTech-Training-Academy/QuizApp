import React, { useState } from 'react'
import styles from './addInterest.module.css'
import AddCards from './addCard/AddCards'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'
import Api from '../services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const AddInterst = ({ setCompleted }) => {

  const [click, setClick] = useState(false)
  const dispatch = useDispatch()
  const userId = Cookies.get('id')

  const submitData = async (addedInterest) => {
    try {
      setCompleted(true)
      setClick(true)
      const response = await Api.patch(`users/interest/${userId}`, {addInterest: addedInterest})
      const msg = response.data.message
      console.log(response)
      if(response.data.success === true){
        toast.success(msg)
        dispatch(increaseCount())
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const handleAddedCards = (addedInterest) =>{
    console.log(addedInterest)
  };

  const handleClick = ()=>{
    handleAddedCards();
    submitData();
    
    
  }

  return (
    <div className={styles.formsStep4}>
      <h2 className={styles.heading}>
        Let’s get started by picking some interests
      </h2>
      <p className={styles.addInterestDescription}>
        Alright, let's pick something we're interested in and get started!
      </p>
      <div className={styles.addCards}>
        <AddCards color="mauve" text="Gaming"  onSubmitData={handleAddedCards}/>
        <AddCards color="green" text="Fashion" onSubmitData={handleAddedCards}/>
        <AddCards color="orange" text="Music" onSubmitData={handleAddedCards}/>
        <AddCards color="blue" text="Reading" onSubmitData={handleAddedCards}/>
      </div>

      <button onClick={handleClick} className={styles.continueBtn}>Continue</button>

      <div className='mt-[25px]' onClick={()=>{dispatch(increaseCount())}}>Skip</div>
    </div>
  )
}

export default AddInterst
