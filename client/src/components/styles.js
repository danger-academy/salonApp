import React, { Component } from "react";
import { Row, Col, Card, Divider } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./styles.css";

import mainupdo from "./ashleypics/mainupdo.jpg";
import maindaytoday from "./ashleypics/maindaytoday.jpg";

class Styles extends Component {

    render() {
        return (
            <div id="styleContent">
                <Row>
                    <Col span={24}>
                        <h1 id="header">Styles</h1>
                        <Divider />
                    </Col>
                </Row>
                <Row gutter={20} type="flex" justify="space-around">
                    <Col xs={{span: 24}} sm={{span: 6}}>
                        <Link to="/portfolioupdos">
                            <Card
                                className="stylesmallscreen"
                                hoverable
                                cover={<img
                                    src={mainupdo}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Up-Do</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col  xs={{span: 24}} sm={{span: 6}}>
                        <Link to="/portfoliodaytoday">
                            <Card
                                hoverable
                                cover={<img
                                    src={maindaytoday}
                                    className="pic"
                                    alt=""
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