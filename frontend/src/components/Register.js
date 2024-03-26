import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import "./Register.css";
import { API_BASE_URL } from "../utils/constants";

function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  
  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const register = async (formData) => {
    setIsLoading(true);
    axios
      .post(`${API_BASE_URL}/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        if (response.status === 201) {
          enqueueSnackbar("Registered Successfully", { variant: "success" });
          navigate("/login", {replace: true});
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          enqueueSnackbar(error.response.data.message, { variant: "error" });
        } else {
          enqueueSnackbar(
            "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
            { variant: "error" }
          );
        }
      });
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsLoading(false);
  };


  const validateInput = (data) => {
    const { name, email, password, confirmPassword } = data;
    if (name.length === 0) {
      enqueueSnackbar("Name required", { variant: "warning" });
      return;
    } else if (name.length < 6) {
      enqueueSnackbar("Name must be atleast 6 characters length", {
        variant: "warning",
      });
      return;
    } else if (email.length === 0) {
      enqueueSnackbar("Email required", { variant: "warning" });
      return;
    } else if (password.length === 0) {
      enqueueSnackbar("Password required", { variant: "warning" });
      return;
    } else if (password.length < 8) {
      enqueueSnackbar("Password must be atleast 8 characters length", {
        variant: "warning",
      });
      return;
    } else if (confirmPassword.length === 0) {
      enqueueSnackbar("Confirm password required", { variant: "warning" });
      return;
    } else if (password !== confirmPassword) {
      enqueueSnackbar("Passowrd do not match", { variant: "warning" });
      return;
    } else {
      register(data);
    }
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
          <h2>Register</h2>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            title="Name"
            name="name"
            placeholder="Enter name"
            fullWidth
            value={formData.name}
            onChange={changeHandler}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            title="Email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            value={formData.email}
            onChange={changeHandler}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            helperText="Password must be atleast 8 characters length"
            fullWidth
            placeholder="Enter a password with minimum 8 characters"
            value={formData.password}
            onChange={changeHandler}
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            value={formData.confirmPassword}
            onChange={changeHandler}
          />
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              onClick={() => validateInput(formData)}
            >
              Register Now
            </Button>
          )}
          <p className="secondary-action">
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login here
            </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
}

export default Register;
