import React, { useEffect, useState } from 'react'
import axios from 'axios'
import emailjs from '@emailjs/browser'
import './contact.css'
import ScrollToTop from '../../components/ScrollToTop'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('https://moredeco.com.ng/contact.php', formData)
      console.log(response)
      setLoading(false)
      setStatus('Message sent successfully!')
    } catch (error) {
      setStatus('Failed to send message. Try again later.')
    }

    //   emailjs
    //     .send("service_2yry7mf", "template_flz454q", formData, {
    //       publicKey: "iPQWPyYdO6yD4VgQA",
    //     })
    //     .then(
    //       (response) => {
    //         console.log("SUCCESS!", response);
    //         setLoading(false);
    //       },
    //       (err) => {
    //         console.log("FAILED...", err);
    //       }
    //     );
  }

  return (
    <div className='contactUs'>
      <ServiceFacebook />
      <ScrollToTop />
      <div className='contactFront'>
        <div className='contactOverlay'></div>

        <div className='contactMain'>
          <div onClick={() => navigate(-1)}>
            <i className='fa-solid fa-arrow-left fa-beat-fade iconStyle'></i>
          </div>
          <h2 className='contactHead'>Contact Us Today</h2>
          <p>
            At More-Links Deco, we believe every event deserves a touch of magic. Whether you're
            planning a wedding, corporate event, birthday party, or any special occasion, we're here
            to bring your vision to life.
            <hr /> Feel free to reach out through{' '}
            <Link
              to={
                'https://wa.me/2348140960034?text=Hello%20there!%20I%20want%20to%20discuss%20an%20upcoming%20event%20with%20you.'
              }
              target='_blank'
            >
              Whatsapp
            </Link>{' '}
            or call us on <a href='tel:08140960034'>0814 096 0034</a>. We are excited to hear from
            you!
          </p>
        </div>
      </div>

      <div className='contactSection'>
        <div className='contactDetails'>
          <h3>Get in Touch</h3>
          <div className='fullDetails'>
            <p>📞 Phone: 0814 096 0034</p>
            <p>💬 Phone: 0806 163 2276 </p>
            <p>📧 Email: services@moredeco.com</p>
            <p>📍 Location: 30 Adelabor Street Uwani, Enugu, Nigeria</p>
          </div>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <h3>Tell us what is on your mind</h3>
            <div>
              <label htmlFor='name'>Name:</label>
              <input
                required
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your fullname'
              />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                required
                type='email'
                name='email'
                value={formData.email}
                id='email'
                onChange={handleChange}
                placeholder='Active email'
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone Number: </label>
              <input
                required
                type='text'
                name='phone'
                value={formData.phone}
                id='phone'
                onChange={handleChange}
                placeholder='Active phone number'
              />
            </div>
            <div>
              <label htmlFor='message'>Message for us </label>
              <textarea
                required
                name='message'
                id='message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className='btnSend'>
              {loading ? <i className='fa-solid fa-spinner fa-spin-pulse'></i> : 'Submit'}
            </button>
            {status && <p>{status}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

const ServiceFacebook = () => {
  useEffect(() => {
    // Check if fbq is already loaded
    if (window.fbq) return

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

    window.fbq('init', '667314392739713')
    window.fbq('track', 'PageView')
  }, [])

  return (
    <>
      {/* Your service page content here */}

      {/* Noscript fallback for Facebook Pixel */}
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=667314392739713&ev=PageView&noscript=1'
          alt=''
        />
      </noscript>
    </>
  )
}
