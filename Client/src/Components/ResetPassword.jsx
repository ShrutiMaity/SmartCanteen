import React from "react";
import Back from "./Back";

function ResetPassword() {
  return (
      <>
        <div className="register">
          <Back />
          
          <div className="div">
            <div className="flex fd-col gap-12">
            <p className="password-heading">Reset Password</p>
            <div className="forgotPasswordDet">
              <p>Enter your new password and confirm.</p>
            </div>
            </div>
          
          <div className="flex jc-center gap-24 fd-col ac-center fw-w">
            
            <input placeholder="Password"  className="input" type="text"></input>
            <input placeholder="Confirm Password"  className="input" type="text"></input>
          </div>
          <button className="btn" >Confirm</button>
          </div>
          
        </div>
      </>
  );
}

export default ResetPassword;
