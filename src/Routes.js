import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./component/Layout/Blog/Blog";
import Contact from "./component/Layout/Contact/Contact";
import Home from "./component/Layout/Home/Home";
import Portofolio from "./component/Layout/Portofolio/Portofolio";
import Sidebar from "./component/Sidebar/Sidebar";
import Login from "./component/Layout/Login/Login";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/Home">
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
        </Router>
      </Switch>
    </Router>
  );
};

export default Routes;
