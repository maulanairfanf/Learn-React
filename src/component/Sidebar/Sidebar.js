import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEyeDropper,
  faSeedling,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
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
          <NavLink activeClassName="bg-white" tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </NavLink>
        </NavItem>
        {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
        <NavItem className="rounded-pill mb-2">
          <NavLink tag={Link} to={"/Pupuk"}>
            <FontAwesomeIcon icon={faEyeDropper} className="mr-2" />
            Pupuk
          </NavLink>
        </NavItem>
        <NavItem className="rounded-pill mb-2">
          <NavLink tag={Link} to={"/Lahan"}>
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            Lahan
          </NavLink>
        </NavItem>
        <NavItem className="rounded-pill mb-2">
          <NavLink tag={Link} to={"/Panen"}>
            <FontAwesomeIcon icon={faSeedling} className="mr-2" />
            Panen
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
