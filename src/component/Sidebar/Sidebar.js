import React, { useState } from "react";
import Item from "./Item";
import Logout from "./Logout";

export const SideBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between border-b-2 border-gray-300">
          <a
            href="#"
            className="text-lg font-semibold tracking-widest text-gray-900 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Tanipedia
          </a>
          <button
            onClick={() => setActive(!active)}
            className={
              active
                ? " md:hidden rounded-lg focus:outline-none focus:shadow-outline transition duration-700 ease-in-out transform rotate-0"
                : "md:hidden rounded-lg focus:outline-none focus:shadow-outline transition duration-700 ease-in-out transform rotate-180"
            }
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                className={active ? "" : "hidden"}
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              ></path>
              <path
                className={active ? "hidden" : ""}
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            active
              ? "flex-grow px-4 pb-4 md:pb-0 md:overflow-y-auto md:block hidden"
              : "flex-grow px-4 pb-4 md:pb-0 md:overflow-y-auto md:block "
          }
        >
          <Item />
          <Logout />
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
