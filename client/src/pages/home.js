import React, { Component } from 'react';
import Photo from "../components/photo";
import { Layout, Menu, Icon, Button } from 'antd';
import Login from '../components/Login';
import Logout from '../components/Logout';
import LookBook from "../components/lookbook";
import Scheduler from '../components/Schedule/Schedule';
import Profile from '../components/Profile/Profile';
import PortfolioLong from '../components/portfoliolong';
import PortfolioShort from '../components/portfolioshort';
import PortfolioMens from '../components/portfoliomens';
import PortfolioBlonde from '../components/portfolioblonde';
import PortfolioDark from '../components/portfoliodark';
import PortfolioRed from '../components/portfoliored';
import PortfolioFashion from '../components/portfoliofashion';
import PortfolioUpDos from '../components/portfolioupdos';
import PortfolioDayToDay from '../components/portfoliodaytoday';
import Cuts from '../components/cuts.js';
import Clients from '../components/Clients/Clients.js';
import Inventory from '../components/Inventory/Inventory.js';
import Colors from '../components/colors.js';
import Styles from '../components/styles.js';
import makeAppoint from '../components/Appointments/makeAppoint';
import { AuthConsumer } from "../authContext";
import { Route, Link } from "react-router-dom";
import './home.css';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      collapsed: true,
    };
  }

  // addActiveClass() {
  //   this.setState({
  //     active: true
  //   })
  // }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    console.log(this.state, "this state")
    // if (this.state.active) {
    //   this.setState({ 'active': false, 'class': 'activeisfalse' })
    // } else {
    //   this.setState({ 'active': true, 'class': 'activeistrue' })
    // }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  // state = {
  //   collapsed: false,
  // };

  onCollapse = (collapsed) => {
    // var containerElement = document.getElementById('background');
    console.log(collapsed);
    this.setState({ collapsed });
    //   if ( collapsed === true){
    //         containerElement.setAttribute('id', 'blur');
    // } else {
    //   containerElement.setAttribute('id', null);
    // }
  }

  onLoggedIn = (user) => (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        id="sider"
        // width="295"
        breakpoint="xl"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        className={this.state.active ? "Open" : "Closed"}
        onClick={this.toggleClass}
      >
        <div className="logo" />
        <Menu id="menu" theme="light" defaultSelectedKeys={['1']} mode="inline" inlineCollapsed={this.state.collapsed}>
          <SubMenu key="sub4" title={<span><Icon type="camera" /><span>Portfolio</span></span>}>
            <Menu.Item key="1">
              <Link to="/cuts">
                <span>Cuts</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/colors">
                <span>Colors</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/styles">
                <span>Styles</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="5">
            <Link to="/lookbook">
              <Icon type="book" />
              <span>Look Book</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/makeAppoint">
              <Icon type="solution" />
              <span>Appointments</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/schedule">
              <Icon type="schedule" />
              <span>My Schedule</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/profile">
              <Icon type="idcard" />
              <span>Profile</span>
            </Link>
          </Menu.Item>
          {(user.role === 'admin') ? (
            <Menu>
              <Menu.Item key="9">
                <Link to="/Clients">
                  <Icon type="team" />
                  <span>Clients</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/Inventory">
                  <Icon type="project" />
                  <span>Inventory</span>
                </Link>
              </Menu.Item>
            </Menu>
          ) : (console.log("No standards"))}
          <SubMenu
            key="sub1"
            title={<span><Icon type="login" /><span> Login</span></span>}
          >
            <Menu.Item key="11">
              <Login />
            </Menu.Item>
            <Menu.Item key="12">
              <Logout />
            </Menu.Item>
          </SubMenu>
        </Menu>
        <Button className="menuButton" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </Sider>
      <Layout id="background">
        <p id="welcome" className="w3-animate-zoom">Love Hair by Ashley</p>
        <Content style={{ margin: '0 16px', minHeight: 300, minWidth: 100 }}>
          <div id="content" style={{ padding: 24, background: 'whitesmoke', minHeight: 300, minWidth: 100 }}>
            <Route exact path="/Clients" component={Clients} />
            <Route exact path="/Inventory" component={Inventory} />
            <Route path="/profile" component={Profile} />
            <Route path="/makeAppoint" component={makeAppoint} />
            <Route path="/schedule" component={Scheduler} />
            <Route path="/lookbook" component={LookBook} />
            <Route path="/portfoliolong" component={PortfolioLong} />
            <Route path="/portfolioshort" component={PortfolioShort} />
            <Route path="/portfoliomens" component={PortfolioMens} />
            <Route path="/portfolioblonde" component={PortfolioBlonde} />
            <Route path="/portfoliodark" component={PortfolioDark} />
            <Route path="/portfoliored" component={PortfolioRed} />
            <Route path="/portfoliofashion" component={PortfolioFashion} />
            <Route path="/portfolioupdos" component={PortfolioUpDos} />
            <Route path="/portfoliodaytoday" component={PortfolioDayToDay} />
            <Route path="/cuts" component={Cuts} />
            <Route path="/colors" component={Colors} />
            <Route path="/styles" component={Styles} />
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
              {console.log("home user id is " + user.id)}
            </div>
          ) : (
              <Layout style={{ minHeight: '100vh' }}>
              
                <Sider
                  id="sider"
                  // width="295"
                  breakpoint="xl"
                  collapsedWidth="0"
                  onBreakpoint={(broken) => { console.log(broken); }}
                  onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                  className={this.state.active ? "Open" : "Closed"}
                  onClick={this.toggleClass}
                >
                  <div className="logo" />
                  <Menu id="menu" theme="light" defaultSelectedKeys={['1']} mode="inline" inlineCollapsed={this.state.collapsed}>
                    <SubMenu key="sub4" title={<span><Icon type="camera" /><span>Portfolio</span></span>}>
                      <Menu.Item key="1">
                        <Link to="/cuts">
                          <span>Cuts</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/colors">
                          <span>Colors</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="3">
                        <Link to="/styles">
                          <span>Styles</span>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
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
                  <Button className="menuButton" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                  </Button>
                </Sider>
                <Layout id="background">
                  <p id="welcome" className="w3-animate-zoom">Love Hair by Ashley</p>
                  <Content style={{ margin: '0 16px', minHeight: 300, minWidth: 100 }}>
                    <div id="content" style={{ padding: 24, background: 'whitesmoke', minHeight: 300, minWidth: 100 }}>
                      <Route exact path="/Clients" component={Clients} />
                      <Route exact path="/Inventory" component={Inventory} />
                      <Route path="/portfoliolong" component={PortfolioLong} />
                      <Route path="/portfolioshort" component={PortfolioShort} />
                      <Route path="/portfoliomens" component={PortfolioMens} />
                      <Route path="/portfolioblonde" component={PortfolioBlonde} />
                      <Route path="/portfoliodark" component={PortfolioDark} />
                      <Route path="/portfoliored" component={PortfolioRed} />
                      <Route path="/portfoliofashion" component={PortfolioFashion} />
                      <Route path="/portfolioupdos" component={PortfolioUpDos} />
                      <Route path="/portfoliodaytoday" component={PortfolioDayToDay} />
                      <Route path="/cuts" component={Cuts} />
                      <Route path="/colors" component={Colors} />
                      <Route path="/styles" component={Styles} />
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
