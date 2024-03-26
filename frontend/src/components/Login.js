import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { API_BASE_URL } from "../utils/constants";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name] : event.target.value
    }));
  }


  const login = async (formData) => {
      setIsLoading(true);
      axios.post(`${API_BASE_URL}/auth/login`, {
        email: formData.email,
        password: formData.password
      })
      .then((response) => {
        if(response.status === 200){
          persistLogin(response.data.tokens.access.token, response.data.user.name);
          enqueueSnackbar("Logged in successfully", {variant: "success"});
          navigate("/home");
        }
      })
      .catch((error) => {
        if(error.response.status === 400){
          enqueueSnackbar(error.response.data.message, {variant: "error"});
        }
        else{
          enqueueSnackbar("Something went wrong. Check that the backend is running, reachable and returns valid JSON.", {variant: "error"});
        }
      });
      setFormData({
        email: "",
        password: ""
      })
    setIsLoading(false);
  };


  const validateInput = (data) => {
    const {email, password} = data;
    if(email.length === 0){
      enqueueSnackbar("Email required", {variant: "warning"});
      return;
    }
    else if(password.length === 0){
      enqueueSnackbar("Password required", {variant: "warning"});
      return;
    }
    else{
      login(data);
    }
  };


  const persistLogin = (token, name) => {
    localStorage.setItem("name", name);
    localStorage.setItem("token", token);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className="content">
        <Stack spacing={2} className="form">
        <h2>Login</h2>
          <TextField
          id="email"
          label="Email"
          variant="outlined"
          title="Email"
          name="email"
          placeholder="Email"
          fullWidth
          value={formData.email}
          onChange={changeHandler}
          />
          <TextField
          id="password"
          label="Password"
          variant="outlined"
          title="password"
          type="password"
          name="password"
          placeholder="Password"
          fullWidth
          value={formData.password}
          onChange={changeHandler}
          />
          {
            isLoading ? (
              <CircularProgress/>
            ) : 
            (
            <Button variant="contained" onClick={() => validateInput(formData)}>
            LOGIN
           </Button>
            )
          }
           <p className="secondary-action">
            Don't have an account?{" "}
             <Link className="link" to="/">
              Register now
             </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
