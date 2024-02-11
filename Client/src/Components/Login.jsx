import React from "react";
import Back from "./Back";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate=useNavigate();

  return (
    <>
      <div className="login">
        <Back />

        <div className="div">
        <div>
          <div className="flex jc-center gap-24 fd-col ac-center fw-w">
            <div className="loginErr">
              <p>
                Oh no! Your account name or password is incorrect, please enter
                again.
              </p>
            </div>
            <input
              placeholder="Full Name"
              className="input"
              type="text"
            ></input>
            <input
              placeholder="Password"
              className="input"
              type="password"
            ></input>
          </div>

          <div className="a">
            <p onClick={()=>navigate("/ForgotPassword")} className="forgotPassword"> Forgot Password!</p>
          </div>

          <button className="btn">Continue</button>
        </div>

        <p className="registerLink">
          You don't have an account?
          {/* <Link to="/Register">
           <span>Sign Up</span>
          </Link> */}

          <span onClick={()=>navigate("/Register")}>Sign Up</span>
        </p>
        </div>

        
      </div>
    </>
  );
}

export default Login;
