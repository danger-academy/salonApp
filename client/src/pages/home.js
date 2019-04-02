import React from "react";
import { Redirect } from "react-router-dom";
import { AuthConsumer } from "../authContext";
import '../pages/home.css';
import Photo from "../components/photo";
import PageHeader from '../components/Header/Header';



const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (          
          <span className="background">
            <PageHeader />
            <div id="photocontainer">
              <Photo />
            </div>
          </span>
        )
    }
  </AuthConsumer>
);

export default HomePage;
