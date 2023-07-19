import React, { useEffect, useState } from 'react'
import { QuizFilters } from '../components/QuizFilters'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai';
import { RiFilter2Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { setSearchQuery } from '../features/topicSlice';
import { Quizzes } from '../components/Quizzes';
import { Header } from '../components/Header';



export const FilterPage2 = () => {
    const dispatch = useDispatch();

    const topics = useSelector((state) => state.topics.data);
    const searchQuery = useSelector(state=> state.topics.searchQuery)

    const [showOptions, setShowOptions] = useState(false);
    const [showFilteredResults, setShowFilteredResults] = useState(false); 

    const onChange = (e) => {
        const query = e.target.value;
        dispatch(setSearchQuery(query));
    };

    const navShadow = {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    };

    const filter = useSelector(state => state.topics.filterData);
    console.log(filter);

    useEffect(() => {
        const anyFilterTrue = Object.values(filter).some((value) => value);
        setShowOptions(anyFilterTrue);
    }, [filter]);

    const handleShowResults = () => {
        setShowFilteredResults(true);
    };

    const resetFilters = () => {
        setShowFilteredResults(fasle)
    }


    return (
    <div className=''>
        <div className='flex items-center justify-between bg-[#0267FF] py-6 pl-4 pr-8 text-white' style={navShadow}>
            <NavLink to="/quizzes" className='flex items-center'>
                <IoIosArrowBack className='mr-3'/> Back
            </NavLink>
            <div className='flex items-center border border-[#808080] rounded bg-white pl-4'>
                <AiOutlineSearch className='text-black opacity-50 mr-2' size={17}/>
                <input 
                type='text' 
                className='w-56 focus:outline-none text-black' 
                value={searchQuery}
                onChange={onChange}
                />            
            </div>
            <NavLink 
            to="/filter"
            onClick={resetFilters}>
                <RiFilter2Line size={16}/>
            </NavLink>
        </div>
        {showFilteredResults ? (
            <>
        <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
        <div className='mx-4'>
            <div className='text-[#717D96] py-5'>Found {topics.length} quizzes</div>
            <Quizzes data={topics}/>
        </div>
            </>
        ) : (
        <div className=''>
        <QuizFilters topics={topics} />
            {showOptions && (
            <div className='bg-white text-black absolute w-full rounded flex justify-between px-4 mt-40'>
                <button className='py-4 px-10 border-none text-black focus:outline-none' onClick={() => setShowOptions(false)}>
                    Cancel
                </button>
                <button className='py-4 px-16 bg-[#0267FF] focus:outline-none' onClick={handleShowResults}>
                    Show Results
            </button>
            </div>
        )}
        </div>
    )}
    </div>
)
}
