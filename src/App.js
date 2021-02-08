import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./component/PrivateRoute";
import Login from "./component/AuthPages/Login";
import ForgotPassword from "./component/AuthPages/ForgotPassword";
import Register from "./component/AuthPages/Register";
import Dashboard from "./component/Pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import Blog from "./component/Pages/Blog/Blog";
import Contact from "./component/Pages/Contact/Contact";
import Portofolio from "./component/Pages/Portofolio/Portofolio";
import SideBar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full ">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                {/* <PrivateRoute path="/Blog" component={Blog} />
                <PrivateRoute path="/Contact" component={Contact} />
                <PrivateRoute path="/Portofolio" component={Portofolio} /> */}
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
