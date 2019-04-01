import React from "react";
import '../components/login.css';
import { Button } from 'antd';
import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <Button id="loginBtn" ghost onClick={initiateLogin}>
        Login
      </Button>
    )}
  </AuthConsumer>
);

export default Login;
