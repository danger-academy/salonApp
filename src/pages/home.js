import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";
import '../pages/home.css';
// import PostsList from "../components/PostsList";
// let animateTop = '';


const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div id="container">
          <h2 id="greeting" className="w3-animate-zoom">Hello</h2>
          <p id="welcome" className="w3-animate-zoom">...Welcome Back ...</p>
          <Login />
          {/* <PostsList /> */}
        </div>
      )
    }
  </AuthConsumer>
);

// setTimeout(() => (document.getElementById(welcome).visibility = "visible"), 5000);
// const animate = () => animateTop = 'w3-animate-top';

export default HomePage;
