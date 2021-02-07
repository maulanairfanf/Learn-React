import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/Pages/Dashboard";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/AuthPages/Login";
import ForgotPassword from "./component/AuthPages/ForgotPassword";

import Register from "./component/AuthPages/Register";
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
