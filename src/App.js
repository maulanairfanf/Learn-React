import React, { useState } from "react";
import Routes from "./routes/Routes";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { getToken } from "./Utils/Common";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const token = getToken();

  return (
    <>
      <Router>
        <div className="App wrapper">
          <div className={token ? "" : "d-none"}>
            <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          </div>

          <Routes toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>{" "}
      </Router>
    </>
  );
};

export default App;
