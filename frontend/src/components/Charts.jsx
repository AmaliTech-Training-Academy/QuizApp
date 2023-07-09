import React, { useEffect, useState } from 'react';

import {PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const DonutChart = () => {
  // Data
  const data = [
    { name: 'HTML', value: 50 },
    { name: 'CSS', value: 30 },
    { name: 'JavaScript', value: 40 },
    { name: 'Other', value: 20 },
  ];

  // Colors
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={100}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      
      <Legend
        align="right"
        verticalAlign="top"
        layout="vertical"
        height={150}
         />
    </PieChart>
  );
};






export const BarGraph = () => {
  const data = [
    { name: 'html', uv: 300000, color: '#464ab5'},
    { name: 'css', uv: 600000, color: '#ff9900' },
    { name: 'js', uv: 900000, color: '#e91e63'},
    { name: 'figma', uv: 400000,  color: '#00cc99'},
    { name: 'typescript', uv: 250000,color: '#3f51b5'},
    { name: 'other', uv: 350000, color: '#ff5722'}
  ];
  return (
    <ResponsiveContainer width={600} height={400}>
      <BarChart
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
        <YAxis
          tickFormatter={(value) => `${value / 1000}K`}
          domain={[0, 'dataMax']}
        />
        <Tooltip />
        <Legend />
        <Bar barSize={20} radius={[5, 5, 0, 0]} dataKey="uv">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};








