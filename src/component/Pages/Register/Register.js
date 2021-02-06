import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const Register = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await register(
        emailRef.current.value,

        passwordRef.current.value
      );
    } catch {
      setError("failed to create an account");
    }
    setLoading(false);

    // register(
    //   emailRef.current.value,
    //   usernameRef.current.value,
    //   passwordRef.current.value,
    //   passwordConfirmRef.current.value
    // );
  }
  return (
    <div className="w-full">
      <div className="flex justify-center content-center h-full items-center border-2 ">
        <div className=" shadow-2xl px-20 py-10 rounded-xl ">
          <h1 className="text-xl text-center border-b-2 border-gray-200 px-3 mb-5 pb-3">
            TaniPedia
          </h1>
          {currentUser && currentUser.email}
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
                placeholder="email"
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
            <label className="block mt-3">
              <span className="text-gray-700">Password Confirmation</span>
              <input
                type="password"
                className="form-input mt-1 p-3 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
                placeholder="PasswordConfirmation"
                ref={passwordConfirmRef}
                required=""
              />
            </label>
            <div className=" flex justify-center ">
              <button
                disabled={loading}
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
export default Register;
