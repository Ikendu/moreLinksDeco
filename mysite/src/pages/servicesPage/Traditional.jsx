import Getter from "../../assets/images/getter";
import aboutbg from "../../assets/images/aboutbg.jpg";
import image15 from "../../assets/images/image15.jpg";
import image16 from "../../assets/images/image16.jpg";
import image10 from "../../assets/images/image10.jpg";
import image19 from "../../assets/images/image19.jpg";
import image42 from "../../assets/images/image42.jpg";
import ServiceScroll from "./ServiceScroll";
// import image17 from "../../assets/images/image18.jpg";
Getter;
export default function Traditional() {
  return (
    <div>
      <ServiceScroll />
      <div className="genImage">
        <a href={aboutbg}>
          <img src={aboutbg} alt="" />
        </a>
        <a href={image10}>
          <img src={image10} alt="" />
        </a>
        <a href={image15}>
          <img src={image15} alt="" />
        </a>
        <a href={image16}>
          <img src={image16} alt="" />
        </a>
        <a href={image19}>
          <img src={image19} alt="" />
        </a>
        <a href={image42}>
          <img src={image42} alt="" />
        </a>
      </div>
    </div>
  );
}
