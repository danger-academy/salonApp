import React from "react";
import {AuthConsumer} from "../../authContext";
import GetEmail from "../GetEmail";
import UpcomingAppoint from '../Appointments/upcomingAppoint';

//const userEmail = require("../UserEmail.js");
const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
        <UpcomingAppoint />
      </div>
    )}
  </AuthConsumer>
);
console.log("dammit" + GetEmail);
export default Profile;
