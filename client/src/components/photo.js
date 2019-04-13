import React from "react";
import { Carousel } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import "./photo.css";

import HairPic from "./hairsquare1.jpg";
import HairPic2 from "./hairsquare2.jpg";
import HairPic3 from "./hairsquare3.jpg";

function Photo() {
  return (
    <Carousel autoplay>
      {/* <div><img className="pictures" src={HairPic} /></div> */}
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={HairPic} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={HairPic2} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={HairPic3} />}>
        </Card>
      </div>
    </Carousel>

      );
    }
    
export default Photo;