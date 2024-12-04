import React from "react";
import "./contact.css";
import ScrollToTop from "../../components/ScrollToTop";

export default function Contact() {
  return (
    <div className="contactUs">
      <ScrollToTop/>
      <div>
        <div className="contactFront">
          <div className="contactOverlay"></div>
          <div className="aboutMain">
            <h2>Contact Us Today</h2>
            <p>
              At More-Links Deco, we believe every event deserves a touch of
              magic. Whether you're planning a wedding, corporate event,
              birthday party, or any special occasion, we're here to bring your
              vision to life.
              <hr /> Feel free to reach out using any of the methods below—we're
              excited to hear from you!
            </p>
          </div>
        </div>

        <div className="contactSection">
          <div className="contactDetails">
            <h3>Get in Touch</h3>
            <div className="fullDetails">
              <p>📞 Phone: +2348061632276</p>
              <p>📧 Email: services@moredeco.com</p>
              <p>📍 Location: 30 Adelabor Street Uwani, Enugu, Nigeria</p>
            </div>
          </div>
          <div className="form">
            <form action="">
              <h3>Tell us what is on your mind</h3>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your fullname"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Active email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number: </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Active phone number"
                />
              </div>
              <div>
                <label htmlFor="message">Message for us </label>
                <textarea name="message" id="message"></textarea>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
