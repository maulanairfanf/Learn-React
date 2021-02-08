import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="w-full">
      <div className="flex justify-center content-center h-full items-center border-2 ">
        <div className=" shadow-2xl px-20 py-10 rounded-xl ">
          <h1 className="text-xl text-center border-b-2 border-gray-200 px-3 mb-5 pb-3">
            TaniPedia
          </h1>
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
                disabled
                value={currentUser.email}
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
                Change
              </button>
            </div>
          </form>{" "}
          <div className=" flex justify-center ">
            <Link
              to="/Register"
              className=" text-red-500 ml-3  hover:text-red-400 mt-3"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;
