import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { QuizSearch } from './QuizSearch';
import { NavLink } from 'react-router-dom';


export const PageNavigation = ({profile, quizzes, settings, searchQuery, handleSearchRedirect}) => {

  

  return (
    <div className='hidden lg:flex justify-between'>
      {/* Links */}
      <div className='flex'>
        <div className='flex items-center text-[#B3B3B3]'>
          <NavLink to="/" className='mr-4'>Home</NavLink> 
          <span className='mr-4'><IoIosArrowForward/></span>
        </div>
        <img src="" alt="" />
        {profile ?
        <div className='flex items-center text-[#B3B3B3]'>
          <NavLink 
            to="/profile" 
            className='mr-4'
            style={({ isActive }) => ({
              color: isActive ? '#0267FF' : '#B3B3B3',
            })}
          >{profile}
          </NavLink>
          {quizzes ?
            <span className='mr-4'><IoIosArrowForward/></span>
          : ''}
        </div>
        : <div></div>
        }
        <img src="" alt="" />
        {quizzes ? 
        <div className='text-[#B3B3B3] flex items-center'>
          <NavLink 
          to="/quizzes" 
          className='text-[#B3B3B3]'
          style={({ isActive }) => ({
            color: isActive ? '#0267FF' : '#B3B3B3',
          })}
          >Quizzes</NavLink>
        </div>
        : <div></div>
        }
        <img src="" alt="" />
        {settings ?
        <div className='flex items-center text-[#B3B3B3]'>
          <span className='mr-4'><IoIosArrowForward/></span>
          <NavLink 
            to="/account-settings" 
            className='mr-4'
            style={({ isActive }) => ({
              color: isActive ? '#0267FF' : '#B3B3B3',
            })}
          >{settings}
          </NavLink>
          {quizzes ?
            <span className='mr-4'><IoIosArrowForward/></span>
          : ''}
        </div>
        : <div></div>
        }
      </div>
      {/* Search */}
      {!settings && <QuizSearch/>}
      
    </div>
  )
}
