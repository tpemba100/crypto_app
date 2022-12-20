// https://www.youtube.com/watch?v=9DDX3US3kss&t=1768s

// The css import 'antd/dist/antd.css'; --> causing error

// https://rapidapi.com/coingecko/api/coingecko/
// https://api.coingecko.com/api/v3/exchanges

import { Layout, Space, Typography } from "antd";
import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";
import "./App.css";

function App() {


  return (
    <div className="app">
      <div className="navBar">
        <Navbar />
      </div>
      
      <div className="main">
          <div className="routes">
        <Layout>
            <Routes>
              <Route path="" element={<Homepage />} />
              <Route path="exchanges" element={<Exchanges />} />
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="cryptoDetails" element={<CryptoDetails />} />
              <Route path="news" element={<News />} />
            </Routes>
        </Layout>
          </div>
        
        <div className="footer">
          {/* what is level in Typo title for footer */}
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto App <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
