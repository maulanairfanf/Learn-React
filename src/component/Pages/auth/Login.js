import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  // const usernameRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [succes, setSucces] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setSucces();
      history.push("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }

    setLoading(false);
  }
  return (
    <div className="w-full">
      <div className="flex justify-center content-center h-full items-center border-2 ">
        <div className=" shadow-2xl px-20 py-10 rounded-xl ">
          <h1 className="text-xl text-center border-b-2 border-gray-200 px-3 mb-5 pb-3">
            TaniPedia
          </h1>
          {/* {currentUser && currentUser.email} */}
          {succes && (
            <div
              className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-lg mb-3"
              role="alert"
            >
              <p>{succes}</p>
            </div>
          )}
          {error && (
            <div
              className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-lg mb-3"
              role="alert"
            >
              <p>{error}</p>
            </div>
          )}
          <form action="" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                id="email"
                type="email"
                className="form-input mt-1 py-3 px-5 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="Email"
                ref={emailRef}
                required
              />
            </label>
            {/* <label className="block mt-3">
              <span className="text-gray-700">Username</span>
              <input
                type="text"
                className="form-input mt-1 p-3 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="Username"
                ref={usernameRef}
                required
              />
            </label> */}
            <label className="block mt-3">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                className="form-input mt-1 p-3 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="Password"
                ref={passwordRef}
                required=""
              />
            </label>

            <div className=" flex justify-center ">
              <button
                disabled={loading}
                className="text-center text-white bg-blue-500 hover:bg-blue-400 py-2 w-full rounded-xl mt-4 block"
              >
                Submit
              </button>
            </div>
          </form>{" "}
          <div className=" flex justify-center ">
            <Link
              to="/ForgotPassword"
              className="text-center text-white bg-blue-500 hover:bg-blue-400 py-2 w-full rounded-xl mt-4 block"
            >
              Forgot Password
            </Link>
          </div>
          <h1 className="mt-4">
            Belum mempunyai akun ?
            <Link
              to="/Register "
              className=" text-blue-500 ml-3  hover:text-blue-400 "
            >
              Register
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Login;
