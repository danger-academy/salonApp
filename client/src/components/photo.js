import React from "react";
import { Carousel } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import "./photo.css";

import carousel1 from "./ashleypics/carousel/carousel1.jpg";
import carousel2 from "./ashleypics/carousel/carousel2.jpg";
import carousel3 from "./ashleypics/carousel/carousel3.jpg";
import carousel4 from "./ashleypics/carousel/carousel4.jpg";
import carousel5 from "./ashleypics/carousel/carousel5.jpg";
import carousel6 from "./ashleypics/carousel/carousel6.jpg";

function Photo() {
  return (
    <div id="photoContent">
    <Carousel autoplay>
      <div> 
        <Card className="picture2"
        cover={<img alt="example" src={carousel1} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={carousel2} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={carousel3} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={carousel4} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={carousel5} />}>
        </Card>
      </div>
      <div>
        <Card className="picture2"
        cover={<img alt="example" src={carousel6} />}>
        </Card>
      </div>
    </Carousel>
    </div>

      );
    }
    
export default Photo;