import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CallbackPage from "./pages/callback";
import Upload from "./pages/Upload";
import Auth from "./components/Auth";
import "./index.css";
import { AuthConsumer } from "./authContext";

function App() {
  return (
    <div className="App container" id="appContainer">
      <Auth>
        <AuthConsumer>
        {({user}) => (
          <div className="routeHolder">
            <Router>
              <Switch> 
                {/* Switch means to only render the first matching route, top to bottom */}
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/callback" component={CallbackPage}/>
                <Route path="/upload" component={Upload} />
                <Route path="/" component={HomePage}/>
              </Switch>
            </Router>
          {console.log("index user id is " + user.id)}
          {console.log(user)}
          </div>
          )}
        </AuthConsumer>
      </Auth>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
