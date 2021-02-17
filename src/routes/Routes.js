import React, { Component } from "react";
import Login from "../pages/AuthPages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//component
import SideBar from "../component/Sidebar//Sidebar";
//utls
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";
import { getToken } from "../Utils/Common";
//Home
import Home from "../pages/PrivatePages/Home/Home";
import CreateUser from "../pages/PrivatePages/Home/CreateUser";
import EditUser from "../pages/PrivatePages/Home/EditUser";
import DetailUserContainer from "../pages/PrivatePages/Home/DetailUserContainer";
//Pupuk
import Pupuk from "../pages/PrivatePages/Pupuk/Pupuk";
import DetailPupukContainer from "../pages/PrivatePages/Pupuk/DetailPupukContainer";
import CreatePupuk from "../pages/PrivatePages/Pupuk/CreatePupuk";
import EditPupuk from "../pages/PrivatePages/Pupuk/EditPupuk";
//Lahan
import Lahan from "../pages/PrivatePages/Lahan/Lahan";
import DetaillahanContainer from "../pages/PrivatePages/Lahan/DetailLahanContainer";
import CreateLahan from "../pages/PrivatePages/Pupuk/CreateLahan";
import EditLahan from "../pages/PrivatePages/Pupuk/EditLahan";

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
          <PrivateRoute path="/Pupuk" component={Pupuk} />
          <PrivateRoute path="/Lahan" component={Lahan} />

          <PrivateRoute
            path="/DetailUserContainer/:id"
            exact
            component={DetailUserContainer}
          />
          <PrivateRoute
            path="/DetailPupukContainer/:id"
            exact
            component={DetailPupukContainer}
          />
          <PrivateRoute
            path="/DetailPupukContainer/:id"
            exact
            component={DetaillahanContainer}
          />
          <PrivateRoute path="/CreateUser" component={CreateUser} />
          <PrivateRoute path="/CreatePupuk" component={CreatePupuk} />
          <PrivateRoute path="/CreateLahan" component={CreateLahan} />
          <PrivateRoute path="/EditUser/:id" component={EditUser} />
          <PrivateRoute path="/EditPupuk/:id" component={EditPupuk} />
          <PrivateRoute path="/EditLahan/:id" component={EditLahan} />
        </Switch>
      </BrowserRouter>
    );
  }
}
