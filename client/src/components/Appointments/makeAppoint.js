import React from 'react';
import { DatePicker, Menu, Dropdown, Icon, message, } from 'antd';
import UpcomingAppoint from '../Appointments/upcomingAppoint';
import '../Appointments/makeAppoint.css';

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Men's Cut</Menu.Item>
      <Menu.Item key="2">Woman's Cut</Menu.Item>
      <Menu.Item key="3">Woman's Cut and Style</Menu.Item>
      <Menu.Item key="4">Mens Cut and Color</Menu.Item>
      <Menu.Item key="5">Woman's Cut and Color</Menu.Item>
      <Menu.Item key="6">Nail Services</Menu.Item>
    </Menu>
  );

const makeAppoint = () => (
  <div>
    <p id="title">To create a new appointment, select a service and an available date.</p>
    <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Services <Icon type="down" />
    </a>
    </Dropdown>
    
    <DatePicker
      showTime
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />

    <UpcomingAppoint />
    </div>
);

export default makeAppoint;