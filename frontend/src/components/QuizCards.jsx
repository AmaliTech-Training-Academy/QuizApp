import React from 'react'
import book from '../assets/DesktopView/Icons/book.png'
import quizz from '../assets/DesktopView/Icons/quizz.png'
import subject from '../assets/DesktopView/Icons/subject.png'
import styles from '../components/forms/addInterest/addCard/addCard.module.css'

const QuizCards = ({ description, topic, iconType, color }) => {
  return (
    <div className={`${styles[color]} ${styles.quizcards} p-4 lg:px-3 xl:py-12 xl:px-7 flex lg:justify-between xl:justify-normal`  }>
      <div className={`bg-[#FFFFFF] rounded-[50%] p-4 lex justify-center item-center self-center ${styles.circle}`}>
        {iconType === 'quizLog' ? (
          <img src={quizz} className=" w-[50px] h-[50px] lg:w-8 lg:h-8 xl:w-[50px] xl:h-[50px] self-center " />
        ) : iconType === 'subject' ? (
          <img src={subject} className="w-[50px] h-[50px] lg:w-8 lg:h-8 xl:w-[50px] xl:h-[50px] self-center " />
        ) : iconType === 'quizz' ? (
          <img src={book} className="w-[50px] h-[50px] lg:w-8 lg:h-8 xl:w-[50px] xl:h-[50px] self-center " />
        ) : null}
      </div>
      <div className={` flex justify-around flex-col text-white ml-4 lg:ml-0 xl:ml-8 ${styles.quiz}`}>
        <p className="text-2xl w-auto font-semibold xl:text-4xl">
          {topic}
        </p>
        <p className='font-semibold'>{description}</p>
      </div>
    </div>
  )
}

export default QuizCards
