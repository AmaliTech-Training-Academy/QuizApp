import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiFilter2Line } from 'react-icons/ri'
import { IoIosArrowBack } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { Header } from '../components/Header'
import { Quizzes } from '../components/Quizzes'
import { useSelector, useDispatch } from 'react-redux'
import { getTopics } from '../features/topicSlice'


export const SearchPage = () => {
    const {data:topics} = useSelector((state) => state.topics);

    const [quizData, setQuizData] = useState(null);
    const [searched, setSearched] = useState(false);
    const [query, setQuery] = useState("")

    const navShadow = {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    };

    const dispatch = useDispatch();

    useEffect(()=> {
        if(!quizData){
        dispatch(getTopics())
        }
        setQuizData(topics)
        },[topics]);

    const showResults = () => {
        setSearched(!searched)
    };

    const goToResults = (key) => {
        if(key === "Enter"){
        showResults();
        }else{
        setSearched(false)
        }
    };

    const onChange = (e) => {
        const matchedTopics = topics.filter(topic => 
        topic.topic.toLowerCase().includes(e.target.value.toLowerCase()));
        setQuizData(matchedTopics);
        setQuery(e.target.value)
        };
    
return (
    <div>
        <div className='flex items-center justify-between bg-[#0267FF] py-6 pl-4 pr-8 text-white' style={navShadow}>
            <NavLink to="/quizzes" className='flex items-center'>
                <IoIosArrowBack className='mr-3'/> Back
            </NavLink>
            <div className='flex items-center border border-[#808080] rounded bg-white pl-4'>
                <AiOutlineSearch className='text-black opacity-50 mr-2' size={17}/>
                <input 
                type='text' 
                className='w-56 focus:outline-none text-black' 
                value={query}
                onChange={onChange}
                onKeyDown={(event)=> {
                goToResults(event.key); 
                }}/>            
            </div>
            <NavLink to="/filter">
                <RiFilter2Line size={16}/>
            </NavLink>
        </div>
        {
            searched ? 
            <div>
                <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
                <div className='mx-4'>
                    <div className='text-[#717D96] py-5'>Found {quizData.length} quizzes</div>
                    <Quizzes data={quizData}/>
                </div>
            </div>
            :
            <div></div>
        }
    </div>
  )
}
