import React from 'react'
import './ProductCard.module.css'
import Link from 'next/link.js';

export const ProductCard = () => {
  return (
    <div className="product-grid">
      <div className="product-image">
        <Link href="#" className="image">
          <img
            className="pic-1"
            src="/category/bags.jpg"
            width="100%"
            height="100%"
          />
          <img
            className="pic-2"
            src="/home-banner1.jpg"
            width="100%"
            height="100%"
          />
        </Link>
        <span className="product-sale-label">hot</span>
        <span className="product-discount-label">-33%</span>
        <span className="product-stock-label">Out Of Stock</span>
      </div>
      <div className="product-content">
        <Link href={"/"} className="h6 fw-normal float-start opacity-75 m-0">
          Category
        </Link>
        <i className="fa-solid fa-star float-end fs-6 ">
          <span className="opacity-75 text-sm fw-normal"> 4.7</span>
        </i>
      </div>
      <div className="product-content">
        <Link href={"/"} className="fw-bold h5">
          Men's Blazer
        </Link>
        <div className="price ">
          $20.00
          <span> $30.00</span>
        </div>
        <div className="product-button-group">
          <a className="product-like-icon" href="#">
            <i className="fas fa-heart" title="Wishlist"></i>
          </a>
          <a className="add-to-cart" href="#">
            <i className="fa fa-shopping-bag"></i>ADD TO CART
          </a>
          <a className="product-compare-icon" href="#">
            <i className="fas fa-random" title="Random"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
