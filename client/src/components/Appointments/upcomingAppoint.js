import React, { useContext, useState, useEffect } from 'react';
import './upcomingAppoint.css';
import { Table, Divider } from 'antd';
import API from "../../utils/API";
import { AuthConsumer } from "../../authContext";


function UpcomingAppoint() {
    
    const dataUser = useContext(AuthConsumer);
    const user = dataUser.user;
    const [data, setData] = useState([]);

    useEffect(() => {
        API.findTheAppt(user.id)
          .then(result => setData(result.data.appointment));
    }, []);

    const columns = [{
        title: 'Name',
        dataIndex: '_id',
        key: '_id',
        render: text => <a href="">{text}</a>,
    }, {
        title: 'Service',
        dataIndex: 'date',
        key: 'date',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="">Edit</a>
                <Divider type="vertical" />
                <a href="">Delete</a>
            </span>
        ),
    }];

// const data = [{
//   key: '1',
//   name: 'Samantha Brown',
//   service: 'Hair Cut/Style',
//   tags: ['nice', 'developer'],
// }, {
//   key: '2',
//   name: 'Jim Green',
//   service: 'Mens Cut',
//   tags: ['loser'],
// }, {
//   key: '3',
//   name: 'Rumi Carter',
//   service: 'Highlights',
//   tags: ['cool', 'teacher'],
// }];

// const UpcomingAppoint = () => (
    return(

        <div id="tableContent">
            <h2>Upcoming Appointments</h2>
            <Table columns={columns} dataSource={data} />
            {/* {console.log(data)} */}
        </div>

    );
}

export default UpcomingAppoint;