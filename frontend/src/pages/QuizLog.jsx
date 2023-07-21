import React, { useEffect, useState } from 'react';
import UserNavbar, { DropdownList } from '../components/UserNavbar';
import { PageNavigation } from '../components/PageNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { getLog } from '../features/quizLogSlice';
import { Link } from 'react-router-dom';
import { MdOutlineTimer } from 'react-icons/md';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import MobileProfileNavbar from '../components/MobileProfileNavbar';



export const QuizLog = () => {
const dispatch = useDispatch();

const token = useSelector(state=> state.userData.user_token)
const id = useSelector(state=> state.userData.user_id)
const attempted = useSelector(state=>state.quizLog.attempted)
const passed = useSelector(state=>state.quizLog.passed)
const showSettings = useSelector((state) => state.accountSettings.showSettings);

const [activeSection, setActiveSection] = useState({name:"attempted", number: attempted.length});
// console.log(activeSection);

const handlePassed = () => {
    setActiveSection({name:"passed", number:passed.length})
};

const handleAttempted = () => {
  setActiveSection({name:"attempted", number:attempted.length})
};

  useEffect(()=>{
    dispatch(getLog({token:token, userId:id}))
  },[attempted, passed])

  const sectionStyle = {
    borderBottom: "3px solid #000",
    transition: "0.5s",
  };

  const border = {border: "1px solid rgba(255, 255, 255, 0.4)"};
  const infoBackground = {background: "rgba(153, 153, 153, 0.4)"};

  const section = (id, image, name, date ) => {
    return (
    <div key={id} className='cursor-pointer' onClick={() => handleClick(id)}>
        <div className='relative h-80 rounded-lg overflow-hidden'>
        {/* background */}
        <div className='absolute z-20 w-full h-full'>
            <img src={image} alt="" className='h-full w-full object-cover' />
        </div>
        {/*Quiz Info */}
        <div className='hidden lg:block relative z-30 border border-black lg:-bottom-64 w-11/12 h-20 lg:h-auto mx-auto rounded-lg backdrop-blur-lg lg:px-2 py-3 px-[14px] text-white' style={{...border, ...infoBackground}}>
                {/* Quiz Name & Creator*/}
                <div>
                <p className='font-bold hidden lg:block'>{name}</p>
                </div>
        </div>
    </div>
        <div className='text-black lg:hidden mt-2'>
            <div className='font-semibold'>{name}</div>
        </div>
        <div className='mt-4 text-gray-800'>{date}</div>
    </div>
  )}

  return (
    <div>
      <MobileProfileNavbar/>
      <UserNavbar/>
      {showSettings && <DropdownList/> }
      <Header quizLog="Quiz Log" quizzes="Quizzes"/>
      <div className='lg:py-11 pt-[10px] bg-[#F2F2F2] lg:bg-[#0267FF] lg:text-white lg:text-5xl font-semibold hidden lg:flex justify-center' id='quiz-header'>
      <div to="/quizlog" className='py-2'>Quiz Log</div>
    </div>
    <div className="pt-10 px-10" >
      <PageNavigation quizlog="Quiz Log" profile="Profile" />
      <div className='lg:mt-14 flex flex-col'>
        {/* Divisions */}
            <div className='flex'>
              {/* Attempts */}
              <div className='p-4 cursor-pointer' 
              onClick={handleAttempted}
              style={activeSection.name === "attempted" ? sectionStyle : undefined}>
                Attempted{activeSection.name ==="attempted" ? 
                <span>({attempted.length})</span> 
                : '' }
              </div>
              {/* Passed */}
              <div className='p-4 cursor-pointer' 
              onClick={handlePassed}
              style={activeSection.name === "passed" ? sectionStyle : undefined}
              >
              Passed{activeSection.name ==="passed" ? 
              <span>({passed.length})</span> 
              : '' }
              </div>
            </div>
          <div className='flex p-6 mt-6 border border-[#CCCCCC] rounded-lg'>
            <div><MdOutlineTimer className='w-14 h-8'/></div>
            <div className='flex flex-col'>
              <div className='font-semibold text-3xl mb-2'>Schedule Time Learning</div>
              <div className='mb-3'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</div>
              <div className=''>
                <button className='bg-[#0267FF] mr-5 p-2'>Get Started</button>
                <button className='border-none text-black font-semibold p-2'>Dismiss</button>
              </div>
            </div>
          </div>
        {/* Quizzes  */}
          <div className='mt-20'>
            { activeSection.name === "attempted"? 
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-28'>
                {
                  attempted.map((attempt, index)=> (
                  section(index, attempt.desktopImage, attempt.topic, attempt.Date)
                ))
                }
              </div>
              : 
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-28'>
                {
                  passed.map((pass, index)=> (
                  section(index, pass.desktopImage, pass.topic, pass.Date)
                ))
                }
              </div>
            }
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
};

