import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Getter from "../../assets/images/getter";
import "./slider.css";

import first from "../../assets/images/first.jpeg";
import second from "../../assets/images/second.jpeg";
import third from "../../assets/images/third.jpeg";
import image9 from "../../assets/images/image9.jpg";
import fourth from "../../assets/images/fourth.jpg";
import fifth from "../../assets/images/fifth.jpg";
import image14 from "../../assets/images/image14.jpg";
import image10 from "../../assets/images/image10.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slideContainer">
      <h2 className="slideHeading">Discover the Art of Event Elegance</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="slideHolder">
              <img src={first} alt="" className="sliderIage" />
              <div className="sliderOverlay">.</div>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <img src={image14} alt="" className="sliderIage" />
              <div className="sliderOverlay">.</div>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <img src={third} alt="" className="sliderIage" />
              <div className="sliderOverlay">.</div>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <img src={image13} alt="" className="sliderIage" />
              <div className="sliderOverlay"></div>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <img src={image10} alt="" className="sliderIage" />
              <div className="sliderOverlay">.</div>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <img src={image12} alt="" className="sliderIage" />
              <div className="sliderOverlay">.</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;
