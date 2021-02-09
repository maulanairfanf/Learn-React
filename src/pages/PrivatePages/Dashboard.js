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
          <PrivateRoute exact path="/Home" component={Home} />

          <PrivateRoute path="/Blog" component={Blog} />

          <PrivateRoute path="/Contact" component={Contact} />

          <PrivateRoute path="/Portofolio/:id" component={Portofolio} />

          <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
