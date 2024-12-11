import React from "react";

import "./service.css";
import Traditional from "./Traditional";
import Reception from "./Reception";
import Engagement from "./Engagement";
import LiveEvents from "./LiveEvents";
import Birthdays from "./Birthdays";
import Corporate from "./Corporate";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const services = [
  { id: 1, comp: <Reception />, name: "Receptions", controls: "collapseOne" },
  {
    id: 2,
    comp: <Traditional />,
    name: "Traditional Wedding Styles",
    controls: "collapseTwo",
  },
];

export default function Service() {
  const navigate = useNavigate();
  return (
    <div className="services">
      <ScrollToTop />
      {/* This is being styled in about-us folder, just few style will come from service folder */}
      <div className="serviceFront">
        <div className="aboutOverlay"></div>
        <div className="aboutMain">
          <div onClick={() => navigate(-1)}>
            <i class="fa-solid fa-arrow-left fa-beat-fade iconStyle"></i>
          </div>
          <h2 className="serviceHead">Our Services</h2>
          <div className="serviceMainPara">
            <p>
              Wedding Décor: <br /> Elegant ceremonies and receptions that
              capture your love story.
            </p>
            <p>
              Corporate Events:
              <br />
              Professional setups that impress clients and colleagues.
            </p>
            <p>
              Birthday & Private Parties:
              <br />
              Fun, vibrant, and memorable decorations for all ages.
            </p>

            <p>
              Themed Events:
              <br />
              Creative concepts brought to life with precision and flair. Let us
              handle the details while you enjoy the celebration!
            </p>
            <br />
          </div>
          {/* <a href="#more_on_ervices">
            <button className="serviceButton">See More</button>
          </a> */}
        </div>
      </div>
      <Link
        to={
          "https://wa.me/2348061632276?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you."
        }
        target="_blank"
      >
        <i class="fa-brands fa-whatsapp whatsapp"></i>
      </Link>

      <div id="more_on_ervices">
        <div class="accordion" id="accordionExample">
          {services.map((service, idx) => (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + service.controls}
                  aria-expanded={idx == 0 ? "true" : "false"}
                  aria-controls={service.controls}
                  onClick={() => window.scrollTo(0, 700)}
                >
                  {service.name}
                </button>
              </h2>
              <div
                id={service.controls}
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">{service.comp}</div>
              </div>
              {console.log("#" + service.controls)}
            </div>
          ))}

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                onClick={() => window.scrollTo(0, 700)}
              >
                Celebration of Lives
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <LiveEvents />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
                onClick={() => window.scrollTo(0, 700)}
              >
                Engagements Styles
              </button>
            </h2>
            <div
              id="collapsefour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Engagement />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
                onClick={() => window.scrollTo(0, 700)}
              >
                Birthday Celebrations
              </button>
            </h2>
            <div
              id="collapse5"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Birthdays />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
                onClick={() => window.scrollTo(0, 700)}
              >
                Corporate Events
              </button>
            </h2>
            <div
              id="collapse6"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Corporate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
