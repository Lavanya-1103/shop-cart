import React from 'react'
import './Contact.css'

const contactDetails = [
  {
    label: 'Email us',
    value: 'hello@shopcart.com',
    icon: '✉'
  },
  {
    label: 'Call us',
    value: '+977 980-123-4567',
    icon: '☎'
  },
  {
    label: 'Visit',
    value: '24 Market Street, Kathmandu',
    icon: '⌂'
  },
  {
    label: 'Hours',
    value: 'Mon - Sat, 9:00 AM - 7:00 PM',
    icon: '⏰'
  }
]

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">Let’s talk</p>
          <h1>We’re here to help.</h1>
          <p>
            Whether you need product guidance, styling suggestions, or support with an order,
            our team is ready to help you shop with confidence.
          </p>

          <div className="contact-points">
            {contactDetails.map((item) => (
              <div className="contact-point" key={item.label}>
                <span className="contact-point__icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <span className="contact-point__label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-hero__visual" aria-label="Customer support illustration">
          <div className="contact-card contact-card--floating">
            <span className="contact-card__tag">Live support</span>
            <strong>Response in under 15 min</strong>
          </div>
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-avatar" aria-hidden="true">
            <span>SC</span>
          </div>
        </div>
      </section>

      <section className="contact-panel">
        <div className="contact-panel__header">
          <p className="contact-panel__eyebrow">Send a message</p>
          <h2>Tell us what you need.</h2>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label>
              <span>Full name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" placeholder="How can we help?" />
          </label>

          <label>
            <span>Message</span>
            <textarea rows="6" placeholder="Write your message here..." />
          </label>

          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  )
}

export default Contact
