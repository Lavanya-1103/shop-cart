import React from 'react'
import { useState } from 'react'
import './ProductCard.css'

const clothingCategories = ["men's clothing", "women's clothing"]

const getSizeOptions = (category) => {
  if (clothingCategories.includes(category)) {
    return ["XS", "S", "M", "L", "XL"]
  }

  return ["One size"]
}

const ProductCard = ({title, price, image, category}) => {
  const sizeOptions = getSizeOptions(category)
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0])

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={image}
          alt={title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__size">
          <label htmlFor={`size-${title}`}>Size</label>
          <select
            id={`size-${title}`}
            value={selectedSize}
            onChange={(event) => setSelectedSize(event.target.value)}
            disabled={sizeOptions.length === 1}
          >
            {sizeOptions.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <p className="product-card__price">Rs. {price}</p>
      </div>
    </article>
  )
}

export default ProductCard
