import React from 'react';
import { Header } from '../components/Header';
import Navbar from '../components/Navbar';

export const QuizLog = () => {
  return (
    <div>
      <Navbar/>
      <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
    </div>
  )
};
