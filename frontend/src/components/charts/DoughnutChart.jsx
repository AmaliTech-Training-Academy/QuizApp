import React, { useState, useEffect } from 'react';
import { Chart as ChartJs, registerables, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Api from '../forms/services/api';
import Cookies from 'js-cookie';
import book from '../../assets/DesktopView/Images/Book.gif'

ChartJs.register(ArcElement, Tooltip, Legend, ...registerables);

const DoughnutChart = () => {
  const [chart, setChart] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchState, setFetchState] = useState('')
  const backgroundColor = ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#B1E3FF', '#95A4FC', '#A1E3CB'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`users/performance/${Cookies.get('id')}`);
        setChart(response.data.performanceData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setFetchState(error.response.data.message)
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: chart.map((element) => element.topic),
    datasets: [
      {
        label: '# of accuracy',
        data: chart.map((element) => element.accuracy),
        backgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          generateLabels:  (chart) =>{
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
      <div className='flex flex-col justify-center'>
        <img src={book}/>
        <p className='text-center'>Loading...</p>
        </div>
      );
  }

  if (chart.length === 0) {
    // If performance data is empty, show 'Perform Quizzes'
    return (
      <div>
        {/* <div className='text-center'>Perform Quizzes</div> */}
        <div className='text-center'>{fetchState}</div>
      </div>
    );
  }

  return (
    <div>
      <Doughnut data={data} options={options} height={400} />
    </div>
  );
};

export default DoughnutChart;


