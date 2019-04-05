import React from "react";
import { Button } from 'antd';
import '../Directory/Directory.css';

class Directory extends React.Component {

    // showBook() {
    //     console.log("showBook works")
    //     this.setState({
    //         showComponent: true,
    //       });
    // }

    render() {
        return (
            
            <div id="container">
                <Button type="dashed" block id="">All Appointments</Button>
                <Button type="dashed" block>My Schedule</Button>
                <Button type="dashed" block onClick={this.showBook}>Lookbook</Button>
                <Button type="dashed" block>Photos</Button>
                <Button type="dashed" block>Users</Button>
                <Button type="dashed" block>Inventory</Button>
            </div> 
        )
    }
}

export default Directory;