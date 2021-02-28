import React from "react";
import { User, ShoppingBag, Globe, Activity, Home } from "react-feather";

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Dashboard from "../../pages/PrivatePages/Dashboard/Dashboard";
import { getToken } from "../../Utils/Common";

const token = getToken();

const SideBar = ({ isOpen, toggle }) => (
  <div
    className={classNames(
      "sidebar",
      { "is-open": isOpen },
      token ? "" : "d-none"
    )}
  >
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Tanipedia</h3>
    </div>
    <div className="side-menu ">
      <Nav vertical className="list-unstyled pb-3 ml-2 mt-3">
        {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
        <NavItem className="rounded-pill mb-2">
          <NavLink
            className="d-flex align-items-center"
            tag={Link}
            to={"/"}
          >
            <Home className="mr-3" size={24} />
            <span>Dashboard</span>
          </NavLink>
        </NavItem>
        <NavItem className="rounded-pill mb-2">
          <NavLink className="d-flex align-items-center" tag={Link} to={"/Home"}>
            <User className="mr-3" size={24} />
            <span>Petani</span>
          </NavLink>
        </NavItem>
        {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
        <NavItem className="rounded-pill mb-2">
          <NavLink
            className="d-flex align-items-center"
            tag={Link}
            to={"/Pupuk"}
          >
            <ShoppingBag className="mr-3" size={24} />
            <span> Pupuk</span>
          </NavLink>
        </NavItem>
        <NavItem className="rounded-pill mb-2">
          <NavLink
            className="d-flex align-items-center"
            tag={Link}
            to={"/Lahan"}
          >
            {" "}
            <Globe className="mr-3" size={24} />
            <span> Lahan</span>
          </NavLink>
        </NavItem>
        <NavItem className="rounded-pill mb-2">
          <NavLink
            className="d-flex align-items-center"
            tag={Link}
            to={"/Panen"}
          >
            {" "}
            <Activity className="mr-3" size={24} />
            <span>Panen</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
