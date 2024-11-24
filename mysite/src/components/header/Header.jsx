import { useEffect, useState } from "react";
import logoImage from "../../assets/images/logoImage.png";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [smallHeader, setSmallHeader] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleHeaderSize = () => {
      if (window.scrollY > 50) {
        setSmallHeader(true);
      } else {
        setSmallHeader(false);
      }
    };
    window.addEventListener("scroll", handleHeaderSize);

    return () => {
      window.removeEventListener("scroll", handleHeaderSize);
    };
  }, []);
  return (
    <div>
      <header>
        <div className="logoSection">
          <img
            src={logoImage}
            alt="More Links Icon"
            className="moreImage"
            height={smallHeader ? 40 : 60}
          />
        </div>
        <ul className={!showNav ? "headerLinks" : "showNav"}>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <Link to={"/"} class="links">
              <i class="fa-solid fa-house"></i>
              Home
            </Link>
          </li>

          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <Link to={"/services"}>
              <i class="fa-solid fa-toolbox"></i>Our Services
            </Link>
          </li>

          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-users"></i>
            About Us
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-phone"></i>Contact us
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <i class="fa-solid fa-blog"></i>Blog Post
          </li>
        </ul>
        <i
          class="fa-solid fa-bars nav-bar"
          onClick={() => setShowNav(!showNav)}
        ></i>
      </header>
    </div>
  );
}
