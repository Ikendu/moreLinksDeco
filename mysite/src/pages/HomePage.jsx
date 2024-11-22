import React, { useEffect, useState } from "react";
import Getter from "../assets/images/getter";
import logoImage from "../assets/images/logoImage.png";
import morelinksImage from "../assets/images/morelinks.png";
import divider from "../assets/images/divider1.svg";
import ChooseUs from "../components/ChooseUs";
import homeIcon from "../assets/icons/home.png";
import aboutIcon from "../assets/icons/about.png";
import OurService from "../components/OurService";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    const handleHeaderSize = () => {
      if (window.scrollY > 50) {
        setSmallHeader(true);
      } else {
        setSmallHeader(false);
      }
    };
    window.addEventListener("scroll", handleHeaderSize);

    return () => {
      window.removeEventListener("scroll", handleHeaderSize);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="logoSection">
          <img
            src={logoImage}
            alt="More Links Icon"
            className="moreImage"
            height={smallHeader ? 40 : 60}
          />
        </div>
        <ul className="headerLinks">
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-house"></i>
            Home
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-users"></i>
            About Us
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-phone"></i>Contact us
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-blog"></i>Blog Post
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-users-between-lines"></i>Our Community
          </li>
        </ul>
      </header>
      <section>
        <div className="pageCover">
          <div className="overlay">
            <div className="landingContent">
              <h1>Transform Your Event into a Magical Experience</h1>
              <p>Every Occasion Deserves to Be Unforgettable.</p>
              <h3>Welcome to More-Links Event Decoration</h3>
              <h3>Where Elegance Meets Creativity</h3>
              <p className="moreParagraph">
                Your event isn’t just a gathering—it’s a story waiting to be
                told. From intimate celebrations to grand occasions, we bring
                your dreams to life with stunning event décor tailored to your
                style and theme.
              </p>
              {/* <input
                type="button"
                className="heroButton"
                value={"Uncover More"}
              /> */}
            </div>
          </div>
          <img src={divider} alt="" className="divider" />
        </div>
      </section>
      <section>
        <ChooseUs />
      </section>
      <section>
        <OurService />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
