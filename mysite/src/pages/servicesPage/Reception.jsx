import Getter from "../../assets/images/getter";
import sixth from "../../assets/images/sixth.jpg";
import image13 from "../../assets/images/image13.jpg";
import image12 from "../../assets/images/image12.jpg";
import image20 from "../../assets/images/image20.jpg";
import image22 from "../../assets/images/image22.jpg";
import image26 from "../../assets/images/image26.jpg";
import image24 from "../../assets/images/image24.jpg";
import image4 from "../../assets/images/image4.jpeg";
import image40 from "../../assets/images/image40.jpg";
import image41 from "../../assets/images/image41.jpg";
import ServiceScroll from "./ServiceScroll";
Getter;
export default function Reception() {
  return (
    <div>
      <ServiceScroll />
      <div className="genImage">
        <a href={sixth}>
          <img src={sixth} alt="" />
        </a>
        <a href={image13}>
          <img src={image13} alt="" />
        </a>
        <a href={image12}>
          <img src={image12} alt="" />
        </a>
        <a href={image22}>
          <img src={image22} alt="" />
        </a>
        <a href={image26}>
          <img src={image26} alt="" />
        </a>
        <a href={image24}>
          <img src={image24} alt="" />
        </a>
        <a href={image40}>
          <img src={image40} alt="" />
        </a>
        <a href={image41}>
          <img src={image41} alt="" />
        </a>
        <a href={image4}>
          <img src={image4} alt="" />
        </a>
      </div>
    </div>
  );
}
