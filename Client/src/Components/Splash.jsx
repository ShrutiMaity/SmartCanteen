import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Splash() {
  var imgSrc = [
    "src/assets/Image/Splash/skipQueue.svg",
    "src/assets/Image/Splash/orderOnline.svg",
    "src/assets/Image/Splash/missLecture.svg",
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
      <div id="SplashScreen">
        <div className="top">
          <div className="content flex fd-col center">
            <div className="splashAdvertisement">
              <div className="splashImages">
                <img src={imgSrc[currentIndex]} alt="" />
              </div>
              <div className="quote">
                <p>{imgQuote[currentIndex]}</p>
              </div>
              <div className="splashRadio flex jc-center gap-12">
                <div className={currentIndex == 0 ? "imgOn" : "imgOff"}></div>
                <div className={currentIndex == 1 ? "imgOn" : "imgOff"}></div>
                <div className={currentIndex == 2 ? "imgOn" : "imgOff"}></div>
              </div>
            </div>

            <div className="tagline">
              <p className="header">Smart Canteen</p>
              <p className="desc">Discover the foods from your canteen</p>
            </div>
          </div>
        </div>

        <div className="bottom flex center">
          <div className="btn-holder flex center">
            <button>Sign Up</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
