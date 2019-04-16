import React from "react";
import './login.css';
import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <a id="loginBtn" href="/" ghost onClick={logout}>
        Logout
      </a>
    )}
  </AuthConsumer>
);

export default Logout;
