import React from 'react'
import { Header } from '../components/Header.jsx';
import { PageNavigation } from '../components/PageNavigation.jsx';
import { QuizFilters } from "../components/QuizFilters.jsx";
import { Quizzes } from '../components/Quizzes.jsx';
import { MobileNavbar } from '../components/MobileNavbar.jsx';

export const AvailableQuizzes = () => {
  return (
    <div>
        <MobileNavbar/>
        <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
        {/* Quizzes */}
        <div className='lg:mt-10 mt-7 lg:px-[70px]'>
            <PageNavigation/>
            <hr className='border border-[#CCCCCC] mt-11 w-11/12 mx-auto hidden lg:block' />
            <div className='lg:mt-16 mx-4 flex'>
              <div className="hidden lg:block">
              <QuizFilters />
              </div>
                <Quizzes/>
            </div>
        </div>
    </div>
  )
}
