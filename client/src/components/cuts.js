import React, { Component } from "react";
import { Row, Col, Card, Divider } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import "./cuts.css";
import { AuthConsumer } from '../authContext';
import mainlong from "./ashleypics/mainlong.jpg";
import mainmen from "./ashleypics/mainmen.jpg";
import mainshort from "./ashleypics/mainshort.jpg";

class Cuts extends Component {

    render() {
        return (
            <AuthConsumer>
        {({user}) => (
            <div id="cutsContent">
                <Row>
                    <Col span={24}>
                        <h1 id="header">Cuts</h1>
                        <Divider />
                    </Col>
                </Row>
                <Row gutter={20} type="flex" justify="space-around">
                    <Col xs={{span: 24}} sm={{span: 6}}>
                        <Link to="/portfoliolong">
                            <Card
                                className="cutsmallscreen"
                                hoverable
                                cover={<img
                                    src={mainlong}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Long</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 6}}>
                        <Link to="/portfolioshort">
                            <Card
                                className="cutsmallscreen"
                                hoverable
                                cover={<img
                                    src={mainshort}
                                    className="pic"
                                    alt=""
                                />}
                                bordered={false}>
                                <h4>Short</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 6}}>
                        <Link to="/portfoliomens">
                            <Card
                                hoverable
                                cover={<img
                                    src={mainmen}
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