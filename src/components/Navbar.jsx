import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../img/cryptocurrency.png'; 
import MenuItem from 'antd/es/menu/MenuItem';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <div className="logo-title">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryoto</Link>
            </Typography.Title>
            </div>

            <Menu theme="dark">
              <MenuItem icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </MenuItem>
              <MenuItem icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
              </MenuItem>
              <MenuItem icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </MenuItem>
            </Menu>
          
            
            
            {/* <Button className="menu-control-container">

            </Button> */}
        </div>
    </div>
  )
}

export default Navbar;