import React, { useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/AuthPages/Login";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

// import ForgotPassword from "./pages/AuthPages/ForgotPassword";
// import Register from "./pages/AuthPages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/PrivatePages/Home/Home";
import Blog from "./pages/PrivatePages/Blog/Blog";
import Contact from "./pages/PrivatePages/Contact/Contact";
import Portofolio from "./pages/PrivatePages/Portofolio/Portofolio";
import UpdateProfile from "./pages/AuthPages/UpdateProfile";
import CreateUser from "./pages/PrivatePages/CreateUser/CreateUser";
import EditUser from "./pages/PrivatePages/EditUser/EditUser";
import SideBar from "./component/Sidebar/Sidebar";
// import { useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <div>
        <Routes />
      </div>
    </>
  );
}

export default App;
