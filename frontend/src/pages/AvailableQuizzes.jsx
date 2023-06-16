import React from 'react'
import  Navbar  from "../components/Navbar.jsx";
import { Header } from '../components/Header.jsx';
import { PageNavigation } from '../components/PageNavigation.jsx';
import { QuizFilters } from "../components/QuizFilters.jsx";
import { Quizzes } from '../components/Quizzes.jsx';

export const AvailableQuizzes = () => {
  return (
    <div>
        <Navbar/>
        <Header page={"Quizzes"}/>
        {/* Quizzes */}
        <div className='mt-10 px-[70px]'>
            <PageNavigation/>
            <hr className='border border-[#CCCCCC] mt-11 w-11/12 mx-auto' />
            <div className='mt-16 flex'>
                <QuizFilters/>
                <Quizzes/>
            </div>
        </div>
    </div>
  )
}
