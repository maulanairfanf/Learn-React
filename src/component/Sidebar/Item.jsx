import React from "react";
import SidebarData from "./SidebarData.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Item = () => {
  return (
    <div>
      {SidebarData.map((item, i) => {
        return (
          <NavLink
            activeClassName="bg-gray-200"
            key={i}
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to={item.path}
          >
            {item.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Item;
