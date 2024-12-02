import Getter from "../../assets/images/getter";
import sixth from "../../assets/images/sixth.jpg";
import image13 from "../../assets/images/image13.jpg";
import image12 from "../../assets/images/image12.jpg";
import image20 from "../../assets/images/image20.jpg";
import image22 from "../../assets/images/image22.jpg";
Getter;
export default function Reception() {
  return (
    <div>
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
        <a href={image20}>
          <img src={image20} alt="" />
        </a>
        <a href={image22}>
          <img src={image22} alt="" />
        </a>
      </div>
    </div>
  );
}
