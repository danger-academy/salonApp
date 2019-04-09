import React, { Component } from "react";
import { Row, Col, Card, Button, Modal } from 'antd';
import ZoomImg from './ZoomImg';
import LBButton from './lookbookbutton.js';
import 'antd/dist/antd.css';
import "./lookbook.css";

import HairPic4 from "./hairsquare4.jpg";
import HairPic5 from "./hairsquare5.jpg";
import HairPic6 from "./hairsquare6.jpg";
import HairPic7 from "./hairsquare7.jpg";

class LookBook extends Component {

    render() {
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
                            cover={<ZoomImg
                                src={HairPic4}
                                className="pic"
                            />}
                            bordered={false}>
                            <LBButton></LBButton>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<ZoomImg
                                src={HairPic5}
                                className="pic"
                            />}
                            bordered={false}>
                            <LBButton></LBButton>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<ZoomImg
                                src={HairPic6}
                                className="pic"
                            />}
                            bordered={false}>
                            <LBButton></LBButton>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<ZoomImg
                                src={HairPic7}
                                className="pic"
                            />}
                            bordered={false}>
                            <LBButton></LBButton>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LookBook;