import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>this is from login</h1>
      <Link to="/Home">login</Link>
    </div>
  );
};

export default Login;
