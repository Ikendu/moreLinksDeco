import React, { useEffect, useState } from "react";
import Getter from "../assets/images/getter";
import morelinksImage from "../assets/images/morelinks.png";
import divider from "../assets/images/divider1.svg";
import ChooseUs from "../components/ChooseUs";
import homeIcon from "../assets/icons/home.png";
import aboutIcon from "../assets/icons/about.png";

import FrontServices from "../components/FrontServices";
import Footer from "../components/footer/Footer";
import Slider from "../components/sliders/SliderComponent";
import MobileSlider from "../components/sliders/MobileSlider";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const [smallHeader, setSmallHeader] = useState(false);
  const [showNav, setShowNav] = useState(false);

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
      <ScrollToTop />
      <section>
        <div className="pageCover">
          <div className="overlay">
            <div className="landingContent">
              <h1>Transform Your Event into a Magical Experience</h1>
              <p>Every Occasion Deserves to Be Unforgettable.</p>
              <h3>Welcome to More-Links Event Decoration</h3>
              <h3>Where Elegance Meets Creativity</h3>
              <a href="#body">
                <input
                  type="button"
                  className="heroButton"
                  value={"Uncover More"}
                />
              </a>
            </div>
          </div>
          <img src={divider} alt="" className="divider" />
        </div>{" "}
      </section>
      <Link
        to={
          "https://wa.me/2348061632276?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you."
        }
        target="_blank"
      >
        <i class="fa-brands fa-whatsapp whatsapp"></i>
      </Link>
      <section id="body">
        <ChooseUs />
      </section>
      <section>
        <Slider />
        <MobileSlider />
      </section>
      <section>
        <FrontServices />
      </section>
    </div>
  );
}
