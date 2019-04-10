import React, { Component } from "react";
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import "./colors.css";

import HairPic4 from "./hairsquare4.jpg";
import HairPic5 from "./hairsquare5.jpg";
import HairPic6 from "./hairsquare6.jpg";
import HairPic7 from "./hairsquare7.jpg";

class Colors extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <h1 id="header">Colors</h1>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic4}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Blonde</h4>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic5}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Dark</h4>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic6}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Red</h4>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic7}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Fashion</h4>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Colors;