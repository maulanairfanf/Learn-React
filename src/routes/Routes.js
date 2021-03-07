import React, { Component } from "react";
import Login from "../pages/AuthPages/Login";
import { Switch, Route } from "react-router-dom";

//component
import SideBar from "../component/Sidebar//Sidebar";
import Topbar from "../component/Sidebar/Topbar";
import { Container } from "reactstrap";
import classNames from "classnames";

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
import DetailLahanContainer from "../pages/PrivatePages/Lahan/DetailLahanContainer";
import CreateLahan from "../pages/PrivatePages/Lahan/CreateLahan";
import EditLahan from "../pages/PrivatePages/Lahan/EditLahan";
//Panen
import Panen from "../pages/PrivatePages/Panen/Panen";
import DetailPanenContainer from "../pages/PrivatePages/Panen/DetailPanenContainer";
import CreatePanen from "../pages/PrivatePages/Panen/CreatePanen";
import EditPanen from "../pages/PrivatePages/Panen/EditPanen";
import Dashboard from "../pages/PrivatePages/Dashboard/Dashboard";
//not found
import NotFound from "../pages/NotFound";

const Routes = ({ sidebarIsOpen, toggleSidebar }) => {
  const token = getToken();

  return (
    <Container
      fluid
      className={classNames("content overflow-auto", {
        "is-open": sidebarIsOpen,
      })}
    >
      <div className={token ? "sticky-top" : "d-none"}>
        <Topbar toggleSidebar={toggleSidebar} />
      </div>

      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/pupuk" component={Pupuk} />
        <PrivateRoute path="/lahan" component={Lahan} />
        <PrivateRoute path="/panen" component={Panen} />
        <PrivateRoute
          path="/detail-user/:id"
          component={DetailUserContainer}
        />
        <PrivateRoute
          path="/detail-pupuk/:id"
          component={DetailPupukContainer}
        />
        <PrivateRoute
          path="/detail-lahan/:id"
          component={DetailLahanContainer}
        />
        <PrivateRoute
          path="/detailpanen/:id"
          component={DetailPanenContainer}
        />
        <PrivateRoute path="/create-user" component={CreateUser} />
        <PrivateRoute path="/create-pupuk" component={CreatePupuk} />
        <PrivateRoute path="/create-lahan" component={CreateLahan} />
        <PrivateRoute path="/create-panen" component={CreatePanen} />
        <PrivateRoute path="/edit-user/:id" component={EditUser} />
        <PrivateRoute path="/edit-pupuk/:id" component={EditPupuk} />
        <PrivateRoute path="/edit-lahan/:id" component={EditLahan} />
        <PrivateRoute path="/edit-panen/:id" component={EditPanen} />{" "}
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Routes;
