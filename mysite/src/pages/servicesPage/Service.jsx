import React from "react";

import "./service.css";
import Traditional from "./Traditional";
import Reception from "./Reception";
import Engagement from "./Engagement";
import LiveEvents from "./LiveEvents";
import Birthdays from "./Birthdays";
import Corporate from "./Corporate";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="services">
      {/* This is being styled in about-us folder, just few style will come from service folder */}
      <div className="serviceFront">
        <div className="aboutOverlay"></div>
        <div className="aboutMain">
          <h2>Our Service</h2>
          <p className="serviceMainPara">
            <p>Wedding Décor:</p> Elegant ceremonies and receptions that capture
            your love story.
            <p>Corporate Events:</p> Professional setups that impress clients
            and colleagues.
            <p>Birthday & Private Parties:</p> Fun, vibrant, and memorable
            decorations for all ages.
            <p>Themed Events:</p> Creative concepts brought to life with
            precision and flair. Let us handle the details while you enjoy the
            celebration!
          </p>
          <a href="#more_on_ervices">
            <button className="serviceButton">See More</button>
          </a>
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
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Traditional Wedding Styles
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Traditional />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Receptions
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Reception />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
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
