import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../component/ProductCard'
import './Product.css'

const Product = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))]
    return ['all', ...uniqueCategories]
  }, [products])

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products
    return products.filter((product) => product.category === selectedCategory)
  }, [products, selectedCategory])

  return (
    <main className="products-page">
      <header className="products-page__header">
        <div className="products-hero">
          <div className="products-hero__content">
            <p className="products-page__eyebrow">Shop all products</p>
            <h1 className="products-page__title">Curated essentials for every day.</h1>
            <p className="products-page__subtitle">
              Discover refined pieces for everyday life, from polished basics to standout favorites.
            </p>
          </div>

          <div className="products-hero__stats" aria-label="Store highlights">
            <div>
              <strong>1200+</strong>
              <span>Styles</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Rated</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>Dispatch</span>
            </div>
          </div>
        </div>
      </header>

      {products.length > 0 ? (
        <>
          <div className="products-toolbar">
            <p className="products-toolbar__count">{filteredProducts.length} products</p>
            <span className="products-toolbar__rule" aria-hidden="true" />
            <p className="products-toolbar__label">Featured collection</p>
          </div>

          <div className="category-filters" aria-label="Product categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-filter ${selectedCategory === category ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>

          <section className="products-grid" aria-label="Product collection">
            {filteredProducts.map((product) => (
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