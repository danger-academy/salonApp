import React from "react";
import './login.css';
import { Button } from 'antd';
import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <Button id="loginBtn" ghost onClick={logout}>
        Logout
      </Button>
    )}
  </AuthConsumer>
);

export default Logout;
