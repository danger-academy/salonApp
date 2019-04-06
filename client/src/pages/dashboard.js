import React from "react";
import { Redirect } from "react-router-dom";
import './dashboard.css'
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
import PageHeader from "../components/Header/Header";
import Directory from "../components/Directory/Directory";
import UpcomingAppoint from "../components/Appointments/upcomingAppoint";
import Drop from "../components/Drop";
// import Profile from "../components/Profile";
// import Scheduler from "../components/Schedule/Schedule";

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <PageHeader />
            <UpcomingAppoint />           
            <Directory />
            <Drop />
            {/* <Profile /> */}
            {/* <Scheduler /> */}
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;
