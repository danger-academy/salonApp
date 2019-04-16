import React, { Component } from "react";
import { Row, Col, Card, Divider } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./colors.css";

import mainblonde from "./ashleypics/mainblonde.jpg";
import maindark from "./ashleypics/maindark.jpg";
import mainred from "./ashleypics/mainred.jpg";
import mainfashion from "./ashleypics/mainfashion.jpg";

class Colors extends Component {

    render() {
        return (
            <div id="colorsContent">
                <Row>
                    <Col span={24}>
                        <h1 id="header">Colors</h1>
                        <Divider />
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col sm={{span: 24}} md={{span: 12}} xl={{span: 6}}>
                        <Link to="/portfolioblonde">
                            <Card
                                className="colorsmallscreen top"
                                hoverable
                                cover={<img
                                    src={mainblonde}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Blonde</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={{span: 24}} md={{span: 12}} xl={{span: 6}}>
                        <Link to="/portfoliodark">
                            <Card
                                className="colorsmallscreen top"
                                hoverable
                                cover={<img
                                    src={maindark}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Dark</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={{span: 24}} md={{span: 12}} xl={{span: 6}}>
                        <Link to="/portfoliored">
                            <Card
                                className="colorsmallscreen"
                                hoverable
                                cover={<img
                                    src={mainred}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Red</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={{span: 24}} md={{span: 12}} xl={{span: 6}}>
                        <Link to="/portfoliofashion">
                            <Card
                                hoverable
                                cover={<img
                                    src={mainfashion}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Fashion</h4>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Colors;