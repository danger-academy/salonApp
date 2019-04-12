import React from 'react';
import { DatePicker } from 'antd';
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
    <p className="font">Create your schedule!</p>
    <br />
    <p className="font">Pick your start time/date::</p>
    <DatePicker
      showTime
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
    <br />
    <p className="font">Pick your end time/date::</p>
    <DatePicker
      showTime
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
  </div>
);

export default Scheduler;