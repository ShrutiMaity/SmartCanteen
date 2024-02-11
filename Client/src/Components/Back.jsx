import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {

  const navigate = useNavigate();

  const goBackHandler = () => {
    console.log("Back");
    navigate(-1);
  };

  return (
    <div className="flex">
      <i onClick={goBackHandler} className="flex back bx bx-left-arrow-alt"></i>
    </div>
  );
}

export default Back;
