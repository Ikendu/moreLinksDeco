import React from 'react'

import './service.css'
import Traditional from './Traditional'
import Reception from './Reception'
import Engagement from './Engagement'
import LiveEvents from './LiveEvents'
import Birthdays from './Birthdays'
import Corporate from './Corporate'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'
import Videos from './Videos'

const services = [
  { id: 1, comp: <Reception />, name: 'Receptions', controls: 'collapseOne1' },
  {
    id: 2,
    comp: <Traditional />,
    name: 'Traditional Wedding Styles',
    controls: 'collapseTwo2',
  },
]

export default function Service() {
  const navigate = useNavigate()
  return (
    <div className='services'>
      <ScrollToTop />
      {/* This is being styled in about-us folder, just few style will come from service folder */}
      <div className='serviceFront'>
        <div className='serviceOverlay'></div>
        <div className='serviceMain'>
          <div className='iconStyle' onClick={() => navigate(-1)}>
            <i className='fa-solid fa-arrow-left fa-beat-fade '></i>
          </div>
          <h2 className='serviceHead'>Our Services</h2>
          <div className='serviceMainPara'>
            <p>Wedding Décor</p>
            <p>Corporate Events</p>
            <p>Birthday & Private Parties</p>
            <p>Themed Events</p>
            <p>Other Events</p>
            <div className='frontDetails'>
              Creative concepts brought to life with precision and flair. Let us handle the details
              while you enjoy the celebration!
            </div>
            <br />
          </div>
          {/* <a href="#more_on_ervices">
            <button className="serviceButton">See More</button>
          </a> */}
        </div>
      </div>
      <Link
        to={
          'https://wa.me/2348061632276?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you.'
        }
        target='_blank'
      >
        <i className='fa-brands fa-whatsapp whatsapp'></i>
      </Link>

      <div id='more_on_ervices '>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                onClick={() => window.scrollTo(0, 700)}
              >
                Receptions
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' id='items'>
                <Reception />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
                onClick={() => window.scrollTo(0, 700)}
              >
                Traditional Wedding Styles
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <Traditional />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
                onClick={() => window.scrollTo(0, 700)}
              >
                Celebration of Lives
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <LiveEvents />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapsefour'
                aria-expanded='false'
                aria-controls='collapsefour'
                onClick={() => window.scrollTo(0, 700)}
              >
                Engagements Styles
              </button>
            </h2>
            <div
              id='collapsefour'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <Engagement />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse5'
                aria-expanded='false'
                aria-controls='collapse5'
                onClick={() => window.scrollTo(0, 700)}
              >
                Birthday Celebrations
              </button>
            </h2>
            <div
              id='collapse5'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <Birthdays />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse6'
                aria-expanded='false'
                aria-controls='collapse6'
                onClick={() => window.scrollTo(0, 700)}
              >
                Corporate Events
              </button>
            </h2>
            <div
              id='collapse6'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <Corporate />
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse7'
                aria-expanded='false'
                aria-controls='collapse7'
                onClick={() => window.scrollTo(0, 700)}
              >
                Live Videos
              </button>
            </h2>
            <div
              id='collapse7'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <Videos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* {services.map((service, idx) => (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
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
                class={
                  "accordion-collapse collapse "
                }
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">{service.comp}</div>
              </div>
            </div>
          ))} */
}
