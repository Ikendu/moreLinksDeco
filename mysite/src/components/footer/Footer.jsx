import React from "react";
import "./footer.css";

import logo from "../../assets/images/logoImage.png";
import Getter from "../../assets/images/getter";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="imageContainer">
          <img src={logo} alt="" className="imageFooter" />
        </div>
        <div className="footerContents">
          <div className="centerControl">
            <div>
              <h2>Let’s Stay Connected</h2>
              <div className="contact">
                <i class="fa-solid fa-phone"></i>
                <p>+234 806 163 2276</p>
              </div>
              <div className="contact">
                <i class="fa-solid fa-envelope"></i>
                <p>service@moredeco.com.ng</p>
              </div>
              <div className="contact">
                <i class="fa-solid fa-location-dot"></i>
                <p>30 Adelabor Street Uwani Enugu</p>
              </div>
            </div>
            <div>
              <h2>✨&nbsp;Services&nbsp;&&nbsp;Solutions</h2>
              <ul className="serviceList">
                <li>
                  <a href="">🎈 Event Styling</a>
                </li>
                <li>
                  <a href="">💐 Floral Arrangements</a>
                </li>
                <li>
                  <a href="">🎀 Custom Decor </a>
                </li>
                <li>
                  <a href="">🚨 Lighting & Ambience</a>
                </li>
                <li>
                  <a href="">📸 Instagram-Worthy Setups</a>
                </li>
                <li>
                  <a href="">🌺 Explore Our Gallary 🌺</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="centerControl">
            <div className="quickLinks">
              <h2>Quick Links</h2>
              <ul className="footerLinks">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Solutions</a>
                </li>
                <li>
                  <a href="">Our Gallary.</a>
                </li>
                <li>
                  <a href="">Clients Testimonies</a>
                </li>
                <li>
                  <a href="">Event planning trends.</a>
                </li>
                <li>
                  <a href="">Reach out today.</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Let get social</h2>
              <ul className="socialLinks">
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <p className="socialPara">
                We bring the years, global experience, and stamina to guide our
                clients through new and often disruptive realities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerFooter">
        More Deco – Where Dreams Meet Décor © {new Date().getFullYear()} All
        Rights Reserved. Privacy Policy | Terms of Service
      </div>
    </div>
  );
}
