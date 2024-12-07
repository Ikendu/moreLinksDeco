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
import { useNavigate } from "react-router-dom";

const images = [
  { id: 1, name: image9, altText: "" },
  { id: 2, name: image10, altText: "" },
  { id: 3, name: image14, altText: "" },
  { id: 4, name: image12, altText: "" },
  { id: 5, name: image13, altText: "" },
  { id: 7, name: image28, altText: "" },
  { id: 8, name: image40, altText: "" },
  { id: 9, name: image24, altText: "" },
];

function CenterMode() {
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };

  const openFullImage = (imageIdx) => {
    navigate(`image/${imageIdx}`);
  };

  return (
    <div className="mobileSlideContainer">
      <h2 className="slideHeading">Discover the Art of Event Elegance</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div key={idx}>
              <div
                className="slideHolder"
                onClick={() => openFullImage(image.id)}
              >
                <img
                  src={image.name}
                  alt=""
                  className="sliderIage sliderMobile"
                />
                <div className="sliderOverlay">.</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;
