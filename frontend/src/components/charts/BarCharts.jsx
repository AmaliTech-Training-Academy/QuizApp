import React, { useState, useEffect } from 'react'
import { Chart as ChartJs, registerables, CategoryScale, LinearScale ,BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Api from '../forms/services/api'
import Cookies from 'js-cookie'

ChartJs.register(
  BarElement,CategoryScale, LinearScale,
  ...registerables
)

const BarCharts = () => {
  const [chart, setChart] = useState([])
  const backgroundColor = ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#B1E3FF', '#95A4FC', '#A1E3CB']

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(`users/performance/${Cookies.get('id')}`)
        setChart(response.data.performanceData)
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData()
  }, [])

  const data = {
    labels: chart.map(element => element.topic),
    datasets: [{
      label: '# of accuracy',
      data: chart.map(element => element.accuracy),
      backgroundColor: backgroundColor,
      borderRadius: 8,
      barThickness: 18,
    }]
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 19.2,
        fontWeight: 400,
        letterSpacing: 0.096
      }
    },
    plugins: {
      bar: {
        categorySpacing: 300 // Adjust the value as per your preference
      }
    }
  }

  return (
    <div>
      <Bar data={data} options={options} height={400} />
    </div>
  )
}

export default BarCharts
