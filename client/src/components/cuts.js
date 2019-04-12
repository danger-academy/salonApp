import React, { Component } from "react";
import { Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./cuts.css";
import { AuthConsumer } from '../authContext';
import HairPic4 from "./hairsquare4.jpg";
import HairPic5 from "./hairsquare5.jpg";
import HairPic6 from "./hairsquare6.jpg";

class Cuts extends Component {

    render() {
        return (
            <AuthConsumer>
        {({user}) => (
            <div>
                <Row>
                    <Col span={24}>
                        <h1 id="header">Cuts</h1>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={8}>
                        <Link to="/portfoliolong">
                            <Card
                                hoverable
                                cover={<img
                                    src={HairPic4}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Long</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link to="/portfolioshort">
                            <Card
                                hoverable
                                cover={<img
                                    src={HairPic5}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Short</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link to="/portfoliomens">
                            <Card
                                hoverable
                                cover={<img
                                    src={HairPic6}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Men's</h4>
                            </Card>
                        </Link>
                    </Col>
                </Row>
                {console.log("cuts user id is " + user.id)}
                {console.log("cuts user email is " + user.email)}
            </div>
            )}
            </AuthConsumer>
        );
    }
}

export default Cuts;