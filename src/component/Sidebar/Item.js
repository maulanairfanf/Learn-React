import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
const Item = () => {
  return (
    <div>
      <NavLink
        activeClassName="bg-gray-200"
        to="/"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="bg-gray-200"
        to="/Pupuk"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Pupuk
      </NavLink>
      <NavLink
        activeClassName="bg-gray-200"
        to="/Lahan"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Lahan
      </NavLink>
      <NavLink
        activeClassName="bg-gray-200"
        to="/Panen"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Panen
      </NavLink>
    </div>
  );
};

export default Item;
