import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

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
        to="/Blog"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Blog
      </NavLink>
      <NavLink
        activeClassName="bg-gray-200"
        to="/Portofolio"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Portofolio
      </NavLink>
      <NavLink
        activeClassName="bg-gray-200"
        to="/Contact"
        className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Item;
