import React from "react";
import "./footer.css";

import logo from "../../assets/images/logoImage.png";
import Getter from "../../assets/images/getter";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={logo} alt="" className="imageFooter" />
        </div>
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
            <p>30 Adelabor Street Uwani Enugu, Nigeria</p>
          </div>
        </div>
        <div>
          <h2>✨&nbsp;Services&nbsp;and&nbsp;Solutions</h2>
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
              <a href="">🎶 Lighting & Ambience</a>
            </li>
            <li>
              <a href="">📸 Instagram-Worthy Setups</a>
            </li>
            <li>
              <a href="">🌺 Explore Our Gallary 🌺</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul className="footerLinks">
            <li>
              <a href="">
                <span>About Us</span> – Learn more about our journey
              </a>
            </li>
            <li>
              <a href="">
                <span>Our Services</span> – Explore our decor solutions
              </a>
            </li>
            <li>
              <a href="">
                <span>Gallery</span> – Get inspired by our past creations.
              </a>
            </li>
            <li>
              <a href="">
                <span>Testimonials</span> – Hear from our happy clients.
              </a>
            </li>
            <li>
              <a href="">
                <span>Blog</span> – Discover event planning tips and trends.
              </a>
            </li>
            <li>
              <a href="">
                <span>Contact Us</span> – Ready to make magic? Reach out today.
              </a>
            </li>
          </ul>
          .
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
      <div className="lowerFooter">
        More Deco – Where Dreams Meet Décor © {new Date().getFullYear()} All
        Rights Reserved. Privacy Policy | Terms of Service
      </div>
    </div>
  );
}
