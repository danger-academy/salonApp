import React, {Component} from 'react';
import Photo from "../components/photo";
import { Layout, Menu, Icon } from 'antd';
import Login from '../components/Login';
import Logout from '../components/Logout';
import LookBook from "../components/lookbook";
import Scheduler from '../components/Schedule/Schedule';
import Profile from '../components/Profile/Profile';
import { AuthConsumer } from "../authContext";
import {Route, Redirect, Link}  from "react-router-dom";
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

  render() {
    return (
      <AuthConsumer>
        {({ authenticated }) =>
          authenticated ? (
            <Redirect to="/dashboard" />
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
                      <Icon type="camera" />
                      <span> Photo Collection</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/lookbook">
                        <Icon type="book" />
                        <span>Look Book</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/schedule">
                        <Icon type="calendar" />
                        <span>Schedule</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/profile">
                        <Icon type="user" />
                        <span>User</span>
                      </Link>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      title={<span><Icon type="login" /><span> Login</span></span>}
                    >
                      <Menu.Item key="5">
                        <Login />
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Logout />
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout>
                  <p id="welcome" className="w3-animate-zoom">...Ashley Love's Designs...</p>
                  <Content style={{ margin: '0 16px' }}>
                      <div style={{ padding: 24, background: '#fff', minHeight: 300 }}>
                        {/* <Photo /> */}
                          <Route path="/profile" component={Profile} />
                          <Route path="/schedule" component={Scheduler} />
                          <Route path="/lookbook" component={LookBook} />
                          <Route exact path="/" component={Photo} />
                      </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
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




// import React from "react";
// import { Redirect } from "react-router-dom";
// import { AuthConsumer } from "../authContext";
// import '../pages/home.css';
// import Photo from "../components/photo";
// import PageHeader from '../components/Header/Header';



// const HomePage = () => (
//   <AuthConsumer>
//     {({ authenticated }) =>
//       authenticated ? (
//         <Redirect to="/dashboard" />
//       ) : (          
//           <span className="background">
//             <PageHeader />
//             <div id="photocontainer">
//               <Photo />
//             </div>
//           </span>
//         )
//     }
//   </AuthConsumer>
// );

export default HomePage;
