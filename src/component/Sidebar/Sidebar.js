import React from "react";
import { User, ShoppingBag, Globe, Activity, Home } from "react-feather";

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

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
        <NavItem className="rounded-pill mb-2">
          <NavLink className="d-flex align-items-center" tag={Link} to={"/"}>
            <Home className="mr-3" size={24} />
            <span>Dashboard</span>
          </NavLink>
        </NavItem>
        <NavItem className="rounded-pill mb-2">
          <NavLink
            className="d-flex align-items-center"
            tag={Link}
            to={"/Home"}
          >
            <User className="mr-3" size={24} />
            <span>Petani</span>
          </NavLink>
        </NavItem>

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
            <Activity className="mr-3" size={24} />
            <span>Panen</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
