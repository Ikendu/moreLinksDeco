import Getter from "../../assets/images/getter";
import image14 from "../../assets/images/image14.jpg";
import image9 from "../../assets/images/image9.jpg";
import image8 from "../../assets/images/image8.jpg";
import image17 from "../../assets/images/image18.jpg";
import ServiceScroll from "./ServiceScroll";
Getter;
export default function Engagement() {
  return (
    <div>
      <ServiceScroll />
      <div className="genImage">
        <a href={image14}>
          <img src={image14} alt="" />
        </a>
        <a href={image9}>
          <img src={image9} alt="" />
        </a>
        <a href={image8}>
          <img src={image8} alt="" />
        </a>
        <a href={image14}>
          <img src={image14} alt="" />
        </a>
      </div>
    </div>
  );
}
