import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardAuth from "./component/AuthPages/DashboardAuth";
import Dashboard from "./component/Pages/Dashboard";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <DashboardAuth />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
