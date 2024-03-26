import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./utils/DataContext";
import { SnackbarProvider } from "notistack";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      preventDuplicate
    >
      <DataProvider>
        <App />
      </DataProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
