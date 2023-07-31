import React, { useState, useEffect } from 'react';
import { Chart as ChartJs, registerables, ArcElement, Tooltip, Legend } from 'chart.js';
import {  Doughnut } from 'react-chartjs-2';
import Cookies from 'js-cookie';
import takeQuiz from '../../assets/DesktopView/Images/take-a-quiz.png'
import { useSelector } from 'react-redux';
import axios from 'axios';

ChartJs.register(ArcElement, Tooltip, Legend, ...registerables);

const DoughnutChart = () => {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const backgroundColor = ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#B1E3FF', '#95A4FC', '#A1E3CB'];
  const token = useSelector(state=>state.userData.user_token);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://quiz-master.onrender.com/api/users/performance/${Cookies.get('id')}`;
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setChart(response.data.performanceData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: chart ? chart.map((element) => element.topic):[],
    datasets: [
      {
        label: '# of score',
        data: chart ? chart.map((element) => element.score) : [],
        backgroundColor: backgroundColor,
      },
    ],
  };
  

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          generateLabels: (chart) => {
            const { data } = chart;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const dataset = data.datasets[0];
                const value = dataset.data[i];
                return {
                  text: `${label}: ${value}`,
                  fillStyle: dataset.backgroundColor[i],
                  hidden: false,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  };

  if (isLoading) {
    return (
      <div className='flex flex-col justify-center mt-[43px]'>
        <p className='text-center'>Loading...</p>
      </div>
    );
  }

  if (!chart || chart.length === 0) {
    return (
      <div className='mt-[43px]'>
        <img src={takeQuiz} alt="Take a Quiz" />
      </div>
    );
  }

  return (
    <div className='mt-[48px] mb-[20px]'>
      <Doughnut data={data} options={options} height={400} />
    </div>
  );
};

export default DoughnutChart;
