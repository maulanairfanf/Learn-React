import React from "react";
import SideBar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Portofolio from "../Pages/Portofolio/Portofolio";
import PrivateRoute from "../PrivateRoute";
import UpdateProfile from "../AuthPages/UpdateProfile";

const Dashboard = () => {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          <PrivateRoute exact path="/Home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/Blog">
            <Blog />
          </PrivateRoute>
          <PrivateRoute path="/Contact">
            <Contact />
          </PrivateRoute>
          <PrivateRoute path="/Portofolio">
            <Portofolio />
          </PrivateRoute>
          <PrivateRoute path="/UpdateProfile">
            <UpdateProfile />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
