import React, { useState } from "react";
import Routes from "./routes/Routes";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <>
      <Router>
        <div className="App wrapper">
          <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Routes toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>{" "}
      </Router>
    </>
  );
};

export default App;
