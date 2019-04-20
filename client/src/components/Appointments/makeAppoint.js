import React, { useContext, useState, useEffect } from 'react';
import { DatePicker, Menu, Dropdown, Icon, message, Modal, Button, Divider, Alert } from 'antd';
import '../Appointments/makeAppoint.css';
import API from "../../utils/API";
import { AuthConsumer } from "../../authContext";



function makeAppoint() {

    const datauser = useContext(AuthConsumer);
    const user = datauser.user;
    const [data, setData] = useState([]);
    const [newDateString, setNewDateString] = useState("");

    useEffect(() => {
      API.findTheAppt(user.email)
        .then(result => setData(result.data.appointment));
    }, []);

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        setNewDateString(dateString);
    }

    const confirm = Modal.confirm;

    function showConfirm() {
        confirm({
            title: 'Would you like to make this appointment? ' + newDateString,
            content: 'Click OK to confirm',
            onOk() {
                console.log('OK');
                console.log(newDateString);
                API.saveTheDate({ date: newDateString, email:user.email })
                .then(res => console.log(res))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const onOk = dateString => {
        console.log('onOk: ', dateString);
         
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
        <div id="makeAppContent">
            <p id="title">Create a new appointment</p>
            <Divider />
            <br />
            <div id='choices'>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                    Select a service<Icon type="down" />
                </a>
                </Dropdown>
                <br />
                <br />
                <DatePicker
                    id='dateMake'
                    showTime={{ use12Hours: true, format: "HH:mm a" }}
                    format="YYYY-MM-DD HH:mm a"
                    placeholder="Select Time"
                    onChange={onChange}
                    onOk={onOk}
                />
                <br />
                <br />
                <Button onClick={showConfirm}>
                 Confirm
                </Button>
                </div>
                <br />
                <br />
                {console.log(data)}
                <ul>
                    {data.map(item => (
                        <Alert
                            key={item.date}
                            message={"Recently Made Appointment : " + item.date}
                            closable
                            />
                        
                    ))}
                </ul>
            </div>
    );
}

export default makeAppoint;