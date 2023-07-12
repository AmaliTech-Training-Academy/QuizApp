import React, { useState, useEffect } from 'react';
import { Chart as ChartJs, registerables, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Api from '../forms/services/api';
import Cookies from 'js-cookie';

ChartJs.register(ArcElement, Tooltip, Legend, ...registerables);

const DoughnutChart = () => {
  const [chart, setChart] = useState([]);
  const backgroundColor = ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#B1E3FF', '#95A4FC', '#A1E3CB'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`users/performance/${Cookies.get('id')}`);
        setChart(response.data.performanceData);
      } catch (error) {
        console.log(error);
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

  return (
    <div>
      <Doughnut data={data} options={options} height={400} />
    </div>
  );
};

export default DoughnutChart;
