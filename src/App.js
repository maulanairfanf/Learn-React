import React, { Component } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./actions";
import Routes from "./Routes";
import { Switch, Route } from "react-router-dom";
import Login from "./component/Layout/Login/Login";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <div className="md:flex flex-col md:flex-row md:min-h-screen w-full ">
            <Routes />
          </div>
        </div>
      </>
    );
  }
}

export default App;
