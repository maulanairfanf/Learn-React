import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./component/Pages/Blog/Blog";
import Contact from "./component/Pages/Contact/Contact";
import Home from "./component/Pages/Home/Home";
import Portofolio from "./component/Pages/Portofolio/Portofolio";
import Sidebar from "./component/Sidebar/Sidebar";
import Login from "./component/Pages/auth/Login";
import Register from "./component/Pages/auth/Register";
import privateRoute from "./component/privateRoute";
import ForgotPassword from "./component/Pages/auth/ForgotPassword";

export const Routes = () => {
  return (
    // <Router>
    <Switch>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/ForgotPassword">
        <ForgotPassword />
      </Route>
      <privateRoute path="/Home">
        <Home />
      </privateRoute>
      <privateRoute exact path="/">
        <Sidebar />
      </privateRoute>
      {/* <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Portofolio">
              <Portofolio />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
          </Switch>
        </Router> */}
    </Switch>
    // </Router>
  );
};

export default Routes;
