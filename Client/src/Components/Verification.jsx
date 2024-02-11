import React from "react";
import Back from "./Back";
import { useNavigate } from "react-router-dom";

function Verification() {

  const navigate=useNavigate();

  return (
      <>
        <div className="register">
          <Back />
          <div className="div">

          <div className="flex fd-col gap-12">
            <p className="password-heading">Verificaton</p>
            <div className="forgotPasswordDet">
              <p>Enter OTP code from the phone we just sent you</p>
            </div>
            </div>
          
          <div className="flex  gap-36 ac-center fw-w">
          
            <input placeholder=""  className="ver-input" type="text" value={1}></input>
            <input placeholder="" className="ver-input" type="text" value={5}></input>
            <input placeholder="" className="ver-input" type="text" value={7}></input>
            <input placeholder="" className="ver-input" type="text" value={6}></input>
            <div className="resend">
              <p>Didn’t receive OTP code! <span>Resend</span> </p>
            </div>
          </div>
          <button onClick={()=>navigate("/ResetPassword")} className="btn" >Submit</button>
          </div>
          
        </div>
      </>
  );
}

export default Verification;
