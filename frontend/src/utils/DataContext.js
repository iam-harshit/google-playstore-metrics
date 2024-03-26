import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_BASE_URL } from "./constants";
import { enqueueSnackbar } from "notistack";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/metrics/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
      }
    }
    setIsLoading(false);
  };

  return (
    <DataContext.Provider value={{ data, isLoading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
