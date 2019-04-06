import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CallbackPage from "./pages/callback";
import Auth from "./components/Auth";
import "./index.css";

function App() {
  return (
    <div className="App container" id="appContainer">
      <Auth>
        <div className="routeHolder">
          <Router>
            <Switch> 
              {/* Switch means to only render the first matching route, top to bottom */}
              <Route path="/dashboard" component={DashboardPage}/> )}/>
              <Route path="/callback" component={CallbackPage}/>
              <Route path="/" component={HomePage}/>
            </Switch>
          </Router>
        </div>
      </Auth>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
