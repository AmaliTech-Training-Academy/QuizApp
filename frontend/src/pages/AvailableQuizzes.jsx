import React, {useState, useEffect} from 'react'
import { Header } from '../components/Header.jsx';
import { PageNavigation } from '../components/PageNavigation.jsx';
import { QuizFilters } from "../components/QuizFilters.jsx";
import { Quizzes } from '../components/Quizzes.jsx';
import { MobileNavbar } from '../components/MobileNavbar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from '../features/topicSlice.js';
import UserNavbar, {DropdownList} from '../components/UserNavbar.jsx';
import MobileProfileNavbar from '../components/MobileProfileNavbar.jsx';
import { useNavigate } from 'react-router-dom';


export const AvailableQuizzes = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.data);
  const token = useSelector(state=> state.userData.user_token);
  const showSettings = useSelector((state) => state.accountSettings.showSettings);

  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate()

  
  useEffect(()=>{
    {!token && navigate('/login')}
  })
  
  useEffect(()=> {
      dispatch(getTopics(token))
    // setQuizData(topics)
  },[token]);

  return (
    <div>
        <MobileProfileNavbar/>
        <UserNavbar/>
        {showSettings && <DropdownList />}
        <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
        {/* Quizzes */}
        <div className='lg:mt-10 mt-7 lg:px-[70px]'>
          <PageNavigation setQuizData={setQuizData} quizzes="Quizzes" profile="Profile"/>
            <hr className='border border-[#CCCCCC] mt-11 w-11/12 mx-auto hidden lg:block' />
            <div className='lg:mt-16 mx-4 flex'>
              <div className="hidden lg:block">
              <QuizFilters setQuizData={setQuizData} topics={topics} />
              </div>
                <Quizzes data={topics}/>
            </div>
        </div>
    </div>
  )
}
