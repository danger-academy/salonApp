import React from 'react';
import './upcomingAppoint.css';
import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
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
      <a href="javascript:;">Edit</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
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