import React, { useState } from "react";
import Item from "./Item";
import Logout from "./Logout";

export const SideBar = () => {
  // const [active, setActive] = useState(false);

  return (
    <>
      <div>
        <h1>Tanipedia</h1>
        {/* <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Collapsible Sidebar</h3>
          </div>

          <ul class="list-unstyled components">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <button type="button" id="sidebarCollapse" class="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div> */}
      </div>
      <nav
      // className={
      //   active
      //     ? "flex-grow px-4 pb-4 md:pb-0 md:overflow-y-auto md:block hidden"
      //     : "flex-grow px-4 pb-4 md:pb-0 md:overflow-y-auto md:block "
      // }
      >
        <Item />
        <Logout />
      </nav>
    </>
  );
};

export default SideBar;
