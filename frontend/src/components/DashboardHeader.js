import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function DashboardHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Dashboard Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
