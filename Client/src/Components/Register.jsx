import React from "react";
import Back from "./Back";
import { useNavigate } from "react-router-dom";

function Register() {

  
  return (
      <>
        <div className="register">
          <Back />
          <div className="div">
          <p className="register-heading"> Create New Account</p>
          <div className="flex jc-center gap-24 fd-col ac-center fw-w">
            <input placeholder="Full Name"  className="input" type="text"></input>
            <input placeholder="Mobile Number" className="input" type="text"></input>
            <input placeholder="Password" className="input" type="password"></input>
            <input placeholder="Confirm Password" className="input" type="pasword"></input>
            <input placeholder="College" className="input" type="text"></input>
          </div>
          <button className="btn" >Continue</button>
          </div>
          
        </div>
      </>
  );
}

export default Register;
