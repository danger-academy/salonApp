import React from "react";
import { Redirect } from "react-router-dom";
import './dashboard.css'
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
import Profile from '../components/Profile/Profile'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showLookBook: true
    };
  }


  render() {
    return (
      <AuthConsumer>
      {({ user }) => (
        <Can
          role={user.role}
          perform="dashboard-page:visit"
          yes={() => (
            <div>
              {console.log(user)}
              <Profile />
            </div>
          )}
          no={() => <Redirect to="/" />}
        />
      )}
    </AuthConsumer>
       
    )
}
}

export default DashboardPage;
