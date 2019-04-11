import React from "react";
import {AuthConsumer} from "../../authContext";
import GetEmail from "../GetEmail";
import UpcomingAppoint from '../Appointments/upcomingAppoint';
import '../Profile/profile.css';

//const userEmail = require("../UserEmail.js");
const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div className=''>
        <h2>Profile</h2>
        <ul>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
        <br />
        <UpcomingAppoint />
      </div>
    )}
  </AuthConsumer>
);
console.log("dammit" + GetEmail);
export default Profile;
