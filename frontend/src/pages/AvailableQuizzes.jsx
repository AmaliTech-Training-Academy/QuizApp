import React, {useState, useEffect} from 'react'
import { Header } from '../components/Header.jsx';
import { PageNavigation } from '../components/PageNavigation.jsx';
import { QuizFilters } from "../components/QuizFilters.jsx";
import { Quizzes } from '../components/Quizzes.jsx';
import { MobileNavbar } from '../components/MobileNavbar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from '../features/topicSlice.js';
import Navbar from '../components/Navbar.jsx';


export const AvailableQuizzes = () => {
  const {data:topics} = useSelector((state) => state.topics);

const [quizData, setQuizData] = useState(null);
const [filterOpt, setFilterOpt] = useState(null)
  const dispatch = useDispatch();
  useEffect(()=> {
    if(!quizData){
      dispatch(getTopics())
    }
    setQuizData(topics)
  },[topics]);

  return (
    <div>
        {/* <MobileNavbar/> */}
        <Navbar/>
        <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
        {/* Quizzes */}
        <div className='lg:mt-10 mt-7 lg:px-[70px]'>
            <PageNavigation setQuizData={setQuizData}/>
            <hr className='border border-[#CCCCCC] mt-11 w-11/12 mx-auto hidden lg:block' />
            <div className='lg:mt-16 mx-4 flex'>
              <div className="hidden lg:block">
              <QuizFilters setQuizData={setQuizData} setFilterOpt={setFilterOpt}/>
              </div>
                <Quizzes data={quizData}/>
            </div>
        </div>
    </div>
  )
}
