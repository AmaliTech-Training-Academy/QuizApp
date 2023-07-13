import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
// import { getQuestions } from '../features/quizSlice';
import timer from "../assets/DesktopView/Icons/timer.png";
import keyboardreturn from "../assets/DesktopView/Icons/keyboard_return.png";
import allQuestions from "../assets/DesktopView/Icons/quizz.png";
import repeat from "../assets/DesktopView/Icons/repeat.png";
import UserNavbar from '../components/UserNavbar';
import { selectQuestion } from '../features/quizSlice';

export const QuizIntro = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const [quizData, setQuizData] = useState(null);
    const topics = useSelector((state) => state.topics.data);
    // 

    // console.log(topics);
    const quiz = topics.filter(topic => id === topic._id);
    const quizImage = quiz[0].desktopImage;
    // console.log(quizImage);

    // console.log(quizImage[0].image);
    useEffect(()=> {
        if(!quizData){
    setQuizData(topics)
        }
    },[topics]);

    // const quiz = topics.filter(topic => topic._id === id);

    const imgBackground = {
        background: "rgba(2, 103, 255, 0.2)"
    };

    const handleClick = () => {
        dispatch(selectQuestion(1))
    }


return (
    <div>
        <div className='hidden lg:block'>
        <UserNavbar/>
        </div>
        {/* Header */}
        <div className='hidden lg:flex py-10 px-16 bg-[#0267FF] lg:text-white font-semibold' id='quiz-header'>
            <NavLink to='/quizzes'>
            <button className='px-14 py-5 border-2 border-white'>Back</button>
            </NavLink>
            <div className='text-white lg:ml-36 xl:ml-96'>
                <h2 className='font-semibold text-4xl'>Test your knowledge on {quiz[0].topic}</h2>
                <p className='text-base font-light'>Practice Quiz</p>
            </div>
        </div>
        {/* Hero Image */}
        <div className='h-96 w-full relative'>
            <img src={quizImage} className='h-full w-full object-cover' alt="" />
            <div className='absolute bottom-6 left-4 text-white lg:hidden'>
                <h2 className='font-semibold text-4xl'>Test your knowledge on {quiz[0].topic}</h2>
                <p className='text-base font-light'>Practice Quiz</p>
            </div>
        </div>

        {/* Instructions */}
        <div className='flex flex-col items-center mt-4 lg:mt-16 px-4 lg:px-0'>
            <div className='flex flex-col lg:items-center'>
                <h3 className='text-3xl font-semibold mb-4'>Quiz Instructions</h3>
                <h4 className='text-lg lg:text-2xl opacity-70 lg:w-3/4'>To pass the quiz, you must achieve a score of at least 80% on the questions.</h4>
            </div>
            <div className='mt-9 lg:mt-36 grid lg:grid-cols-2 gap-y-11'>
                {/* Duration */}
                <div className='flex items-center'>
                    {/* Image */}
                    <div className='w-20 h-20 rounded-full flex items-center justify-center mr-6' style={imgBackground}>
                        <img src={timer} alt="" className='w-10 h-10'/>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h4 className='text-black font-semibold'>1 hour duration</h4>
                        <h6 className='mt-2 text-[#737373] text-sm lg:text-base'>You cannot pause after starting</h6>
                    </div>
                </div>

                {/* One Answer */}
                <div className='flex items-center'>
                    {/* Image */}
                    <div className='w-20 h-20 rounded-full flex items-center justify-center mr-6' style={imgBackground}>
                        <img src={keyboardreturn} alt="" className='w-10 h-10'/>
                    </div>
                    {/* Instruction */}
                    <div>
                        <h4 className='text-black font-semibold'>Select an answer for each question</h4>
                        <h6 className='mt-2 text-[#737373] text-sm lg:text-base'>An answer must be selected for each question</h6>
                    </div>
                </div>

                {/* All */}
                <div className='flex items-center'>
                    {/* Image */}
                    <div className='w-20 h-20 rounded-full flex items-center justify-center mr-6' style={imgBackground}>
                        <img src={allQuestions} alt="" className='w-10 h-10'/>
                    </div>
                    {/* Instruction */}
                    <div>
                        <h4 className='text-black font-semibold'>Complete all questions</h4>
                        <h6 className='mt-2 text-[#737373] text-sm lg:text-base'>{quiz[0].topic} questions</h6>
                    </div>
                </div>

                {/* Any order */}
                <div className='flex items-center'>
                    {/* Image */}
                    <div className='w-20 h-20 rounded-full flex items-center justify-center mr-6' style={imgBackground}>
                        <img src={repeat} alt="" className='w-10 h-10'/>
                    </div>
                    {/* Instruction */}
                    <div>
                        <h4 className='text-black font-semibold'>Solve questions in any order</h4>
                        <h6 className='mt-2 text-[#737373] text-sm lg:text-base'>Feel free to visit untackled questions</h6>
                    </div>
                </div>
            </div>
            <NavLink to={`/quiz/${id}/questions`} className="w-full lg:w-auto mb-56">
                <button 
                className='py-[10px] lg:px-[73px] w-full lg:w-auto text-white mt-24 bg-[#0267FF]'
                onClick={handleClick}>Start</button>
            </NavLink>
        </div>
    </div>
  )
}
