import React from 'react';
import {mockQuizzes} from "../components/mockQuizzes"
import { Quiz } from './Quiz';

export const Quizzes = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-x-[108px] lg:gap-y-[87px] gap-y-10 lg:ml-[47px] w-full lg:mb-36 mb-4'>
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
