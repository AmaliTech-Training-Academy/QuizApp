import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { NavLink, useNavigate } from 'react-router-dom'
import UserNavbar, { DropdownList } from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import QuizCards from '../components/QuizCards'
import Calendar from 'react-calendar'
import '../components/calendar.css'
import MobileProfileNavbar from '../components/MobileProfileNavbar'
import { PageNavigation } from '../components/PageNavigation'
import DoughnutChart from '../components/charts/DoughnutChart'
import RecentQuizzes from '../components/RecentQuizzes'
import PopularQuizzes from '../components/PopularQuizzes'
import { useDispatch, useSelector } from 'react-redux'
import { filterTopicsBySearch, getTopics } from '../features/topicSlice'
import styles from '../components/gallery/gallery.module.css'
import { getQuizzes } from '../features/popularQuizzesSlice'

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const verifyCookie = Cookies.get('rememberMe')
  const [date, setDate] = useState(new Date())

  const searchQuery = useSelector((state) => state.topics.searchQuery); 
  const token = useSelector(state=> state.userData.user_token)
  const topics = useSelector(state=>state.popularQuizzes.data.popularTopics);

  // dispatch(getQuizzes(token))

  // useEffect(() => {
  //   if (token) {
  //     dispatch(getQuizzes(token));
  //   } else {
  //     navigate('/login');
  //   }
  // }, []);
  

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };
  
  const showSettings = useSelector((state) => state.accountSettings.showSettings);

  useEffect(() => {
    {!verifyCookie && navigate('/login')}
    dispatch(getTopics(token))
  }, [])

  const data = useSelector(state=>state.userData);

  const handleSearchRedirect = () => {
    navigate(`/quizzes?search=${searchQuery}`); 
  };

  return (
    <div>
      <UserNavbar />
      <MobileProfileNavbar/>
      {showSettings ? <DropdownList/> : null}
      <div className='hidden lg:block'><Header quizzes="Profile" /></div>

      <section className="m-[auto] lg:mt-[38px] px-4  py-4 xl:px-8 3xl:px-[230px] md:px-16">
        {/* Page Navigation */}
        <PageNavigation profile="Profile" searchQuery={searchQuery} handleSearchRedirect={handleSearchRedirect}/>

        <div className="helloUser text-[2.986rem] font-semibold leading-[3.499rem] mt-10 mb-[44px]">
          Hello <span>{Cookies.get('name')}</span>
        </div>

        <div className="flex justify-between  flex-col  lg:flex-row mb-[46px]">
          <NavLink to='/quizlog' className='lg:w-[30%] '>
            <QuizCards
            color="blueSlate"
            topic="Quiz log"
            iconType="quizLog"
            description="Review Your quiz results"
          /></NavLink>

          <NavLink to='/quizzes' className='lg:w-[30%] '>
            <QuizCards
            color="lightBlue"
            topic="Quizzes"
            iconType="quizz"
            description="Expand your knowledge"
            />
          </NavLink>
          
          <NavLink to='' className='lg:w-[30%]'>
            <QuizCards
            color="deepBlue"
            topic="100+ subjects"
            description="Challenge Your Knowledge"
            iconType="subject"
          />
          </NavLink>
          
        </div>

          {/* charts */}
        <div className="charts flex justify-between flex-col lg:flex-row mb-[90px]">
          <div className='lg:px-[5rem] px-[1rem] lg:py-7 shadow-lg rounded-lg md:mb-[70px] lg:w-[48%]'>
            <p className='font-semibold text-2xl lg:mb-[72px] mb-[-43px] text-center '>Performance Records</p>
            <DoughnutChart/>
          </div>
          <div className={`px-[5rem]  py-7 shadow-lg rounded-lg h-fit lg:w-[48%] ${styles.quizzes}`}>
            <p className='font-semibold text-2xl mb-[25px] text-center'>Popular Quizzes</p>
            <PopularQuizzes topics={topics}/>
          </div>
          
        </div>

        <div className="reminders mt-[50px] mb-[90px] flex justify-between flex-col lg:flex-row">
          <Calendar onChange={onChange} value={date} />

          <RecentQuizzes/>
        </div>
      </section>
      <div className='hidden lg:block'><Footer /></div>
      
    </div>
  )
}

export default ProfilePage

