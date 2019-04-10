import React, { Component } from "react";
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import "./cuts.css";

import HairPic4 from "./hairsquare4.jpg";
import HairPic5 from "./hairsquare5.jpg";
import HairPic6 from "./hairsquare6.jpg";

class Cuts extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <h1 id="header">Cuts</h1>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic4}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Long</h4>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic5}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Short</h4>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img
                                src={HairPic6}
                                className="pic"
                            />}
                            bordered={false}>
                            <h4>Men's</h4>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cuts;