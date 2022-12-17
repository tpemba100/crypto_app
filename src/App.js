import { Layout, Space, Typography } from "antd";
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";

import './App.css';



function App() {
  return (
    <div className="app">
      <div className="navBar"> 
        <Navbar />
      </div>
      <div className="main"> 

      </div>
      <div className="footer"> 

      </div>
    </div>
  );
}

export default App;
