import React, { useEffect, useState } from 'react';
import {mockQuizzes} from "../components/mockQuizzes"
import { Quiz } from './Quiz';
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from '../store/topicSlice';

export const Quizzes = () => {

const dispatch = useDispatch();

const {data:topics, status} = useSelector((state) => state.topics);

useEffect(()=> {
  dispatch(getTopics())
},[]);

const [query, setQuery] = useState('');

if(status === "Loading..."){
  return <p>{status}</p>
};

if(status === "Error"){
  return <p>{status}</p>
};

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-x-[108px] lg:gap-y-[87px] gap-y-10 lg:ml-[47px] w-full lg:mb-36 mb-4'>
      {topics.map((topic, index) => {
        const quiz = mockQuizzes[index % mockQuizzes.length];
        const uniqueKey = topic.id + '_' + index;
        return (
          <Quiz
            name={topic.topic}
            creator={quiz.creator}
            duration={quiz.duration}
            rating={quiz.rating}
            image={quiz.image}
            id={topic.id}
            />
        )}  
      )}
    </div>
  )
}
