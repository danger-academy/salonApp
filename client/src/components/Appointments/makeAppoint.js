import React, { useContext, useState, useEffect } from 'react';
import { DatePicker, Menu, Dropdown, Icon, message, Modal, Button, Divider, Alert } from 'antd';
import '../Appointments/makeAppoint.css';
import API from "../../utils/API";
import { AuthConsumer } from "../../authContext";


function makeAppoint() {

    const dataUser = useContext(AuthConsumer);
    const user = dataUser.user;
    const [data, setData] = useState([]);
    const [newDateString, setNewDateString] = useState("");
    const [styleService, setStyleService] = useState("");

    useEffect(() => {
      API.findTheAppt(user.id)
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
            title: 'Would you like to make this appointment? ' + styleService + " on " + newDateString,
            content: 'Click OK to confirm',
            onOk() {
                console.log('OK');
                console.log(newDateString);
                API.saveTheDate({ date: newDateString, service: styleService, user_id: user.id })
                    .then(res => console.log(res))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const onOk = newDateString => {
        // setNewDateString(dateString);
        console.log('onOk: ', newDateString); 
    }

    const onClick = ({ key }) => {
        message.info( "You chose " + key + ".");
        setStyleService(key);
        console.log(styleService);
    };

    const menu = (
        <Menu className="menu" onClick={onClick}>     
            <Menu.Item key="Woman's Cut">Woman's Cut</Menu.Item>
            <Menu.Item key="Woman's Cut and Style">Woman's Cut and Style</Menu.Item>
            <Menu.Item key="Woman's Cut and Color">Woman's Cut and Color</Menu.Item>
            <Menu.Item key="Men's Cut">Men's Cut</Menu.Item>
            <Menu.Item key="Men's Cut and Color">Mens Cut and Color</Menu.Item>
            <Menu.Item key="Nail Services">Nail Services</Menu.Item>
        </Menu>
    );
// const makeAppoint = () => (
    return( 
        <div id="makeAppContent">
            <p id="title">Create A New Appointment</p>
            <Divider />
            <div id='choices'>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">
                    Select A Service<Icon type="down" />
                </a>
                </Dropdown>
                <Divider />
                <p id="dateInputText">Select Your Date:</p>
                <DatePicker
                    id='dateMake'
                    showTime={{ use12Hours: true, format: "HH:mm a" }}
                    format="YYYY-MM-DD HH:mm a"
                    placeholder="Select Time"
                    onChange={onChange}
                    onOk={onOk}
                />
                <Divider />
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
                        message={"Current Appointment : " + item.date + " Service : " + item.service}
                        closable
                    />                        
                ))}
            </ul>
        </div>
    );
}
export default makeAppoint;