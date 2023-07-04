import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export const QuizSearch = ({setQuizData}) => {

  const {data: topics} = useSelector(state => state.topics);
  const [query, setQuery] = useState("")

  const onChange = (e) => {
    const matchedTopics = topics.filter(topic => topic.topic.toLowerCase().includes(e.target.value));
    setQuizData(matchedTopics);
    setQuery()
  };

    const searchBtnBackground = {
        background: "linear-gradient(0deg, #0267FF, #0267FF), linear-gradient(100.97deg, #6425D3 21.56%, #A259FF 84.43%), linear-gradient(0deg, #0267FF, #0267FF), linear-gradient(118.19deg, #1275D0 21.37%, #62AEF3 69.77%)"
    }

  return (
    <div className=''>
        <input type="text" 
        placeholder='Search quiz by name'
        value={query}
        onInput={onChange}
        className='mr-2 border border-[#999999] h-full rounded-[4px] pl-4 w-[401px] focus:outline-gray-500' />
        <button 
        className=' text-white rounded-[4px] px-4 py-[10px]' 
        style={searchBtnBackground}
        >Search</button>
    </div>
  )
}
