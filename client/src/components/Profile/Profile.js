import React from "react";
import {AuthConsumer} from "../../authContext";
//import GetEmail from "../GetEmail";
import UpcomingAppoint from '../Appointments/upcomingAppoint';
import '../Profile/profile.css';
import UserTest from '../UserTest';
import UserId from '../UserId';

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
        {console.log("profile inside div - UserTest is " + UserTest)}
        {console.log("profile inside div - UserId is " + UserId)}
      </div>
    )}
    
  </AuthConsumer>
);
console.log("profile js - UserTest is " + UserTest);
console.log("profile js - UserId is " + UserId);
export default Profile;