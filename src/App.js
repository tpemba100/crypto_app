// https://www.youtube.com/watch?v=9DDX3US3kss&t=1768s

// The css import 'antd/dist/antd.css'; --> causing error


import { Layout, Space, Typography } from "antd";
import React from "react";
import { Route, Link, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";

import './App.css';




function App() {
  return (
    <div className="app">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>

              <Route path="home" element={<Homepage />} />
              <Route path="exchanges" element={<Exchanges />} />
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="cryptoDetails" element={<CryptoDetails />} />
              <Route path="news" element={<News />} />


            </Routes>
          </div>
        </Layout>
      </div>
      {/* <div className="footer">

      </div> */}
    </div>
  );
}

export default App;
