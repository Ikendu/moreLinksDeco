import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Getter from "../../assets/images/getter";
import "./slider.css";

import first from "../../assets/images/first.jpeg";
import third from "../../assets/images/third.jpeg";
import image14 from "../../assets/images/image14.jpg";
import image10 from "../../assets/images/image10.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import { useNavigate } from "react-router-dom";

const images = [
  { id: 1, name: first, altText: "" },
  { id: 2, name: third, altText: "" },
  { id: 3, name: image10, altText: "" },
  { id: 4, name: image12, altText: "" },
  { id: 5, name: image13, altText: "" },
  { id: 6, name: image14, altText: "" },
];

function CenterMode() {
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const openFullImage = (imageIdx) => {
    navigate(`image/${imageIdx}`);
  };
  return (
    <div>
      <div className="slideContainer">
        <h2 className="slideHeading">Discover the Art of Event Elegance</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, idx) => (
              <div key={idx}>
                <div
                  className="slideHolder"
                  onClick={() => openFullImage(image.name, image.id)}
                >
                  <img src={image.name} alt="" className="sliderIage" />
                  <div className="sliderOverlay">.</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CenterMode;
