import { useState } from "react";
import "./image.css";
import image13 from "../../assets/images/image13.jpg";

export default function SlideImage({ imageSrc, altText }) {
  const [isFullSize, setIsFullSize] = useState(false);

  const handleImageClick = () => {
    setIsFullSize(true);
  };

  const handleClose = () => {
    setIsFullSize(false);
  };
  return (
    <div>
      {!isFullSize ? (
        <img
          src={imageSrc}
          alt={altText}
          onClick={handleImageClick}
          className="sliderIage"
        />
      ) : (
        <div className="fullISpace">
          <button onClick={handleClose} className="imageButton">
            Back
          </button>
          <div>
            <img src={imageSrc} className="fullImage" />
          </div>
          <button onClick={handleClose} className="imageButton">
            Close
          </button>
        </div>
      )}
    </div>
  );
}
