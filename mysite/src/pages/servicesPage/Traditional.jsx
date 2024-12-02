import Getter from "../../assets/images/getter";
import image10 from "../../assets/images/image10.jpg";
import image15 from "../../assets/images/image15.jpg";
import image16 from "../../assets/images/image16.jpg";
import image18 from "../../assets/images/image18.jpg";
import image19 from "../../assets/images/image19.jpg";
Getter;
export default function Traditional() {
  return (
    <div>
      <div className="genImage">
        <a href={image10}>
          <img src={image10} alt="" />
        </a>
        <a href={image15}>
          <img src={image15} alt="" />
        </a>
        <a href={image16}>
          <img src={image16} alt="" />
        </a>
        <a href={image18}>
          <img src={image18} alt="" />
        </a>
        <a href={image19}>
          <img src={image19} alt="" />
        </a>
      </div>
    </div>
  );
}
