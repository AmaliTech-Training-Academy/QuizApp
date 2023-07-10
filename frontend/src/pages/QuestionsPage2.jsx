import React, { useState, useEffect } from 'react';
import { getQuestions} from '../features/quizSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTopics } from '../features/topicSlice';

export const QuestionsPage2 = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getQuestions({topicId:id}));
    },[id]);

    const questions = useSelector(state=> state.quiz);
    const token = useSelector(state=> state.userData.user_token)
    console.log(token);
    console.log(questions);

  return (
    <div>QuestionsPage2</div>
  )
}
