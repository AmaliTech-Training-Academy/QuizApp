import React, { useEffect, useState } from 'react';
import Api from './forms/services/api';


// export const DonutChart = () => {
//   const [chartData, setChartData] = useState(null);

  
//   useEffect(() => {
//     // Fetch data from the API
//     fetchData()
//       .then(data => {
//         // Process the data and format it for the donut chart
//         const chartData = {
//           labels: data.map(item => item.topic),
//           datasets: [
//             {
//               data: data.map(item => item.accuracy),
//               backgroundColor: ['#1C1C1C', '#95A4FC', '#BAEDBD'], // Set your desired colors here
//             },
//           ],
//         };

//         setChartData(chartData);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const fetchData = async () => {
//     const response = await Api.get(`users/performance${Cookies.get('id')}`)
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     return data
//   };



//   return (
//     <div>
//       {chartData && (
//         <div className="barChart py-[3rem] px-[3.5rem] shadow-lg shadow-[#00000040]  rounded-lg mt-[45px] lg:mt-[0]">
//             <p className='mb-[48px] font-semibold text-[1.441rem]'>Performance Records</p>
//             <Doughnut
//                 data={chartData}
//                 options={{
//                 // Specify additional options for the chart if needed
//             }}
//             />
//         </div>
//       ) 
//       }
//     </div>
//   );
// };



// const BarChart = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await Api.get('users/performance')
//       const data = response.data
//       createChartData(data)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const createChartData = (data) => {
//     const labels = data.map((item) => item.topic);
//     const accuracyData = data.map((item) => item.accuracy);

//     const chartData = {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Accuracy',
//           data: accuracyData,
//           backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the color as per your preference
//         },
//       ],
//     };

//     setChartData(chartData);
//   };

//   return (
//     <>
//     {chartData && 
//         <div className="doughnutChart py-[3rem] px-[3.5rem] shadow-lg shadow-[#00000040]  rounded-lg">
//             <p className='mb-[72px] font-semibold text-[1.441rem]'>Performance Records</p>
         
//             <Bar
//             data={chartData}
//             options={{
//                 scales: {
//                   y: {
//                    beginAtZero: true,
//                    max: 100,
//                   title: {
//                        display: true,
//                       text: 'Accuracy (%)'},
//                   },
//                  },
//              }}
//         />
      
//          </div>
//     }
//     </>
   
//   );
// };

// export default BarChart;


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

 const BarGraph = () => {
  return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
  );
};

export default BarGraph



