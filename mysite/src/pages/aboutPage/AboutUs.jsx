import React from "react";
import "./about.css";

export default function AboutUs() {
  return (
    <div className="aboutContainer">
      <div className="aboutFront">
        <div className="aboutOverlay"></div>
        <div className="aboutMain">
          <h2>About Us</h2>
          <p>
            At More-Links Event Deco, we transform ordinary spaces into
            breathtaking experiences. With over 6 years of experience in the
            event decoration industry, our team has mastered the art of curating
            memorable events tailored to your unique vision. From elegant
            weddings and corporate galas to intimate celebrations, we pride
            ourselves on creating atmospheres that inspire and captivate.
          </p>
        </div>
      </div>
      <div className="moreAbout">
        <div className="aboutStory">
          <section>
            <h2>Our Story</h2>
            <p>
              Our journey began with a shared passion for creativity and a
              dedication to excellence. What started as a small endeavor fueled
              by big dreams has blossomed into a trusted name in event
              decoration, serving clients with professionalism, innovation, and
              heart. Every project we take on is an opportunity to tell a
              story—your story—through design, color, and atmosphere.
            </p>
          </section>
        </div>
        {/* <hr /> */}
        <div className="aboutApart">
          <h2>What Sets Us Apart</h2>
          <div className="apartDetails">
            <div>
              <p>Expertise Across Events:</p>
              <span>
                With a portfolio spanning weddings, corporate functions,
                birthdays, anniversaries, and themed parties, we bring versatile
                skills to every project.
              </span>
            </div>
            <div>
              <p>Attention to Detail:</p>
              <span>
                Our meticulous approach ensures every element, from table
                settings to floral arrangements, aligns seamlessly with your
                vision.
              </span>
            </div>
            <div>
              <p>Client-Centric Philosophy:</p>
              <span>
                We believe in collaboration. Your ideas fuel our creativity, and
                together, we craft unforgettable experiences.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutChoose">
        <div className="aboutChooseMore">
          <div>
            <h2>Why Choose Us?</h2>
            <div className="moreChoose">
              <section>
                <i class="fa-solid fa-street-view chooseUsIcon"></i>
                <h4>Proven Track Record:</h4>
                <p>Over 6 years of delivering exceptional event décor</p> .
              </section>
              <section>
                <i class="fa-solid fa-list-check chooseUsIcon"></i>
                <h4>Tailored Solutions:</h4>
                <p>
                  Every detail is customized to match your preferences and
                  theme.
                </p>
              </section>
              <section>
                <i class="fa-solid fa-wand-magic-sparkles chooseUsIcon"></i>
                <h4>Passion for Perfection:</h4>
                <p>
                  We treat every event as if it’s our own, ensuring flawless
                  execution.
                </p>
              </section>
            </div>
          </div>
          <div className="chooseMagic">
            <section>
              <h3>Let’s Make Magic Together</h3>
              <p>
                Your event deserves to be unforgettable, and we’re here to make
                that happen. Whether you’re dreaming of a grand celebration or
                an intimate gathering, More-Links Event Deco is your partner in
                bringing your vision to life.
              </p>
              <p>
                Let’s create something extraordinary—together. Contact us today
                to start planning your dream event!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
