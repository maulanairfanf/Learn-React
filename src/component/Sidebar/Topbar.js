import React, { useState } from "react";

import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { getName } from "../../Utils/Common";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { AlignLeft } from "react-feather";
const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const name = getName();

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-lg p-3 mb-5 bg-white rounded  "
      expand="md"
    >
      <Button
        color="info"
        onClick={toggleSidebar}
        className="p-1"
        // style={{ border: "2px solid black" }}
      >
        <AlignLeft size={24} />
      </Button>
      {/* <NavbarToggler onClick={toggleTopbar} /> */}
      {/* <Collapse isOpen={topbarIsOpen} navbar> */}
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to={"/page-1"} className="text-capitalize">
            Selamat Datang {name}
          </NavLink>
        </NavItem>
        {/* <NavItem>
            <NavLink tag={Link} to={"/page-2"}></NavLink>
          </NavItem> */}
        {/* <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              page 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              page 4
            </NavLink>
          </NavItem> */}
      </Nav>
      {/* </Collapse>{" "} */}
      <Logout />
    </Navbar>
  );
};

export default Topbar;
