import React, { useEffect, useState } from 'react';
import Api from './forms/services/api';
import Cookies from 'js-cookie';

const UserQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = Cookies.get('id');
        const response = await Api.get(`users/recent-quizzes/${userId}`);
        console.log(response);
        setQuizzes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Quizzes</h1>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UserQuizzes;
