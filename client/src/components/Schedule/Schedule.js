import React from 'react';
import { DatePicker, Divider } from 'antd';
import '../Schedule/Schedule.css';

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const Scheduler = () => (
  <div id="scheduleContent">
    <p className="fontTitle">Create Your Schedule</p>
    <Divider />
    <br />
    <p className="font">Start time/date</p>
    <DatePicker
      showTime
      showTime={{ use12Hours: true, format: "HH:mm a" }}
      format="YYYY-MM-DD HH:mm a"
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
    <br />
    <br />
    <p className="font">End time/date</p>
    <DatePicker
      showTime
      showTime={{ use12Hours: true, format: "HH:mm a" }}
      format="YYYY-MM-DD HH:mm a"
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
  </div>
);

export default Scheduler;