import React from 'react'
import book from '../assets/DesktopView/Icons/book.png'
import quizz from '../assets/DesktopView/Icons/quizz.png'
import subject from '../assets/DesktopView/Icons/subject.png'
import styles from '../components/forms/addInterest/addCard/addCard.module.css'

const QuizCards = ({ description, topic, iconType, color }) => {
  return (
    <div className={`${styles[color]} ${styles.quizcards}`}>
      <div className={`bg-[#FFFFFF] rounded-[50%] p-[1.063rem] flex justify-center item-center self-center ${styles.circle}`}>
        {iconType === 'quizLog' ? (
          <img src={quizz} className="w-[50px] h-[50px] self-center " />
        ) : iconType === 'subject' ? (
          <img src={subject} className="w-[50px] h-[50px] self-center " />
        ) : iconType === 'quizz' ? (
          <img src={book} className="w-[50px] h-[50px] self-center " />
        ) : null}
      </div>
      <div className={`ml-[1rem] flex justify-around flex-col text-white ${styles.quiz}`}>
        <p className="text-[2.074] font-semibold  text-4xl">
          {topic}
        </p>
        <p className='mt-[-70px]'>{description}</p>
      </div>
    </div>
  )
}

export default QuizCards
