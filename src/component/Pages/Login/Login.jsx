import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = ({ dispatchLoginAction }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchLoginAction(
      username,
      password,
      () => console.log("Logged in succesfully"),
      (message) => console.log(`Error : ${message}`)
    );
  };
  return (
    <div className="w-full">
      <div className="flex justify-center content-center h-full items-center border-2 ">
        <div className=" shadow-2xl px-20 py-10 rounded-xl ">
          <h1 className="text-xl text-center border-b-2 border-gray-200 px-3 mb-5 pb-3">
            TaniPedia
          </h1>
          <form action="" noValidate onSubmit={handleOnSubmit}>
            <label className="block">
              <span className="text-gray-700">Username</span>
              <input
                htmlFor="username"
                value={username}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                name="username"
                className="form-input mt-1 py-3 px-5 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="Username"
              />
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">Password</span>
              <input
                htmlFor="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="form-input mt-1 p-3 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="Password"
                required=""
              />
            </label>
            <div className=" flex justify-center ">
              <Link
                to="/Home"
                className="text-center text-white bg-blue-500 hover:bg-blue-400 py-2 w-full rounded-xl mt-4 block"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
