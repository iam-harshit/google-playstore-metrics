import {useNavigate} from "react-router-dom";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import React from "react";
import "./DashboardHeader.css";

function DashboardHeader() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login", {replace: true});
  }

  if(name && name.length > 0){
    return(
      <Box className="header">
        <Typography className="header-title" variant="h6" component="div">
           Dashboard
        </Typography>
        <Stack direction="row" spacing={2}>
        <Avatar alt={name} src="avatar.png" />
        <p>{name}</p>
        <Button
          variant="contained"
          onClick={logoutHandler}
        >
          Logout
        </Button>
        </Stack>
      </Box>
    )
  }
};

export default DashboardHeader;