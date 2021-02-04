import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/auth";

const Register = ({ dispatchRegisterAction }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(
      firstName,
      lastName,
      username,
      password,
      () => console.log("Account created succesfully"),
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
              <span className="text-gray-700">FirstName</span>
              <input
                htmlFor="firstName"
                value={firstName}
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                type="firstName"
                name="firstName"
                className="form-input mt-1 py-3 px-5 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="firstname"
              />
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">LastName</span>
              <input
                htmlFor="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="lastName"
                name="lastName"
                className="form-input mt-1 p-3 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="lastname"
                required=""
              />
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">Username</span>
              <input
                htmlFor="userName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="userName"
                name="userName"
                className="form-input mt-1 p-3 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="Username"
                required=""
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
              <button
                onClick={console.log("click button register")}
                to="/Home"
                className="text-center text-white bg-blue-500 hover:bg-blue-400 py-2 w-full rounded-xl mt-4 block"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchRegisterAction: (
    firstName,
    lastName,
    username,
    password,
    onSucces,
    onError
  ) =>
    dispatch(
      registerUser(
        { firstName, lastName, username, password },
        onSucces,
        onError
      )
    ),
});
export default connect(null, mapDispatchToProps)(Register);
