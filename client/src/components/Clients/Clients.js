import React from 'react';
import '../Clients/Clients.css';
import { Select, Divider } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

const Clients = () => (
    
    <div id="userContent">
        <p id="usersTitle">Users Features</p>
        <Divider />
        <div id='userChoices'>
        <p id="userChoice">Choose A Person To View Their Features:</p>
        <br />
        <Select
        defaultValue="Clients"
        style={{ width: 200 }}
        onChange={handleChange}
        >
            <OptGroup label="Users">
            <Option value="Jack">Jack</Option>
            <Option value="Lucy">Lucy</Option>
            </OptGroup>
        </Select>
        <br />
        </div>
    </div>
    
)

export default Clients;