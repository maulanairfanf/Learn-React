import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/PrivatePages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/AuthPages/Login";
import ForgotPassword from "../pages/AuthPages/ForgotPassword";

import Register from "../pages/AuthPages/Register";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />{" "}
          <Route  path="/Register" component={Register} />{" "}
          <Route  path="/ForgotPassword" component={ForgotPassword} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
