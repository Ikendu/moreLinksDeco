import React from "react";
import Getter from "../assets/images/getter";
import logoImage from "../assets/images/logoImage.png";
import morelinksImage from "../assets/images/morelinks.png";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="logoSection">
          <img src={logoImage} alt="More Links Icon" className="logoImage" />
          <h3>
            <img src={morelinksImage} alt="" className="moreImage" />
          </h3>
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
        </ul>
      </header>
    </div>
  );
}
