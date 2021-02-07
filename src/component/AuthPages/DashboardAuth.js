import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";

const DashboardAuth = () => {
  return (
    <Router>
      <Switch>
        <Route exeact to="/">
          <Login />
        </Route>
        <Route to="/Register">
          <Register />
        </Route>
        <Route to="/ForgotPassword">
          <ForgotPassword />
        </Route>
      </Switch>
    </Router>
  );
};

export default DashboardAuth;
