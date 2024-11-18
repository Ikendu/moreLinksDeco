import React from "react";
import Getter from "../assets/images/getter";
import logoImage from "../assets/images/logoImage.png";
import morelinksImage from "../assets/images/morelinks.png";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="logoSection">
          <img
            src={morelinksImage}
            alt="More Links Icon"
            className="moreImage"
          />
        </div>
        <div>
          {/* <img src={morelinksImage} alt="" className="moreImage" /> */}
        </div>
        <ul className="headerLinks">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
        </ul>
      </header>
      <section>
        <div className="pageCover">
          <div className="overlay">
            <h1>More Links Event Decorations</h1>
            <p>Make your day Memorable</p>
          </div>
        </div>
      </section>
    </div>
  );
}
