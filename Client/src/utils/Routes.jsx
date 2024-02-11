import React from "react";
import Register from "../Components/Register";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Splash from "../Components/Splash";
import Login from "../Components/Login";
import ForgotPassword from "../Components/ForgotPassword";
import Verification from "../Components/Verification";
import ResetPassword from "../Components/ResetPassword";

function Routing(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/Verification" element={<Verification />}></Route>
            <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        </Routes>
        </>
    )
}

export default Routing;