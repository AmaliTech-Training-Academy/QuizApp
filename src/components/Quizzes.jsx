import React from 'react';
import {mockQuizzes} from "../components/mockQuizzes"
import { Quiz } from './Quiz';

export const Quizzes = () => {
  return (
    <div className='grid grid-cols-3 gap-x-[108px] gap-y-[87px] ml-[47px] w-full mb-36'>
      {
      mockQuizzes.map( quiz => 
      <Quiz
      name={quiz.name}
      creator={quiz.creator}
      duration={quiz.duration}
      rating={quiz.rating}
      image={quiz.image}
      key={quiz.id}
      />)
      }
    </div>
  )
}
