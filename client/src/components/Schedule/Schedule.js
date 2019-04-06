import React from 'react';
import { DatePicker } from 'antd';


function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const Scheduler = () => (
  <div>
    <DatePicker
      showTime
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
  </div>
);

export default Scheduler;