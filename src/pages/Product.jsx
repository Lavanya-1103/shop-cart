import React from 'react'
import ProductCard from '../component/ProductCard'
import { useEffect, useState } from 'react'
import './Product.css'


const Product = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))        
  }, [])
  
  return (
    <main className="products-page">
      <header className="products-page__header">
        <p className="products-page__eyebrow">Shop all products</p>
        <h1 className="products-page__title">Everyday essentials</h1>
        <p className="products-page__subtitle">
          Discover useful, well-loved pieces at prices that make sense.
        </p>
      </header>
      {products.length > 0 ? (
        <>
          <div className="products-toolbar">
            <p className="products-toolbar__count">{products.length} products</p>
            <span className="products-toolbar__rule" aria-hidden="true" />
            <p className="products-toolbar__label">Featured collection</p>
          </div>
          <section className="products-grid" aria-label="Product collection">
            {products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </section>
        </>
      ) : (
        <p className="products-page__status">Loading products...</p>
      )}
    </main>
  )
}

export default Product