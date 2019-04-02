import React from "react";
import { Button } from 'antd';
import '../Directory/Directory.css';


const Directory = () => (
    <div id="container">
         <Button type="dashed" block id="">All Appointments</Button>
         <Button type="dashed" block>My Schedule</Button>
         <Button type="dashed" block>Lookbook</Button>
         <Button type="dashed" block>Photos</Button>
         <Button type="dashed" block>Users</Button>
         <Button type="dashed" block>Inventory</Button>
    </div>
        
);

export default Directory;