import React from "react";
import "./footer.css";

import logo from "../../assets/images/logoImage.png";
import Getter from "../../assets/images/getter";
import { Link } from "react-router-dom";

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
                  <Link to="/gallery">🎈 Event Styling</Link>
                </li>
                <li>
                  <a href="">💐 Floral Arrangements</a>
                </li>
                <li>
                  <Link to="/gallery">🎀 Custom Decor </Link>
                </li>
                <li>
                  <Link to="/gallery">🚨 Lighting & Ambience</Link>
                </li>
                <li>
                  <Link to="/gallery">📸 Instagram-Worthy Setups</Link>
                </li>
                <li>
                  <Link to="/gallery">🌺 Explore Our Gallary 🌺</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="centerControl">
            <div className="quickLinks">
              <h2>Quick Links</h2>
              <ul className="footerLinks">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Our Solutions</Link>
                </li>
                <li>
                  <Link to="/gallery">Our Gallary.</Link>
                </li>
                <li>
                  <Link to="/testimony">Clients Testimonies</Link>
                </li>
                <li>
                  <Link to="/blogpost">Event planning trends.</Link>
                </li>
                <li>
                  <Link to="/contact">Reach out today.</Link>
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
                <li>
                  <a
                    href="https://wa.me/2348061632276?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you."
                    target="_blank"
                  >
                    <i class="fa-brands fa-whatsapp"></i>
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
