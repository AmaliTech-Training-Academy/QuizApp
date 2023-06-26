import React, { useState, useEffect } from 'react'
import styles from './addCard.module.css'
import {BiCheck} from 'react-icons/bi'

const AddCards = ({text, color, onSubmitData}) => {
  const [addedInterest, setAddedInterest] = useState([])
  const handleAddInterest = (value) =>{
    setAddedInterest((prev) => [...prev, value])
    console.log(addedInterest)
  };
  const btnText = ((text === 'Gaming' && addedInterest.includes('Gaming')) ? 'Added' : (text === 'Fashion' && addedInterest.includes('Fashion')) ? 'Added':  (text === 'Music' && addedInterest.includes('Music')) ? 'Added' :   (text === 'Reading' && addedInterest.includes('Reading')) ? 'Added' : 'Add');

  useEffect(() => {
    onSubmitData(addedInterest);
  }, [addedInterest, onSubmitData]);

  return (
    <div className={styles.addCard}>
      <div className={`${styles[color]} ${styles.card}`}></div>
      <div className={styles.content}>
      <h2 className={styles.heading}>{text}</h2>
        <button className={styles.addBtn} onClick={()=>handleAddInterest(text ==='Gaming' ? 'Gaming'  : text ==='Fashion' ? 'Fashion' : text === 'Music' ? 'Music' : text === 'Reading' ? 'Reading' : null)}>
          {
          btnText
          }
          {btnText ==='Added' && <BiCheck/>}
          
          </button>
      </div>
        
      
    </div>
  )
}

export default AddCards
