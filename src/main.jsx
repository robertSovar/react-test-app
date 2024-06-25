import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeTheme from "./components/DarkModeTheme/DarkModeTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeTheme>
    <App />
  </DarkModeTheme>
);
