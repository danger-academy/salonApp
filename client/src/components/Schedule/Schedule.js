import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import ReactDOM from 'react-dom';


const format = 'HH:mm';

function Scheduler () {
ReactDOM.render(
  <TimePicker defaultValue={moment('12:08', format)} format={format} />
);
};

export default Scheduler;