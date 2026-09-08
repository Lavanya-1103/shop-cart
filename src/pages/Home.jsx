import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    icon: '✓',
    title: 'Curated picks',
    text: 'Thoughtfully selected items built for everyday rituals and elevated moments.'
  },
  {
    icon: '⚡',
    title: 'Fast delivery',
    text: 'Quick shipping and easy tracking for your essentials, no matter the season.'
  },
  {
    icon: '♻',
    title: 'Sustainable',
    text: 'Responsible materials and future-minded choices that feel good to wear.'
  },
  {
    icon: '★',
    title: 'Loved by shoppers',
    text: 'A community favorite with premium quality, simple style, and lasting value.'
  }
]

const categories = [
  {
    title: 'Women',
    text: 'Soft layers, statement essentials, and effortless silhouettes for every day.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Men',
    text: 'Clean essentials, relaxed staples, and elevated basics that keep up with you.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Accessories',
    text: 'Small details that complete the look with texture, utility, and personality.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80'
  }
]

const products = [
  {
    title: 'Classic Canvas Tote',
    price: 1490,
    badge: 'New'
  },
  {
    title: 'Luna Knit Sweater',
    price: 2390,
    badge: 'Best seller'
  },
  {
    title: 'Urban Utility Jacket',
    price: 3200,
    badge: 'Limited'
  },
  {
    title: 'Everyday Leather Sneaker',
    price: 2800,
    badge: 'Trending'
  }
]

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">Fresh arrivals</span>
          <h1 className="home-hero__copy">Style your everyday life.</h1>
          <p className="home-hero__text">
            Discover elevated essentials for work, weekends, and everything in between.
            Thoughtful design, premium fabrics, and pieces that move with you.
          </p>

          <div className="home-hero__cta">
            <Link to="/product">Shop now</Link>
            <button type="button">Explore looks</button>
          </div>

          <div className="home-hero__meta">
            <span><strong>12k+</strong> happy shoppers</span>
            <span><strong>4.9/5</strong> average rating</span>
            <span><strong>48h</strong> dispatch</span>
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="mini-card">
            <span className="mini-card__value">30%</span>
            <span className="mini-card__label">Spring sale</span>
          </div>

          <div className="home-hero__art">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
              alt="Featured model wearing casual fashion"
            />
          </div>

          <div className="hero-badge">
            <span className="hero-badge__label">Top rated</span>
            <span className="hero-badge__value">4.9</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-heading__tag">Why choose us</span>
            <h2 className="section-heading__title">Built for real routines.</h2>
          </div>
          <p className="section-heading__subtitle">
            Clean silhouettes, durable materials, and modern styling without the noise.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-item" key={feature.title}>
              <div className="feature-item__icon" aria-hidden="true">{feature.icon}</div>
              <h3 className="feature-item__title">{feature.title}</h3>
              <p className="feature-item__text">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-heading__tag">Shop by style</span>
            <h2 className="section-heading__title">Browse the collection.</h2>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link className="category-card" to="/product" key={category.title}>
              <img className="category-card__image" src={category.image} alt={category.title} />
              <h3 className="category-card__title">{category.title}</h3>
              <p className="category-card__text">{category.text}</p>
              <span className="category-card__link">Shop now →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-heading__tag">Featured finds</span>
            <h2 className="section-heading__title">Trending this week.</h2>
          </div>
        </div>

        <div className="featured-grid">
          {products.map((product) => (
            <article className="product-tile" key={product.title}>
              <div className="product-tile__image-wrap">
                <img
                  className="product-tile__image"
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
                  alt={product.title}
                />
              </div>
              <div className="product-tile__meta">
                <span className="stat-pill">{product.badge}</span>
                <span className="product-tile__price">Rs. {product.price}</span>
              </div>
              <h3 className="product-tile__title">{product.title}</h3>
              <button className="product-tile__button" type="button">Add to cart</button>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-card">
        <div>
          <h3>Stay in the loop.</h3>
          <p>Get new arrivals, styling notes, and early access to seasonal offers.</p>
        </div>

        <form className="newsletter-form">
          <label htmlFor="newsletter-email" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
            Email address
          </label>
          <input id="newsletter-email" type="email" placeholder="Enter your email" />
          <button type="submit">Join now</button>
        </form>
      </section>
    </main>
  )
}

export default Home
