import React, { useEffect, useState } from 'react';
import Api from './forms/services/api';
import Cookies from 'js-cookie';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserQuizzes = () => {
  const [quizzes, setQuizzes] = useState();
  const token = useSelector(state=>state.userData.user_token)

  useEffect(() => {
    const fetchData = async () => {
      const userId = Cookies.get('id')
      const url = `https://quiz-master.onrender.com/api/users/quizzes/${userId}`
      try {
        const response = await axios.get(url, {
          headers:{
            'Authorization': `Bearer ${token}`
          }
        })
        setQuizzes(response.data.quizzes)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);
  console.log(quizzes);

  return (
    <div>
        {/* {quizzes} */}
        
    </div>
  );
};

export default UserQuizzes;
