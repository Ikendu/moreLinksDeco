import React from 'react'
import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image125 from '../assets/images/image12.5.jpg'
import image4 from '../assets/images/image4.jpeg'
import image5 from '../assets/images/image5.jpeg'
import image13 from '../assets/images/image13.jpg'
import logoImage from '../assets/images/logoImage.png'
import Getter from '../assets/images/getter'
import { Link, useNavigate } from 'react-router-dom'

export default function ChooseUs() {
  const navigate = useNavigate()
  return (
    <div className='fullPage'>
      <div className='chooseUs'>
        <h1>Decorate your dreams and live them today</h1>
        <div className='moreParagraph'>
          <p>
            Your event isn’t just a gathering—it’s a story waiting to be told. From intimate
            celebrations to grand occasions, we bring your dreams to life with stunning event
            decoration, tailored to your style and theme. Reach out to our team now on{' '}
            <Link
              to={
                'https://wa.me/2348140960034?text=Hello%20there!%20I%20want%20to%20discuss%20an%20upcoming%20event%20with%20you.'
              }
              target='_blank'
            >
              whatsapp
            </Link>{' '}
            or call us at <a href='tel:08140960034'>08140960034</a>
          </p>
        </div>
        <div className='imageDetails'>
          <div className='pageContent'>
            <h3>Custom Creations, Perfectly Your likeness</h3>
            <p>
              No two events are alike, and neither are our designs. Whether you dream of a chic
              minimalist wedding or a vibrant corporate gala, our team works closely with you to
              craft unique designs that speak to your personality and purpose.
            </p>
          </div>

          <img
            src={image1}
            alt=''
            className='serviceIage'
            onClick={() => {
              navigate('/services#items')
            }}
          />
        </div>

        <div className='imageDetails2'>
          <div className='pageContent'>
            <h3>Every Detail gets the required attention</h3>
            <p>
              From the smallest centerpiece to the grandest backdrops, every detail matters. We
              obsess over every element to ensure your event looks flawless, creating a seamless
              ambiance that wows your guests.
            </p>
          </div>
          <img
            src={image2}
            alt=''
            className='serviceIage'
            onClick={() => {
              navigate('/services#items')
            }}
          />
        </div>
        <div className='imageDetails'>
          <div className='pageContent'>
            <h3>Innovative Design & Concepts</h3>
            <p>
              Our creative team stays ahead of trends, blending modern aesthetics with timeless
              elegance. We don’t just decorate; we transform ordinary venues into extraordinary
              settings.
            </p>
          </div>
          <img
            src={image125}
            alt=''
            className='serviceIage'
            onClick={() => {
              navigate('/services#items')
            }}
          />
        </div>
        <div className='imageDetails2'>
          <div className='pageContent'>
            <h3>Unmatched Creativity</h3>
            <p>
              Our creative team stays ahead of trends, blending modern aesthetics with timeless
              elegance. We don’t just decorate; we transform ordinary venues into extraordinary
              settings.
            </p>
          </div>

          <img
            src={image4}
            alt=''
            className='serviceIage'
            onClick={() => {
              navigate('/services#items')
            }}
          />
        </div>
        <div className='imageDetails'>
          <div className='pageContent'>
            <h3>Tailored to Your Vision</h3>
            <p>
              Whether you’re dreaming of a lavish wedding, a chic corporate event, or an intimate
              celebration, we’ll bring your unique vision to life.
            </p>
          </div>
          <img
            src={image5}
            alt=''
            className='serviceIage'
            onClick={() => {
              navigate('/services#items')
            }}
          />
        </div>
        <div className='imageDetails2'>
          <div className='pageContent'>
            <h3>Every Moment Deserves to Shine</h3>
            <p>
              Your events are more than just dates on a calendar—they’re milestones, memories, and
              moments that deserve to be celebrated in style. we bring your dreams to life with
              stunning event décor tailored to your style and theme.
            </p>
          </div>
          <img
            src={image13}
            alt=''
            className='serviceIage'
            onClick={() => {
              navigate('/services#items')
            }}
          />
        </div>
      </div>
    </div>
  )
}
