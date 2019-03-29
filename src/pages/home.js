import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";
import '../pages/home.css';
// import PostsList from "../components/PostsList";
let animateTop = '';

setTimeout(() =>  console.log(animateTop = 'w3-animate-top'), 5000);
// const animate = () => animateTop = 'w3-animate-top';


const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div id="container">
          <h2 id="greeting" className="w3-animate-zoom">Hello</h2>
          
          <p className={animateTop} >Enter here</p>
          <Login />
          {/* <PostsList /> */}
        </div>
      )
    }
  </AuthConsumer>
);

export default HomePage;
