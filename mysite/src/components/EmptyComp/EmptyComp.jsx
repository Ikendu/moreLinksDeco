import logoImage from "../../assets/images/logoImage.png";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
export default function () {
  return (
    <div>
      <h4>Pictures Loading....</h4>
      <div className="emptyComp">
        <a href={logoImage}>
          <img src={logoImage} alt="" />
        </a>
        <a href={image1}>
          <img src={image1} alt="" />
        </a>
      </div>
    </div>
  );
}
