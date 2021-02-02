import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./actions";
import Routes from "./Routes";

function App() {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();
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

export default App;
