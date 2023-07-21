import React from 'react';
import {NavLink } from 'react-router-dom';


export const Header = (props) => {
  const {quizzes, quizLog} = props;

  const activePage = {
    color: "#0267FF",
    borderBottom: "2px solid #0267FF"
  }

  return (
    <div className='lg:py-11 bg-[#F2F2F2] lg:bg-[#0267FF] lg:text-white lg:text-5xl font-semibold flex justify-center lg:hidden' id='quiz-header'>
      <NavLink 
        to="/quizlog" 
        className= "mr-4 py-[10px] cursor-pointer"
        style={({ isActive }) => ( isActive ? activePage : undefined)}
      >{quizLog}</NavLink>
      <NavLink 
        to="/quizzes" 
        className="py-[10px] cursor-pointer"
        style={({ isActive }) => ( isActive ? activePage : undefined)}>
        {quizzes}
      </NavLink>
    </div>
  )
}
