import React from "react";
// import { AuthProvider } from "./contexts/AuthContext";
import Login from "../pages/AuthPages/Login";
// import { getToken, removeUserSession, setUserSession } from "../Utils/Common";
// import ForgotPassword from "./pages/AuthPages/ForgotPassword";
// import Register from "./pages/AuthPages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/PrivatePages/Home/Home";
import Blog from "../pages/PrivatePages/Blog/Blog";
import Contact from "../pages/PrivatePages/Contact/Contact";
import Portofolio from "../pages/PrivatePages/Portofolio/Portofolio";
import UpdateProfile from "../pages/AuthPages/UpdateProfile";
import CreateUser from "../pages/PrivatePages/CreateUser/CreateUser";
import EditUser from "../pages/PrivatePages/EditUser/EditUser";
import SideBar from "../component/Sidebar/Sidebar";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";

const Routes = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Route component={SideBar} />
        <Switch>
          <PrivateRoute path="/Home" component={Home} />

          <PrivateRoute path="/Blog" component={Blog} />

          <PrivateRoute path="/Contact" component={Contact} />

          <PrivateRoute path="/Portofolio/:id" component={Portofolio} />

          <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
          <PrivateRoute path="/CreateUser" component={CreateUser} />
          <PrivateRoute path="/EditUser/:id" component={EditUser} />
          <PublicRoute path="/Login" component={Login} />
          {/* <Route path="/Register" component={Register} />
              <Route path="/ForgotPassword" component={ForgotPassword} /> */}
        </Switch>
      {/* </AuthProvider> */}
    </Router>
  );
};

export default Routes;
