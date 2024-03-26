import React, { createContext, useState, useContext } from 'react';
import axios from "axios";
import { API_BASE_URL } from './constants';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_BASE_URL + '/all', {
        headers:{
          "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjAxODBhNTIxODBlZDdlYTQzNGRmYTUiLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNDQ1MTU0LCJpYXQiOjE3MTE0MzA3NTQuODIzfQ.-8yb8uCrbQwKqx6F1VlcnXJ2GouERdCYxT2V8H_PBxQ"
        }
      });
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
