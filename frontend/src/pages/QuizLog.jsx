import React, { useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';
import { PageNavigation } from '../components/PageNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { getLog } from '../features/quizLogSlice';
import { Quizzes } from '../components/Quizzes';


export const QuizLog = () => {
const dispatch = useDispatch();

const token = useSelector(state=> state.userData.user_token)
const id = useSelector(state=> state.userData.user_id)
const attempted = useSelector(state=>state.quizLog.attempted)
const passed = useSelector(state=>state.quizLog.passed)

console.log(attempted);
console.log(passed);
  useEffect(()=>{
    dispatch(getLog({token:token, userId:id}))
  },[])

  return (
    <div>
      <UserNavbar/>
      {/* Header */}
      <div className='lg:py-11 pt-[10px] bg-[#F2F2F2] lg:bg-[#0267FF] lg:text-white lg:text-5xl font-semibold flex justify-center' id='quiz-header'>
      <div to="/quizlog" className='py-2'>Quiz Log</div>
    </div>
    <div className="pt-10 px-16" >
      <PageNavigation quizzes="Quiz Log" profile="Profile" />
      <div className='mt-14'>
        {/* Divisions */}
        <div className='flex'>
          <div className='p-8'>Attempted</div>
          <div className='p-8'>Passed({passed.length})</div>
          {
            <Quizzes data/>
          }
        </div>
        {/* Quizzes */}
        <div></div>
      </div>
    </div>
    </div>
  )
};
