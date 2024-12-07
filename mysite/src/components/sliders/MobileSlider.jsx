import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Getter from "../../assets/images/getter";
import "./slider.css";

import image24 from "../../assets/images/image24.jpg";
import image14 from "../../assets/images/image14.jpg";
import image9 from "../../assets/images/image9.jpg";
import image10 from "../../assets/images/image10.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import image28 from "../../assets/images/image28.jpg";
import image40 from "../../assets/images/image40.jpg";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  return (
    <div className="mobileSlideContainer">
      <h2 className="slideHeading">Discover the Art of Event Elegance</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="slideHolder">
              <a href={image24}>
                <img src={image24} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image14}>
                <img src={image14} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image13}>
                <img src={image13} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay"></div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image10}>
                <img src={image10} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image12}>
                <img src={image12} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image9}>
                <img src={image9} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image28}>
                <img src={image28} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
          <div>
            <div className="slideHolder">
              <a href={image40}>
                <img src={image40} alt="" className="sliderIage sliderMobile" />
                <div className="sliderOverlay">.</div>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;
