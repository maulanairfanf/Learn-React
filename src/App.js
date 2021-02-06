import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Register from "./component/Pages/auth/Register";
import Routes from "./Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <div className="md:flex flex-col md:flex-row md:min-h-screen w-full ">
            {/* <Routes /> */}
            {/* <Register /> */}
            <Routes />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
