import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "./contact.css";
import ScrollToTop from "../../components/ScrollToTop";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moredeco.com.ng/contact.php",
        formData
      );
      console.log(response);
      setStatus("Message sent successfully!");
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
    }
    emailjs
      .send("service_2yry7mf", "template_flz454q", formData, {
        publicKey: "iPQWPyYdO6yD4VgQA",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="contactUs">
      <ScrollToTop />
      <div>
        <div className="contactFront">
          <div className="contactOverlay"></div>

          <div className="aboutMain">
            <div onClick={() => navigate(-1)}>
              <i class="fa-solid fa-arrow-left fa-beat-fade iconStyle"></i>
            </div>
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
            <form onSubmit={handleSubmit}>
              <h3>Tell us what is on your mind</h3>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your fullname"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  id="email"
                  onChange={handleChange}
                  placeholder="Active email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number: </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  id="phone"
                  onChange={handleChange}
                  placeholder="Active phone number"
                />
              </div>
              <div>
                <label htmlFor="message">Message for us </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <input type="submit" />
              <button>
                {status ? (
                  <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                ) : (
                  "Submit"
                )}
              </button>
              {status && <p>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
