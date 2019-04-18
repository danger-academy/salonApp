import React, { useContext, useState, useEffect } from 'react';
import { DatePicker, Menu, Dropdown, Icon, message, } from 'antd';
import '../Appointments/makeAppoint.css';
import API from "../../utils/API";
import { AuthConsumer } from "../../authContext";

function makeAppoint() {

    const datauser = useContext(AuthConsumer);
    const user = datauser.user;
    const [data, setData] = useState([]);

    useEffect(() => {
      API.findTheAppt(user.email)
        .then(result => setData(result.data.appointment));
    }, []);

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    const onOk = dateString => {
        console.log('onOk: ', dateString); 
        API.saveTheDate({ date: dateString, email:user.email })
        .then(res => console.log(res))
    }

    const onClick = ({ key }) => {
        message.info(`Service Chosen`);
    };

    const menu = (
        <Menu className="menu" onClick={onClick}>
            <Menu.Item key="1">Men's Cut</Menu.Item>
            <Menu.Item key="2">Woman's Cut</Menu.Item>
            <Menu.Item key="3">Woman's Cut and Style</Menu.Item>
            <Menu.Item key="4">Mens Cut and Color</Menu.Item>
            <Menu.Item key="5">Woman's Cut and Color</Menu.Item>
            <Menu.Item key="6">Nail Services</Menu.Item>
        </Menu>
    );

// const makeAppoint = () => (
    return( 
        <div>
            <p id="title">Create a new appointment</p>
            <br />
            <div id='choices'>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                    Select a service<Icon type="down" />
                </a>
                </Dropdown>
                <br />
                <DatePicker
                    id='dateMake'
                    showTime={{ use12Hours: true, format: "HH:mm a" }}
                    format="YYYY-MM-DD HH:mm a"
                    placeholder="Select Time"
                    onChange={onChange}
                    onOk={onOk}
                />
                {console.log(data)}
                <ul>
                    {data.map(item => (
                        <li key={item.date}>
                            Appointment : {item.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default makeAppoint;