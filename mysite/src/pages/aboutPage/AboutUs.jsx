import React from 'react'
import './about.css'
import ScrollToTop from '../../components/ScrollToTop'
import { useNavigate } from 'react-router-dom'
import pica from '../../assets/images/pica.png'
import picb from '../../assets/images/picb.png'
import picc from '../../assets/images/picc.png'
import picd from '../../assets/images/picd1.png'
const teamFacebook = <i className='fa-brands fa-facebook'></i>
const team = [
  {
    id: 1,
    title: 'CEO More-Links Concept',
    name: ' Engr. David Aniede',
    image: pica,
    media: teamFacebook,
  },
  {
    id: 2,
    title: 'Manager',
    name: 'Thankgod Ekene',
    image: picd,
    media: '08140960034',
  },
  {
    id: 3,
    title: 'Project Coordinator',
    name: 'Tochukwu Ngene',
    image: picb,
    media: teamFacebook,
  },
  {
    id: 4,
    title: 'Lead Decorator',
    name: 'Michael Abuchi',
    image: picc,
    media: teamFacebook,
  },
]
const teamMembers = team.filter((person) => person.id != 1)

export default function AboutUs() {
  const navigate = useNavigate()

  return (
    <div className='aboutContainer'>
      <ScrollToTop />

      <div className='aboutFront'>
        <div className='aboutOverlay'></div>
        <div className='aboutMain'>
          <div onClick={() => navigate(-1)}>
            <i className='fa-solid fa-arrow-left fa-beat-fade iconStyle'></i>
          </div>
          <h2>About Us</h2>
          <p>
            At More-Links Event Deco, we transform ordinary spaces into breathtaking experiences.
            With over 6 years of experience in the event decoration industry, our team has mastered
            the art of curating memorable events tailored to your unique vision. From elegant
            weddings and corporate galas to intimate celebrations, we pride ourselves on creating
            atmospheres that inspire and captivate. <br />
            Call us now <a href='tel:0814 096 0034'>0814 096 0034</a>
          </p>
        </div>
      </div>
      <div className='moreAbout'>
        <h1>
          <b>Meet the team</b>
        </h1>
        <div className='aboutStory'>
          <section>
            <h2>Our Story</h2>
            <p className='ourstory'>
              Our journey began with a shared passion for creativity and a dedication to excellence.
              What started as a small endeavor fueled by big dreams has blossomed into a trusted
              name in event decoration, serving clients with professionalism, innovation, and heart.
              Every project we take on is an opportunity to tell a story—your story—through design,
              color, and atmosphere.
            </p>
          </section>
          <div className='imageSection'>
            <img src={pica} alt='' className='aboutPic' />
            <p>
              <b>{team[0].title}</b>
              {team[0].name}
              <br />
              {team[0].media}
            </p>
          </div>
        </div>
        <div className='teamMembers'>
          {teamMembers.map((member, idx) => (
            <div key={idx} className='imageSection teamMem'>
              <img src={member.image} alt='' className='aboutPic teampic' />
              <p>
                <br /> <b>{member.title}</b>
                {member.name}
                <br /> {member.media}
              </p>
            </div>
          ))}
        </div>
        {/* <hr /> */}
        <div className='aboutApart'>
          <h2>What Sets Us Apart</h2>
          <div className='apartDetails'>
            <div>
              <p>Expertise Across Events:</p>
              <span>
                With a portfolio spanning weddings, corporate functions, birthdays, anniversaries,
                and themed parties, we bring versatile skills to every project.
              </span>
            </div>
            <div>
              <p>Attention to Detail:</p>
              <span>
                Our meticulous approach ensures every element, from table settings to floral
                arrangements, aligns seamlessly with your vision.
              </span>
            </div>
            <div>
              <p>Client-Centric Philosophy:</p>
              <span>
                We believe in collaboration. Your ideas fuel our creativity, and together, we craft
                unforgettable experiences.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutChoose'>
        <div className='aboutChooseMore'>
          <div>
            <h2>Why Choose Us?</h2>
            <div className='moreChoose'>
              <section>
                <i className='fa-solid fa-street-view chooseUsIcon'></i>
                <h4>Proven Track Record</h4>
                <p>Over 6 years of delivering exceptional event décor</p> .
              </section>
              <section>
                <i className='fa-solid fa-list-check chooseUsIcon'></i>
                <h4>Tailored Solutions</h4>
                <p>Every detail is customized to match your preferences and theme.</p>
              </section>
              <section>
                <i className='fa-solid fa-wand-magic-sparkles chooseUsIcon'></i>
                <h4>Passion for Perfection</h4>
                <p>We treat every event as if it’s our own, ensuring flawless execution.</p>
              </section>
            </div>
          </div>
          hr
          <div className='chooseMagic'>
            <section>
              <h3>Let’s Make Magic Together</h3>
              <p>
                Your event deserves to be unforgettable, and we’re here to make that happen. Whether
                you’re dreaming of a grand celebration or an intimate gathering, More-Links Event
                Deco is your partner in bringing your vision to life.
              </p>
              <p>
                Let’s create something extraordinary—together. Contact us today to start planning
                your dream event!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
