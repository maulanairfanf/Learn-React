import React from "react";
import Routes from "../../Routes";
// import Section1 from "./Section1";
// import Section2 from "./Section2";

export const Layout = () => {
  return (
    <div className="w-full" style={{ border: "2px solid green" }}>
      <div
        className="flex h-full justify-center items-center"
        style={{ border: "2px solid blue" }}
      >
        <Routes />
      </div>
    </div>
  );
};

export default Layout;
