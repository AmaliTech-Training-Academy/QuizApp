import React from 'react'
import book from '../assets/Desktop View/Icons/book.png'
import quizz from '../assets/Desktop View/Icons/quizz.png'
import subject from '../assets/Desktop View/Icons/subject.png'
import styles from '../components/forms/addInterest/addCard/addCard.module.css'

const QuizCards = ({ description, topic, iconType, color }) => {
  return (
    <div className={`${styles[color]} ${styles.quizcards}`}>
      <div className="bg-[#FFFFFF] rounded-full w-[90px] h-[90px] flex justify-center item-center">
        {iconType === 'quizLog' ? (
          <img src={quizz} className="w-[46px] h-[46px] self-center" />
        ) : iconType === 'subject' ? (
          <img src={subject} className="w-[46px] h-[46px] self-center" />
        ) : iconType === 'quizz' ? (
          <img src={book} className="w-[46px] h-[46px] self-center" />
        ) : null}
      </div>
      <div className="ml-[1rem] flex justify-around flex-col text-white">
        <p className="text-[2.074] font-semibold leading-[38.88px] tracking-wider">
          {topic}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default QuizCards
