import React from 'react'
import './About.css'

const values = [
  {
    title: 'Curated for everyday life',
    text: 'We bring together essentials and statement pieces that look good, feel good, and work hard across real routines.'
  },
  {
    title: 'Thoughtful quality',
    text: 'Every product is chosen for materials, comfort, and enduring appeal so your wardrobe feels effortless and elevated.'
  },
  {
    title: 'Made to last',
    text: 'We focus on timeless design and quality construction so your favorite pieces stay in rotation for years.'
  }
]

const stats = [
  { value: '12k+', label: 'Happy customers' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '48h', label: 'Fast dispatch' },
  { value: '100%', label: 'Curated picks' }
]

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">Our story</p>
          <h1>Thoughtful essentials for modern living.</h1>
          <p>
            Shop Cart began with a simple idea: everyday shopping should feel beautiful, easy,
            and personal. We design and curate pieces that blend comfort, confidence, and timeless style.
          </p>
          <div className="about-hero__actions">
            <button type="button">Shop collection</button>
            <button type="button" className="about-hero__secondary">Meet the team</button>
          </div>
        </div>

        <div className="about-hero__visual" aria-label="Storefront lifestyle image">
          <div className="about-badge about-badge--top">Since 2024</div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
            alt="Shoppers browsing fashionable clothing"
          />
          <div className="about-badge about-badge--bottom">
            <span>Trusted by</span>
            <strong>12,000+</strong>
          </div>
        </div>
      </section>

      <section className="about-stats">
        {stats.map((stat) => (
          <div className="about-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="about-values">
        <div className="about-values__header">
          <p className="about-values__eyebrow">Why we exist</p>
          <h2>Built around what matters most.</h2>
        </div>

        <div className="about-values__grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <span className="value-card__icon">•</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Happy customers enjoying shopping"
          />
        </div>

        <div className="about-story__content">
          <p className="about-story__eyebrow">Our promise</p>
          <h2>Designed to make everyday shopping feel special.</h2>
          <p>
            We believe style should be accessible, practical, and expressive. That’s why we source
            pieces that are easy to wear, easy to love, and built to fit into real life—without compromise.
          </p>
          <ul>
            <li>Premium quality without unnecessary complexity</li>
            <li>Comfort-first designs with lasting appeal</li>
            <li>A friendly, customer-centered shopping experience</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About
