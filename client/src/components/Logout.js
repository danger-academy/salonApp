import React from "react";
import './login.css';
import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <a id="loginBtn" ghost onClick={logout}>
        Logout
      </a>
    )}
  </AuthConsumer>
);

export default Logout;
