import React from "react";
import {AuthConsumer} from "../../authContext";
import UpcomingAppoint from '../Appointments/upcomingAppoint';
import '../Profile/profile.css';

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

export default Profile;
