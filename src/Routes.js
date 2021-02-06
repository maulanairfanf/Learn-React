import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./component/Pages/Blog/Blog";
import Contact from "./component/Pages/Contact/Contact";
import Home from "./component/Pages/Home/Home";
import Portofolio from "./component/Pages/Portofolio/Portofolio";
import Sidebar from "./component/Sidebar/Sidebar";
import Login from "./component/Pages/Login/Login";
import Register from "./component/Pages/Register/Register";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Router>
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
        </Router>
      </Switch>
    </Router>
  );
};

export default Routes;
