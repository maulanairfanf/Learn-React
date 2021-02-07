import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, history, useHistory } from "react-router-dom";

export const Logout = ({ isLogged }) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {error && (
        <div
          className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-lg mb-3"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      <a
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 cursor-pointer focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        LogOut
      </a>
    </>
  );
};

export default Logout;
