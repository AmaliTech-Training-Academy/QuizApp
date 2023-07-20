import React from 'react';
import { Quiz } from './Quiz';
import { Link, useNavigate } from 'react-router-dom';


export const Quizzes = ({data}) => {
  const navigate = useNavigate();

  const navigateToQuizIntro = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 xl:gap-x-[108px] lg:gap-y-[87px] gap-y-10 w-full lg:mb-36 mb-4'>
      {data?.length > 0 ? ( 
        data?.map(topic => (
          <div key={topic._id}>
            <Link to={`/quiz/${topic._id}`}>
              <Quiz
                name={topic.topic}
                image={topic.desktopImage}
                key={topic._id}
                handleClick= {navigateToQuizIntro}
              />
            </Link>
          </div>
        ))
        ):( 
      <div>No topics to show</div>
        )}
    </div>
  )
}
