import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Splash() {
  var imgSrc = [
    "src/assets/Image/Splash/skipQueue.png",
    "src/assets/Image/Splash/orderOnline.png",
    "src/assets/Image/Splash/dmLectures.png",
  ];

  var imgQuote = ["Skip Queue", "Order Online", "Don't Miss Lectures"];

  var [currentIndex, setCurentIndex] = useState(0);

  useEffect(() => {
    const oneInterval = setInterval(() => {
      setCurentIndex((prev) => (prev === imgSrc.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(oneInterval);
    };
  }, []);

  return (
    <>
      <div id="splashScreen">
        <div className="screenTop">
          <div className="splashAdvertisement">
            <div className="splashImages">
              <img src={imgSrc[currentIndex]} alt="" />
            </div>

            <div className="splashQuote">
              <p>{imgQuote[currentIndex]}</p>
            </div>

            <div className="splashRadio flex jc-center gap-12">
              <div className={currentIndex == 0 ? "imgOn" : "imgOff"}></div>
              <div className={currentIndex == 1 ? "imgOn" : "imgOff"}></div>
              <div className={currentIndex == 2 ? "imgOn" : "imgOff"}></div>
            </div>
          </div>

          <div className="appDets">
            <h2 className="appName">Smart Canteen</h2>
            <p className="appDesc">Discover the foods from your canteen</p>
          </div>
        </div>

        <div className="screenBottom flex  gap-48">
          <Link to="/Register">
            <button className="registerBtn">Sign Up</button>
          </Link>

          <Link to="/Login">
            <button className="loginBtn">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Splash;
