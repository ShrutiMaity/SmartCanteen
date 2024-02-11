import React from "react";
import Menu from "./Menu";

function LandingPage() {
  {
    return (
      <div className="login LandingPage">
        <nav>
          <div className="flex fd-col gap-24">
          <div className="location flex fd-col gap-12">
            <p className="">Pickup from</p>
            <p className="locationDropdow flex gap-12">
              <i className="fa-solid fa-location-dot"></i>
              <span>V-Lounge</span>
              <i className="bx bxs-chevron-down"></i>
            </p>
          </div>
          <div className="searchBar">
            {/* {<i class='bx bx-search'></i>} */}
            <input placeholder="Searching" type="text" />
          </div>
          </div>
          
        </nav>


        <Menu />

        <footer>
          <div className="footerItems flex jc-sb">
            <div>
            <i className="bx bx-home"></i>
            <p>Home</p>
            </div>
            <div>
            <i className="fa-solid fa-list-check"></i>
            <p>Orders</p>
            </div>
            <div>
            <i className="bx bx-cart-alt"></i>
            <p>Cart</p>
            </div>
            <div>
            <i className="bx bx-user-circle"></i>
            <p>Profile</p>
            </div>
            
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
