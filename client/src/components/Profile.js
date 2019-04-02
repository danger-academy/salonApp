import React from "react";
import PageHeader from "./Header/Header";
import {AuthConsumer} from "../authContext";

const Profile = () => (
  <PageHeader />
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;
