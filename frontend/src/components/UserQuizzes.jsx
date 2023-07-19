import React, { useEffect, useState } from 'react';
import Api from './forms/services/api';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const token = useSelector(state => state.userData.user_token);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userId = Cookies.get('id');
      const url = `https://quiz-master.onrender.com/api/users/quizzes/${userId}`;
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setIsLoading(false);
        setQuizzes(response.data.quizzes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-[100px] '>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {quizzes.length === 0 ? (
            <img src="placeholder-image.png" alt="No quizzes available" />
          ) : (
            quizzes.map((ele, index) => (
              <div key={ele.id} className='flex mb-[50px]'>
                <img src={ele.image} className='w-16 h-16 border rounded-lg'/>
                
                <div className='ml-[1.5rem]'>
                  <div className='flex  align-center'>
                    <p className="text-xl font-semibold mr-[1rem]">{ele.topic}</p>
                    <p className='text-[#999] mt-[5px]'>{ele.date}</p>
                  </div>
                  <div className='text-[#999]'>By {Cookies.get('name')}</div>
                </div>
                {index !== quizzes.length - 1 && <hr className='my-[24px]' />}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserQuizzes;
