import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, history, useHistory } from "react-router-dom";

const Logout = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");

    try {
      await Logout();
      history.pushState("/login");
    } catch {
      setError("failed to log out");
    }
  }
  return (
    <>
      {/* <div className="text-center">
        <h1>Email : {currentUser.email}</h1>
      </div> */}
      <button
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 cursor-pointer focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </>
  );
};

export default Logout;
