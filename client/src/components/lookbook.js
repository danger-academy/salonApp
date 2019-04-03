import React from "react";
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import "./lookbook.css";

import HairPic4 from "./hairsquare4.jpg";
import HairPic5 from "./hairsquare5.jpg";
import HairPic6 from "./hairsquare6.jpg";
import HairPic7 from "./hairsquare7.jpg";

// var mountNode = document.getElementById('photocontainer');

function LookBook() {
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <Card 
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic4} />} 
                        bordered={false}>
                    </Card>
                </Col>
                <Col span={6}>
                <Card 
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic5} />} 
                        bordered={false}>
                    </Card>
                </Col>
                <Col span={6}>
                <Card 
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic6} />} 
                        bordered={false}>
                    </Card>
                </Col>
                <Col span={6}>
                <Card 
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic7} />} 
                        bordered={false}>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default LookBook;