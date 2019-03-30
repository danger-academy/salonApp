import React from "react";
import '../components/login.css';

import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <button id="loginBtn" className="w3-animate-bottom w3-btn w3-round-xxlarge w3-teal" onClick={initiateLogin}>
        Let's begin!
      </button>
    )}
  </AuthConsumer>
);

export default Login;
