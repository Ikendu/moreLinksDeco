import { useParams } from "react-router-dom";
import "./image.css";
import image24 from "../../assets/images/image24.jpg";
import image14 from "../../assets/images/image14.jpg";
import image9 from "../../assets/images/image9.jpg";
import image10 from "../../assets/images/image10.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import image28 from "../../assets/images/image28.jpg";
import image40 from "../../assets/images/image40.jpg";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

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

export default function FullImage() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const image = images.find((image) => image.id === Number(imageId));

  const handuleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="fullISpace">
      <ScrollToTop />
      <div onClick={handuleNavigate}>
        <i class="fa-solid fa-arrow-left fa-beat-fade"></i>
      </div>

      <div className="centerImage">
        <img src={image.name} alt="" className="fullImage" />
      </div>
    </div>
  );
}
