import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
// import ReactDOM from 'react-dom';
import "./photo.css";

import HairPic from "./hairsquare1.jpg";

// var mountNode = document.getElementById('photocontainer');

function Photo() {
  return (
    <Carousel autoplay>
        {/* <div><img className="pictures" src={HairPic}/></div> */}
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </Carousel>

  );
}

export default Photo;