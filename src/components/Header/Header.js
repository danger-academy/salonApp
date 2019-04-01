import React from 'react';
import './Header.css';
import { Menu, Dropdown, Icon } from 'antd';
import Login from "../Login";
import Logout from "../Logout";

const menu = (
  <Menu id="menu">
    <Menu.Item key="0">
      <a href="">Photo Collection</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
    <Login />
    </Menu.Item>
    <Menu.Item key="3">
    <Logout />
    </Menu.Item>
  </Menu>
);

const Pageheader = () => (
  <header>
  <div id="dropdown">
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="">
      <Icon type="down-circle" />
    </a>
  </Dropdown>
  </div>
  <p id="welcome" className="w3-animate-zoom">...Ashley Love's Designs...</p>
  </header>

)

export default Pageheader;