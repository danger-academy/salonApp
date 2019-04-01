import React from "react";
import { Redirect } from "react-router-dom";
import { AuthConsumer } from "../authContext";
import Login from "../components/Login";
import '../pages/home.css';
import Photo from "../components/photo";
import PageHeader from '../components/Header/Header';
// import PostsList from "../components/PostsList";
// let animateTop = '';


const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (          
          <span className="background">
            <PageHeader />
            <div>
              {/* <PostsList /> */}
            </div>
            <div id="photocontainer">
              <Photo />
              <Login />
            </div>
          </span>
        )
    }
  </AuthConsumer>
);

// setTimeout(() => (document.getElementById(welcome).visibility = "visible"), 5000);
// const animate = () => animateTop = 'w3-animate-top';

export default HomePage;
