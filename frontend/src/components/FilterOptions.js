import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

function FilterOptions() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField id="outlined-basic" label="Filter" variant="outlined" />
      </Grid>
      <Grid item>
        <Button variant="contained">Apply</Button>
      </Grid>
    </Grid>
  );
}

export default FilterOptions;
