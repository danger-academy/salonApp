import React from "react";
import {AuthConsumer} from "../../authContext";
//import GetEmail from "../GetEmail";
import UpcomingAppoint from '../Appointments/upcomingAppoint';
import '../Profile/profile.css';
import UserTest from '../UserTest';
import UserId from '../UserId';
import { Divider } from 'antd';
// import Autoset from './Avatar';

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <div id='autoset'>
        {/* <Autoset /> */}
        <p>Account Info</p>
        <Divider />
        <ul>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
        </div>
        <br />
        <UpcomingAppoint />
        {console.log("profile inside div - UserTest is " + UserTest)}
        {console.log("profile inside div - UserId is " + UserId)}
      </div>
    )}
    
  </AuthConsumer>
);
console.log("profile js - UserTest is " + UserTest);
console.log("profile js - UserId is " + UserId);
export default Profile;