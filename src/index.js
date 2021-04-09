import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Journal } from "./components/Journal";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Journal />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);