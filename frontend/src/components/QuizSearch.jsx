import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterTopicsBySearch, setSearchQuery } from '../features/topicSlice';
import { useNavigate } from 'react-router-dom';


export const QuizSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector(state=> state.topics.searchQuery)

  const onChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchRedirect() 
    }
  };

  const handleSearchRedirect = () => {
    navigate(`/quizzes?search=${searchQuery}`);
    dispatch(filterTopicsBySearch(searchQuery))
  };

    const searchBtnBackground = {
        background: "linear-gradient(0deg, #0267FF, #0267FF), linear-gradient(100.97deg, #6425D3 21.56%, #A259FF 84.43%), linear-gradient(0deg, #0267FF, #0267FF), linear-gradient(118.19deg, #1275D0 21.37%, #62AEF3 69.77%)"
    }

  return (
    <div className='hidden lg:block'>
        <input type="text" 
        placeholder='Search quiz by name'
        value={searchQuery}
        onInput={onChange}
        onKeyDown={handleKeyPress} 
        className='mr-2 border border-[#999999] h-full rounded-[4px] pl-4 w-[401px] focus:outline-gray-500' />
        <button 
        className=' text-white rounded-[4px] px-4 py-[10px]' 
        style={searchBtnBackground}
        onClick={handleSearchRedirect}
        >Search</button>
    </div>
  )
}
