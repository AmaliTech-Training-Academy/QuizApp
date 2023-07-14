import React, { useEffect, useState } from 'react';
import Api from './forms/services/api';
import Cookies from 'js-cookie';

const RecentQuizzes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`users/recent-quizzes/${Cookies.get('id')}`);
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
        <p className="font-semibold text-2xl">Recent quizzes</p>
        <p className="text-blue-700 cursor-pointer">See All</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {data.map((element) => (
          <div key={element.id}>
            <img src={element.image} alt={element.title} className="w-full h-[250px] rounded-lg" />
            <p className="mt-2 text-xl font-semibold">{element.topic}</p>
            <p className="text-gray-500">{element.Date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQuizzes;
