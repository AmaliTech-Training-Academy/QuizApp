import React, { useEffect, useState } from 'react';
import Api from './forms/services/api';
import Cookies from 'js-cookie';
import takeQuiz from '../assets/DesktopView/Images/take-a-quiz.png'
import axios from 'axios';
import { useSelector } from 'react-redux';

const RecentQuizzes = () => {
  const [data, setData] = useState([]);
  const token = useSelector(state=> state.userData.user_token)

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://quiz-master.onrender.com/api/users/recent-quizzes/${Cookies.get('id')}?limit=5`
      try {
        const response = await axios.get(url, {headers:{
          'Authorization': `Bearer ${token}`
        }});
        console.log(response);
        setData(response.data.recentQuizzes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recent-quizzes  py-8 px-[2.5rem] lg:shadow-lg lg:rounded-lg lg:w-[48%] lg:mt-[0] mt-[50px] ">
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-2xl" >Recent quizzes</p>
        {data.length > 4  && <p className="text-blue-700 cursor-pointer">See All</p>}
        
      </div>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 gap-8">
        {data.slice(0, 4).map((element) => (
          <div key={element.id}>
            <img src={element.image} alt={element.title} className="w-full h-[250px] rounded-lg" />
            <p className="mt-2 text-xl font-semibold">{element.topic}</p>
            <p className="text-gray-500">{element.Date}</p>
          </div>
        ))}
      </div>
      ):(
        <img src={takeQuiz}/>
      )}
    </div>
  );
};

export default RecentQuizzes;
