// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react";
import Splash from "./Components/Splash";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Verification from "./Components/Verification";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./utils/Routes";
import LandingPage from "./Components/LandingPage";
import Cart from "./Components/Cart";

import { useNavigate } from "react-router-dom";
import Routing from "./utils/Routes";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div id="Main">
        <div className="screen">
          <Splash />

          {/* <Register /> */}
          {/* <Login /> */}
          {/* <ForgotPassword /> */}
          {/* <ResetPassword /> */}
          {/* <Verification /> */}
          {/* <LandingPage /> */}
          {/* <Cart /> */}

          {/* <Routing /> */}
        </div>
      </div>
    </>
  );
}

export default App;
