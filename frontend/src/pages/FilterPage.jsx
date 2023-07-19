// import React, { useState, useEffect} from 'react'
// import { AiOutlineSearch } from 'react-icons/ai';
// import { RiFilter2Line } from 'react-icons/ri';
// import { IoIosArrowBack } from 'react-icons/io';
// import { NavLink } from 'react-router-dom';
// import { QuizFilters } from '../components/QuizFilters';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTopics } from '../features/topicSlice.js';
// import { Quizzes } from '../components/Quizzes';
// import { MobileNavbar } from '../components/MobileNavbar';
// import { Header } from '../components/Header';


// export const FilterPage = () => {
//     const topics = useSelector((state) => state.topics.data);

//     // const [quizData, setQuizData] = useState(null);
//     const [showResults, setShowResults] = useState(false); 
//     const [filterOpt, setFilterOpt] = useState([]);
//     const [query, setQuery] = useState("");
//     const [searched, setSearched] = useState(false);


//     const dispatch = useDispatch();

//     useEffect(()=> {
//         dispatch(getTopics())
//         },[topics]);

//     const navShadow = {
//         boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
//     };
//     const buttonBackground = {
//         background: "linear-gradient(0deg, #0267FF, #0267FF), linear-gradient(103.38deg, #1275D0 26.38%, rgba(185, 38, 188, 0.46) 78.13%)"
//     };
    
//     // Filter functions
//     const handleFilterOpt = (newFilterOpt) => {
//     setFilterOpt(newFilterOpt);
//     };
//     const handleChange = () => {
//         setShowResults(!showResults);
//     };
//     const emptyFilter = () => {
//         setFilterOpt([]);
//         window.location.reload()
//     };
//     const handleResetFilterOptions = () => {
//         setFilterOpt(initialFilterOptions);
//     };
//     console.log(filterOpt);

//     // Search Functions
//     const showQueryResults = () => {
//         setSearched(!searched)
//     };

    // const goToResults = (key) => {
//         if(key === "Enter"){
//         showQueryResults();
//         }else{
//         setSearched(false)
//         }
//     };

//     const onChange = (e) => {
//         const matchedTopics = topics.filter(topic => 
//         topic.topic.toLowerCase().includes(e.target.value.toLowerCase()));
//         setQuizData(matchedTopics);
//         setQuery(e.target.value)
//         };
    
// return (
//     <div>
//         {
//             searched ? 
//             <div>
//                 <div className='flex items-center justify-between bg-[#0267FF] py-6 pl-4 pr-8 text-white' style={navShadow}>
//                 <NavLink to="/search" className='flex items-center'>
//                     <IoIosArrowBack className='mr-3'/> Back
//                 </NavLink>
//                 <div className='flex items-center border border-[#808080] rounded bg-white pl-4'>
//                     <AiOutlineSearch className='text-black opacity-50 mr-2' size={17}/>
//                     <input 
//                     type='text' 
//                     className='w-56 focus:outline-none text-black'
//                     value={query}
//                     onChange={onChange}
//                     onKeyDown={(event)=> {
//                     goToResults(event.key); 
//                     }}
//                     />
//                 </div>
//                 <NavLink to="/filter">
//                     <RiFilter2Line size={16}/>
//                 </NavLink>
//             </div>
//                 <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
//                 <div className='mx-4'>
//                     <div className='text-[#717D96] py-5'>Found {topics.length} quizzes</div>
//                     <Quizzes data={topics}/>
//                 </div>
//             </div>
//             :
//             <div></div>
//         }
//         {
//             showResults ? 
//             <div> 
//                 <MobileNavbar/>
//                 <Header quizzes={"Quizzes"} quizLog={"Quiz Log"}/>
//                 <div className='mx-4'>
//                     <div className='text-[#717D96] py-5'>Found {topics.length} quizzes</div>
//                     <Quizzes data={topics}/>
//                 </div>
//             </div>
//             :
//             <>
//             { !searched ? 
//             <div className='flex items-center justify-between bg-[#0267FF] py-6 pl-4 pr-8 text-white' style={navShadow}>
//                 <NavLink to="/search" className='flex items-center'>
//                     <IoIosArrowBack className='mr-3'/> Back
//                 </NavLink>
//                 <div className='flex items-center border border-[#808080] rounded bg-white pl-4'>
//                     <AiOutlineSearch className='text-black opacity-50 mr-2' size={17}/>
//                     <input 
//                     type='text' 
//                     className='w-56 focus:outline-none text-black'
//                     value={query}
//                     onChange={onChange}
//                     onKeyDown={(event)=> {
//                     goToResults(event.key); 
//                     }}
//                     />
//                 </div>
//                 <NavLink to="/filter">
//                     <RiFilter2Line size={16}/>
//                 </NavLink>
//             </div> : <div></div>}
//             { !searched ? 
//             <QuizFilters topics={topics}/> 
//             :
//             <div></div>}
//         {/* See results */}
//         {
//             filterOpt.length > 0 && (
//             <div className='flex items-center justify-between px-4 mt-24'>
//                 <button className='py-3 px-8' onClick={emptyFilter}>Cancel</button>
//                 <button style={buttonBackground} className='py-3 px-16 rounded text-white' onClick={handleResetFilterOptions && handleChange}>Show Results</button>
//             </div>
//             )
//         }
//             </>
//         }
//     </div>
//     )
// }
