import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Register from "./component/Pages/Register/Register";

export const App = () => {
  return (
    <AuthProvider>
      <div>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full ">
          {/* <Routes /> */}
          <Register />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
