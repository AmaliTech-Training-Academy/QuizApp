import React from 'react';
import {NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'


export const Header = (props) => {
  const {quizzes, quizLog} = props;
  return (
    <div className='lg:py-11 pt-[10px] bg-[#F2F2F2] lg:bg-[#0267FF] lg:text-white lg:text-5xl font-semibold flex justify-center' id='quiz-header'>
      <NavLink to="/quizlog" className='md:hidden mr-4 h-full py-2'>{quizLog}</NavLink>
      <NavLink to="/quizzes" className='py-2'>{quizzes}</NavLink>
      
    </div>
  )
}
