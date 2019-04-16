import React from "react";
import {AuthConsumer} from "../../authContext";
//import GetEmail from "../GetEmail";
import UpcomingAppoint from '../Appointments/upcomingAppoint';
import '../Profile/profile.css';
import UserTest from '../UserTest';
import UserId from '../UserId';
import { Divider } from 'antd';
import Avatar from './Avatar';

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <div id='autoset'>
        <p id='accountInfo'>Account Info</p>
        <Divider />
        <Avatar id="avatar"/>
        <br />
        <ul>
          <li>Hello, {user.role}!</li>
          <li>{user.email}</li>
        </ul>
        <br />
        <br />
        <br />
        <Divider />
        <UpcomingAppoint />
        </div>
        {console.log("profile inside div - UserTest is " + UserTest)}
        {console.log("profile inside div - UserId is " + UserId)}
      </div>
    )}
    
  </AuthConsumer>
);
console.log("profile js - UserTest is " + UserTest);
console.log("profile js - UserId is " + UserId);
export default Profile;