import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const cartItems = [
  {
    id: 1,
    title: 'Luna Knit Sweater',
    brand: 'Mira Studio',
    color: 'Sand',
    size: 'M',
    price: 2390,
    originalPrice: 2990,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'Urban Utility Jacket',
    brand: 'Northline',
    color: 'Forest',
    size: 'L',
    price: 3200,
    originalPrice: 3900,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    title: 'Everyday Leather Sneaker',
    brand: 'Aster',
    color: 'Brown',
    size: '7',
    price: 2800,
    originalPrice: 3300,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  }
]

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 250
  const discount = 420
  const total = subtotal + shipping - discount

  return (
    <main className="cart-page">
      <header className="cart-header">
        <div>
          <span className="cart-header__eyebrow">Your bag</span>
          <h1 className="cart-header__title">Shopping cart</h1>
        </div>
        <Link className="cart-header__link" to="/product">Continue shopping →</Link>
      </header>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item__image-wrap">
                <img className="cart-item__image" src={item.image} alt={item.title} />
              </div>

              <div className="cart-item__content">
                <div className="cart-item__top">
                  <div>
                    <h2 className="cart-item__title">{item.title}</h2>
                    <div className="cart-item__brand">{item.brand}</div>
                  </div>
                </div>

                <div className="cart-item__meta">
                  <span>Color: {item.color}</span>
                  <span>Size: {item.size}</span>
                  <span>Qty: {item.quantity}</span>
                </div>

                <div className="cart-item__actions">
                  <div className="quantity-control" aria-label={`Quantity for ${item.title}`}>
                    <button type="button" aria-label="Decrease quantity">−</button>
                    <span>{item.quantity}</span>
                    <button type="button" aria-label="Increase quantity">+</button>
                  </div>

                  <button className="cart-item__remove" type="button">Remove</button>
                </div>
              </div>

              <div className="cart-item__price">
                <span className="cart-item__actual">Rs. {item.price}</span>
                <span className="cart-item__original">Rs. {item.originalPrice}</span>
              </div>
            </article>
          ))}
        </section>

        <aside className="summary-card" aria-label="Order summary">
          <h2 className="summary-card__title">Order summary</h2>

          <div className="summary-list">
            <div className="summary-list__row">
              <span>Subtotal</span>
              <strong>Rs. {subtotal}</strong>
            </div>
            <div className="summary-list__row">
              <span>Shipping</span>
              <strong>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</strong>
            </div>
            <div className="summary-list__row">
              <span>Discount</span>
              <strong>-Rs. {discount}</strong>
            </div>
            <div className="summary-list__row summary-list__row--total">
              <span>Total</span>
              <strong>Rs. {total}</strong>
            </div>
          </div>

          <div className="promo-box">
            <label htmlFor="promo-code">Promo code</label>
            <div className="promo-box__field">
              <input id="promo-code" type="text" placeholder="Enter code" />
              <button type="button">Apply</button>
            </div>
          </div>

          <div className="summary-actions">
            <button className="summary-actions__checkout" type="button">Checkout</button>
            <button className="summary-actions__continue" type="button">Pay later</button>
          </div>

          <div className="cart-trust">
            <span>Secure checkout</span>
            <span className="cart-trust__badge">✔ Protected</span>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Cart
