import React from "react";
import '../components/login.css';
import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <a id="loginBtn" onClick={initiateLogin}>
        Login
      </a>
    )}
  </AuthConsumer>
);

export default Login;
