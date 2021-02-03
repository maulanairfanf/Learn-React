import React from "react";
import App from "./App";
// import Item from "./Items";
// import Data from "../../../store/Data.json";

export const Home = () => {
  return (
    <div className="w-full bg-gray-300">
      <div className="flex h-full justify-center items-center">
        {/* <h1>{this.state.todos}</h1> */}
        <App />
      </div>
    </div>
  );
};

export default Home;
