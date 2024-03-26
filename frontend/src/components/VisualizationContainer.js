import React, {useEffect} from 'react';
import FilterOptions from './FilterOptions';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { Grid } from '@mui/material';
import { useData } from '../utils/DataContext';

function VisualizationContainer() {
  const {data, fetchData} = useData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2>Visualization Container</h2>
      </Grid>
      <Grid item xs={12}>
        <FilterOptions />
      </Grid>
      <Grid item xs={10}>
        <BarChart data={data}/>
      </Grid>
      <Grid item xs={10}>
        <LineChart data={data}/>
      </Grid>
      <Grid item xs={10}>
        <PieChart data={data}/>
      </Grid>
    </Grid>
  );
}

export default VisualizationContainer;
