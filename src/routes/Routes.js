import React, { Component } from "react";
import Login from "../pages/AuthPages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/PrivatePages/Home";
import Blog from "../pages/PrivatePages/Blog";
import Contact from "../pages/PrivatePages/Contact";
import CreateUser from "../pages/PrivatePages/CreateUser";
import EditUser from "../pages/PrivatePages/EditUser";
import SideBar from "../component/Sidebar/Sidebar";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import { getToken } from "../Utils/Common";
import { render } from "@testing-library/react";
import DetailUserContainer from "../pages/PrivatePages/DetailUserContainer";

export default class Routes extends Component {
  render() {
    const token = getToken();
    if (!token) {
      console.log(token);
    } else {
    }
    return (
      <BrowserRouter>
        <div className={token ? "visible" : "invisible"}>
          <SideBar />
        </div>
        <PublicRoute exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/Blog" component={Blog} />
          <PrivateRoute path="/Contact" component={Contact} />
          <PrivateRoute
            path="/detail/:id"
            exact
            component={DetailUserContainer}
          />
          {/* <PrivateRoute path="/UpdateProfile" component={UpdateProfile} /> */}
          <PrivateRoute path="/CreateUser" component={CreateUser} />
          <PrivateRoute path="/EditUser/:id" component={EditUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}
