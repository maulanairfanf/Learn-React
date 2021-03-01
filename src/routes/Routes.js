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
        <PrivateRoute path="/Home" component={Home} />
        <PrivateRoute path="/Pupuk" component={Pupuk} />
        <PrivateRoute path="/Lahan" component={Lahan} />
        <PrivateRoute path="/Panen" component={Panen} />
        <PrivateRoute
          path="/DetailUserContainer/:id"
          component={DetailUserContainer}
        />
        <PrivateRoute
          path="/DetailPupukContainer/:id"
          component={DetailPupukContainer}
        />
        <PrivateRoute
          path="/DetailLahanContainer/:id"
          component={DetailLahanContainer}
        />
        <PrivateRoute
          path="/DetailPanenContainer/:id"
          component={DetailPanenContainer}
        />
        <PrivateRoute path="/CreateUser" component={CreateUser} />
        <PrivateRoute path="/CreatePupuk" component={CreatePupuk} />
        <PrivateRoute path="/CreateLahan" component={CreateLahan} />
        <PrivateRoute path="/CreatePanen" component={CreatePanen} />
        <PrivateRoute path="/EditUser/:id" component={EditUser} />
        <PrivateRoute path="/EditPupuk/:id" component={EditPupuk} />
        <PrivateRoute path="/EditLahan/:id" component={EditLahan} />
        <PrivateRoute path="/EditPanen/:id" component={EditPanen} />{" "}
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Routes;
