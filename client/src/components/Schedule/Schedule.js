import React from 'react';
import { DatePicker, Divider, TimePicker } from 'antd';
import moment from 'moment';
import '../Schedule/Schedule.css';

const dateFormatList = ['MM/DD/YYYY','MM/DD/YY']

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
    <div id="scheduleInput">
    <p className="font">Chose The Date:</p>
    <DatePicker 
    defaultValue={moment('01/01/2019', dateFormatList[0])} 
    format={dateFormatList}
    onChange={onChange}
    onOk={onOk}
    />
    <br />
    <br />
    <br />
    <p className="font">Chose the Start/End Time:</p>
    <br />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
    <br />
    <br />
    </div>
  </div>
);

export default Scheduler;