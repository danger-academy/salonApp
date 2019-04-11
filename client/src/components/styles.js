import React, { Component } from "react";
import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./styles.css";

import HairPic4 from "./hairsquare4.jpg";
import HairPic5 from "./hairsquare5.jpg";

class Styles extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <h1 id="header">Colors</h1>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Link to="/portfolioupdos">
                            <Card
                                hoverable
                                cover={<img
                                    src={HairPic4}
                                    className="pic"
                                />}
                                bordered={false}>
                                <h4>Up-Do</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col span={12}>
                        <Link to="/portfoliodaytoday">
                            <Card
                                hoverable
                                cover={<img
                                    src={HairPic5}
                                    className="pic"
                                />}
                                bordered={false}>
                                <h4>Day to Day</h4>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Styles;