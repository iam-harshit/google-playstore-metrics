import React, { useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import VisualizationContainer from './VisualizationContainer';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

function Dashboard() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate("/login", {replace: true});
    }
  },[])

  return (
    <div className="main">
      <DashboardHeader />
      <VisualizationContainer />
    </div>
  );
}

export default Dashboard;
