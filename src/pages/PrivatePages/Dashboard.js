import React from "react";
import SideBar from "../../component/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Portofolio from "./Portofolio/Portofolio";
import PrivateRoute from "../../routes/PrivateRoute";
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
