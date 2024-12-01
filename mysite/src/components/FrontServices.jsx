import React from "react";
import { Link } from "react-router-dom";

export default function FrontServices() {
  return (
    <div className="service">
      <div className="overlay2">
        <div className="serviceCover">
          <h2 className="serviceHeader">What we do</h2>
          <div className="servicePara">
            <p>
              ✨ Weddings & Engagements: Romantic, breathtaking designs that
              make your big day unforgettable.
            </p>
            <p>
              🎉 Corporate Events: Professional, polished setups for launches,
              awards nights, and conferences.
            </p>
            <p>
              🎈 Private Parties: Birthdays, anniversaries, and everything in
              between—celebrate in style.
            </p>
          </div>
        </div>
        <Link
          className="whatsappChat"
          to={
            "https://wa.me/2348061632276?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you."
          }
          target="_blank"
        >
          <i class="fa-brands fa-whatsapp "></i>
          Tell us how you want it
        </Link>
      </div>
    </div>
  );
}
