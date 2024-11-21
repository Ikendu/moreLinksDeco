import React from "react";
import "./footer.css";

import logo from "../../assets/images/logoImage.png";
import Getter from "../../assets/images/getter";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="" className="imageFooter" />
      </div>
      <div>
        <h2>Let’s Stay Connected</h2>
        <div>
          <i class="fa-solid fa-phone"></i>
          +234 806 163 2276
        </div>
        <div>
          <i class="fa-solid fa-location-dot"></i>
          30 Adelabor Street Uwani Enugu, Nigeria
        </div>
        <div>
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
      <div>
        <h2>Services and Solutions</h2>
      </div>
      <div>
        <h2>Let get social</h2>
      </div>
    </div>
  );
}
