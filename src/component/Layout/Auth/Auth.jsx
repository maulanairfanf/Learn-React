import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Auth = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <Login />
      </div>
      <div className="col-span-6">
        <Register />
      </div>
    </div>
  );
};

export default Auth;
