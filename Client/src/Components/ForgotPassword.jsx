import React from "react";
import Back from "./Back";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate=useNavigate();

  return (
    <>
      <div className="register">
        <Back />

        <div className="div">
          <div className="flex fd-col gap-12">
            <p className="password-heading">Forgot Password</p>
            <div className="forgotPasswordDet">
              <p>
              Please enter your phone number so we can recover your password              </p>
            </div>
          </div>

          <div className="flex jc-center gap-24 fd-col ac-center fw-w">
            <input
              placeholder="Email/Phone Number"
              className="input"
              type="text"
            ></input>
          </div>
          <button onClick={()=>navigate("/Verification")} className="btn">Send OTP</button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
