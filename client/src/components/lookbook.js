import React from "react";
import { Row, Col, Card, Button } from 'antd';
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
            <Row>
                <Col span={24}>
                    <h1 id="header">Look Book</h1>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic4} />}
                        bordered={false}>
                        <div id="buttonbackground">
                            <Button className="buttons commentButton" justify="center" type="default">Add Comment</Button>
                            <Button className="buttons" justify="center" type="danger">Delete</Button>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic5} />}
                        bordered={false}>
                        <div id="buttonbackground">
                            <Button className="buttons commentButton" justify="center" type="default">Add Comment</Button>
                            <Button className="buttons" justify="center" type="danger">Delete</Button>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic6} />}
                        bordered={false}>
                        <div id="buttonbackground">
                            <Button className="buttons commentButton" justify="center" type="default">Add Comment</Button>
                            <Button className="buttons" justify="center" type="danger">Delete</Button>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" className="pic" src={HairPic7} />}
                        bordered={false}>
                        <div id="buttonbackground">
                            <Button className="buttons commentButton" justify="center" type="default">Add Comment</Button>
                            <Button className="buttons" justify="center" type="danger">Delete</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default LookBook;