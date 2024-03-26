import React from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
Chart.register(...registerables);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.packageName),
    datasets: [
      {
        label: "Revenue",
        data: data.map((item) => item.revenue),
        backgroundColor: [
          "#ff638433",
          "#36a2eb33",
          "#ffce5633",
          "#4bc0c033",
          "#9966ff33",
          "#ff9f4033",
        ],
        borderColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h5">Revenue by Package Name</Typography>
      <Pie data={chartData} />
    </Box>
  );
};

export default PieChart;
