import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
Chart.register(...registerables);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.packageName),
    datasets: [
      {
        label: "Downloads",
        data: data.map((item) => item.downloads),
        backgroundColor: "#4bc0c033",
        borderColor: "#4bc0c0",
        borderWidth: 1,
      },
      {
        label: "Uninstalls",
        data: data.map((item) => item.uninstalls),
        backgroundColor: "#ff638433",
        borderColor: "#ff6384",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h5">Downloads and Uninstalls by Package Name</Typography>
      <Bar data={chartData} />
    </Box>
  );
};

export default BarChart;
