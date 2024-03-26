import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Paper, Typography } from '@mui/material';
Chart.register(...registerables);


const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.packageName),
    datasets: [
      {
        label: 'Ratings',
        data: data.map(item => item.ratings),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Paper>
      <Typography variant="h5">Ratings by Package</Typography>
      <Line data={chartData}/>
    </Paper>
  );
};

export default LineChart;
