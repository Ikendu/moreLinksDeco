import { useEffect, useState } from "react";
import logoImage from "../../assets/images/logoImage.png";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();

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
        <div onClick={() => navigate("/")}>
          <div className="logoSection">
            <img
              src={logoImage}
              alt="More Links Icon"
              className="moreImage"
              height={smallHeader ? 40 : 60}
            />
          </div>
        </div>

        <ul className={!showNav ? "headerLinks" : "showNav"}>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <div
              class="links"
              onClick={() => {
                setShowNav(false);
                navigate("/");
              }}
            >
              <i class="fa-solid fa-house"></i>
              Home
            </div>
          </li>

          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <div
              to={"/"}
              class="links"
              onClick={() => {
                setShowNav(false);
                navigate("/about");
              }}
            >
              <i class="fa-solid fa-users"></i>
              About Us
            </div>
          </li>

          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <div
              class="links"
              onClick={() => {
                setShowNav(false);
                navigate("/services");
              }}
            >
              <i class="fa-solid fa-toolbox"></i>Our Services
            </div>
          </li>
          <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <div
              class="links"
              onClick={() => {
                setShowNav(false);
                navigate("/contact");
              }}
            >
              <i class="fa-solid fa-phone"></i>Contact us
            </div>
          </li>
          {/* <li className={smallHeader ? "reduceLink" : "increaseLink"}>
            <div
              class="links"
              onClick={() => {
                setShowNav(false);
                navigate("/blogpost");
              }}
            >
              <i class="fa-solid fa-blog"></i>Blog Post
            </div>
          </li> */}
        </ul>
        <i
          class="fa-solid fa-bars nav-bar"
          onClick={() => setShowNav(!showNav)}
        ></i>
      </header>
    </div>
  );
}
