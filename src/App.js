import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/AuthPages/Login";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import Register from "./pages/AuthPages/Register";
import Dashboard from "./pages/PrivatePages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full ">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />

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
