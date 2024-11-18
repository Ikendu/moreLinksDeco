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
            <div className="landingContent">
              <h1>Transform Your Event into a Magical Experience</h1>
              <p>Because Every Occasion Deserves to Be Unforgettable.</p>
              <h3>
                Welcome to [Your Business Name]: Where Elegance Meets Creativity
              </h3>
              <p>
                Your event isn’t just a gathering—it’s a story waiting to be
                told. At [Your Business Name], we specialize in creating
                captivating spaces that embody your vision and leave a lasting
                impression. From intimate celebrations to grand occasions, we
                bring your dreams to life with stunning event décor tailored to
                your style and theme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
