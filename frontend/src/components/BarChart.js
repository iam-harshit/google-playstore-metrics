import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Paper, Typography } from '@mui/material';
Chart.register(...registerables);


const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.packageName),
    datasets: [
      {
        label: 'Downloads',
        data: data.map(item => item.downloads),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Paper>
      <Typography variant="h5">Downloads by Package</Typography>
      <Bar data={chartData} />
    </Paper>
  );
};

export default BarChart;
