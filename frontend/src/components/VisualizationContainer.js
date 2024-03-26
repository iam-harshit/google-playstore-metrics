import React, { useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { Grid, CircularProgress } from "@mui/material";
import { useData } from "../utils/DataContext";
import { Box } from "@mui/system";
import "./VisualizationContainer.css";

function VisualizationContainer() {
  const { data, isLoading, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, []);

  return(
   isLoading ? (
    <Box className="loading">
      <CircularProgress />
      <h4>Hold on, we're loading the data</h4>
    </Box>
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={10} sx={{marginTop: 4}}>
        <BarChart data={data} />
      </Grid>
      <Grid item xs={10} sx={{marginTop: 6}}>
        <LineChart data={data} />
      </Grid>
      <Grid item xs={6} sx={{marginTop: 6}}>
        <PieChart data={data} />
      </Grid>
    </Grid>
  )
  );
}

export default VisualizationContainer;
