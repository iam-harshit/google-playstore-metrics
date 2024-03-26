import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
Chart.register(...registerables);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.packageName),
    datasets: [
      {
        label: "Ratings",
        data: data.map((item) => item.ratings),
        fill: false,
        borderColor: "#4bc0c0",
        tension: 0.1,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h5">Ratings by Package Name</Typography>
      <Box >
      <Line data={chartData} />
      </Box>
    </Box>
  );
};

export default LineChart;
