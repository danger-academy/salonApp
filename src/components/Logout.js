import React from "react";
import './login.css';

import { AuthConsumer } from "../authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <button id="loginBtn" className="w3-animate-bottom w3-btn w3-round-xxlarge w3-teal" onClick={logout}>
        Logout
      </button>
    )}
  </AuthConsumer>
);

export default Logout;
