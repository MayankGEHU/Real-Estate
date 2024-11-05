import React from "react";
import { RemoveCircleOutline } from "react-ionicons";
import { SquareOutline } from "react-ionicons";

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <section className="cart" id="cart">
      <div className="container">
        <p className="section-subtitle">Your Cart</p>
        <h2 className="h2 section-title">Property Cart</h2>
        <ul className="cart-list has-scrollbar">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <li key={index}>
                <div className="cart-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-100"
                      />
                    </a>
                    <div className={`card-badge ${item.badgeClass}`}>
                      {item.badge}
                    </div>
                    <div className="banner-actions">
                      <button className="banner-actions-btn">
                        <address>{item.location}</address>
                      </button>
                      <button className="banner-actions-btn">
                        <span>{item.cameraCount}</span>
                      </button>
                      <button className="banner-actions-btn">
                        <span>{item.videoCount}</span>
                      </button>
                    </div>
                  </figure>
                  <div className="card-content">
                    <div className="card-price">
                      <strong>{item.price}</strong>
                      {item.pricePeriod}
                    </div>
                    <h3 className="h3 card-title">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p className="card-text">{item.description}</p>
                    <ul className="card-list">
                      <li className="card-item">
                        <strong>{item.bedrooms}</strong>
                        <span>Bedrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>{item.bathrooms}</strong>
                        <span>Bathrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>{item.squareFt}</strong>
                        <SquareOutline color={"#5d737e"} />
                        <span>Square Ft</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src={item.authorImg}
                          alt={item.authorName}
                          className="w-100"
                        />
                      </figure>
                      <div>
                        <p className="author-name">
                          <a href="#">{item.authorName}</a>
                        </p>
                        <p className="author-title">{item.authorTitle}</p>
                      </div>
                    </div>
                    <div className="card-footer-actions">
                      <button
                        className="card-footer-actions-btn"
                        onClick={() => onRemoveFromCart(index)}
                      >
                        <RemoveCircleOutline color={"#5d737e"} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Cart;
