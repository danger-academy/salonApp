import React from 'react';
import './upcomingAppoint.css';
import { Table, Divider } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="">{text}</a>,
}, {
  title: 'Service',
  dataIndex: 'service',
  key: 'service',
}, 
// {
//   title: 'Tags',
//   key: 'tags',
//   dataIndex: 'tags',
//  ?
// }, 
{
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

const data = [{
  key: '1',
  name: 'Samantha Brown',
  service: 'Hair Cut/Style',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  service: 'Mens Cut',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Rumi Carter',
  service: 'Highlights',
  tags: ['cool', 'teacher'],
}];

const UpcomingAppoint = () => (

<div id="tableContent">
<h2>Upcoming Appointments</h2>
<Table columns={columns} dataSource={data} />
</div>

)

export default UpcomingAppoint;