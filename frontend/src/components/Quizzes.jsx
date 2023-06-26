import React from 'react';
import {mockImages} from "./mockImages"
import { Quiz } from './Quiz';
import { Link, useNavigate } from 'react-router-dom';


export const Quizzes = ({data}) => {
  const history = useNavigate();

  const navigateToQuizIntro = (quizId) => {
    history.push(`/quiz/${quizId}`);
  };

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 xl:gap-x-[108px] lg:gap-y-[87px] gap-y-10 lg:ml-[47px] w-full lg:mb-36 mb-4'>
      {data?.length > 0 ? data?.map((topic, index) => {
        const quiz = mockImages[index % mockImages.length];
        return (
          <div key={topic._id}>
            <Link to={`/quiz/${topic._id}`}>
              <Quiz
                name={topic.topic}
                creator={quiz.creator}
                duration={quiz.duration}
                rating={quiz.rating}
                image={quiz.image}
                key={topic._id}
                handleClick= {navigateToQuizIntro}
              />
            </Link>
          </div>
        )}  
      ): 
      <div>No topics to show</div>
      }
    </div>
  )
}
