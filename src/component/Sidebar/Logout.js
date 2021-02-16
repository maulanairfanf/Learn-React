import React, { useState } from "react";
import { Link, history, useHistory } from "react-router-dom";
import { removeUserSession } from "../../Utils/Common";

export const Logout = () => {
  const [error, setError] = useState("");

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      window.location.reload();
      removeUserSession();
      history.push("/login");
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
