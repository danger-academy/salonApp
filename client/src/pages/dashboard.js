import React from "react";
import { Redirect } from "react-router-dom";
import './dashboard.css'
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import LookBook from "../components/lookbook";
import Portfolio from "../components/portfolio";
import PageHeader from "../components/Header/Header";
// import Directory from "../components/Directory/Directory";
// import UpcomingAppoint from "../components/Appointments/upcomingAppoint";
// import Drop from "../components/Drop";
// import Profile from "../components/Profile";
import Scheduler from "../components/Schedule/Schedule";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showLookBook: true
    };
  }

  // showBook() {
  //   console.log("showBook works")
  //   this.setState({
  //       showComponent: true,
  //     });
  // }

  render() {
    return (
      <AuthConsumer>
      {({ user }) => (
        <Can
          role={user.role}
          perform="dashboard-page:visit"
          yes={() => (
            <div>
              <PageHeader />
              {/* <Drop /> */}
              {/* <UpcomingAppoint />            */}
              {/* { this.state.showLookBook ? <LookBook /> : <Directory />} */}
              {/* <Directory /> */}
              {/* <Drop /> */}
              {/* <Profile /> */}
              {/* // if state.showlook is true then  */}
              {/* <LookBook /> */}
              <Scheduler />
              <Portfolio />
  
            </div>
          )}
          no={() => <Redirect to="/" />}
        />
      )}
    </AuthConsumer>
       
    )
}
}

// const DashboardPage = () => (
//   <AuthConsumer>
//     {({ user }) => (
//       <Can
//         role={user.role}
//         perform="dashboard-page:visit"
//         yes={() => (
//           <div>
//             <PageHeader />
//             {/* <Drop /> */}
//             {/* <UpcomingAppoint />            */}
//             <Directory />
//             {/* <Drop /> */}
//             {/* <Profile /> */}
//             <LookBook />
//             <Scheduler />

//           </div>
//         )}
//         no={() => <Redirect to="/" />}
//       />
//     )}
//   </AuthConsumer>
// );

export default DashboardPage;
