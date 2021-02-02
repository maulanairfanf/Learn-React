import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Blog from "./component/Layout/Blog/Blog";
import Contact from "./component/Layout/Contact/Contact";
import Home from "./component/Layout/Home/Home";
import Portofolio from "./component/Layout/Portofolio/Portofolio";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
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
    </BrowserRouter>
  );
};

export default Routes;
