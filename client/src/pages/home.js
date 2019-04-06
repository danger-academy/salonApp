import React, {Component} from 'react';
import Photo from "../components/photo";
import { Layout, Menu, Icon } from 'antd';
import Login from '../components/Login';
import Logout from '../components/Logout';
import LookBook from "../components/lookbook";
import Scheduler from '../components/Schedule/Schedule';
import Profile from '../components/Profile/Profile';
import Portfolio from '../components/portfolio';
import { AuthConsumer } from "../authContext";
import {Route, Link}  from "react-router-dom";
import './home.css';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class HomePage extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  onLoggedIn = (user) => (
    <Layout style={{ minHeight: '100vh' }}>
                <Sider
                  id="sider"
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                >
                  <div className="logo" />
                  <Menu id="menu" theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                      <Link to="/portfolio">
                        <Icon type="camera" />
                      <span>Portfolio</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/lookbook">
                        <Icon type="book" />
                        <span>Look Book</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/schedule">
                        <Icon type="schedule" />
                        <span>Schedule</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/profile">
                        <Icon type="idcard" />
                        <span>Profile</span>
                      </Link>
                    </Menu.Item>
                    {(user.role === 'admin') ? (
                      <Menu>
                        <Menu.Item key="5">
                          <Link to="/">
                            <Icon type="team" />
                            <span>Users</span>
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                          <Link to="/">
                            <Icon type="project" />
                            <span>Inventory</span>
                          </Link>
                        </Menu.Item>
                      </Menu>
                    ) : (console.log("No standards")) }
                    <SubMenu
                      key="sub1"
                      title={<span><Icon type="login" /><span> Login</span></span>}
                    >
                      <Menu.Item key="7">
                        <Login />
                      </Menu.Item>
                      <Menu.Item key="8">
                        <Logout />
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout id="background">
                  <p id="welcome" className="w3-animate-zoom">...Ashley Love's Designs...</p>
                  <Content style={{ margin: '0 16px' }}>
                      <div id="content" style={{ padding: 24, background: 'whitesmoke', minHeight: 300 }}>
                        {/* <Photo /> */}
                          <Route path="/profile" component={Profile} />
                          <Route path="/schedule" component={Scheduler} />
                          <Route path="/lookbook" component={LookBook} />
                          <Route path="/portfolio" component={Portfolio} />
                          <Route exact path="/" component={Photo} />
                      </div>
                  </Content>
                  <Footer id="footer">
                    SalonApp ©2019 Created by LMRT
                  </Footer>
                </Layout>
              </Layout>
  )

  render() {
    return (
      <AuthConsumer>
        {({ authenticated, user }) =>
          authenticated ? (
            <div>
              {this.onLoggedIn(user)}
            </div>
          ) : (
              <Layout style={{ minHeight: '100vh' }}>
                <Sider
                  id="sider"
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                >
                  <div className="logo" />
                  <Menu id="menu" theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                      <Link to="/portfolio">
                        <Icon type="camera" />
                      <span>Portfolio</span>
                      </Link>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      title={<span><Icon type="login" /><span> Login</span></span>}
                    >
                      <Menu.Item key="7">
                        <Login />
                      </Menu.Item>
                      <Menu.Item key="8">
                        <Logout />
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout id="background">
                  <p id="welcome" className="w3-animate-zoom">...Ashley Love's Designs...</p>
                  <Content style={{ margin: '0 16px' }}>
                      <div id="content" style={{ padding: 24, background: 'whitesmoke', minHeight: 300 }}>
                          {/* <Route path="/profile" component={Profile} />
                          <Route path="/schedule" component={Scheduler} />
                          <Route path="/lookbook" component={LookBook} /> */}
                          <Route path="/portfolio" component={Portfolio} />
                          <Route exact path="/" component={Photo} />
                      </div>
                  </Content>
                  <Footer id="footer">
                    SalonApp ©2019 Created by LMRT
                  </Footer>
                </Layout>
              </Layout>
            )
        }
       
      </AuthConsumer>
    )
  }
}

export default HomePage;
