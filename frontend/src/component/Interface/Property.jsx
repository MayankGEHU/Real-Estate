import React from "react";
import prop1 from "../../assets/property-1.jpg";
import prop2 from "../../assets/property-2.jpg";
import prop3 from "../../assets/property-3.jpg";
import prop4 from "../../assets/property-4.png";
import authImag from "../../assets/author.jpg";
import {
  LocationOutline,
  CameraOutline,
  FilmOutline,
  BedOutline,
  ManOutline,
  SquareOutline,
  ResizeOutline,
  HeartOutline,
  AddCircleOutline,
  CartOutline,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";

const PropertySection = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const properties = [
    {
      imgSrc: prop1,
      badge: "For Rent",
      badgeClass: "green",
      location: "Belmont Gardens, Chicago",
      cameraCount: 4,
      videoCount: 2,
      price: "$34,900",
      pricePeriod: "/Month",
      title: "New Apartment Nice View",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      bedrooms: 3,
      bathrooms: 2,
      squareFt: 3450,
      authorImg: authImag,
      authorName: "Mayank Singh",
      authorTitle: "Estate Agents",
    },
    {
      imgSrc: prop2,
      badge: "For Sale",
      badgeClass: "orange",
      location: "Belmont Gardens, Chicago",
      cameraCount: 4,
      videoCount: 2,
      price: "$34,900",
      pricePeriod: "/Month",
      title: "Modern Apartments",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      bedrooms: 3,
      bathrooms: 2,
      squareFt: 3450,
      authorImg: authImag,
      authorName: "Mayank Singh",
      authorTitle: "Estate Agents",
    },
    {
      imgSrc: prop3,
      badge: "For Rent",
      badgeClass: "green",
      location: "Belmont Gardens, Chicago",
      cameraCount: 4,
      videoCount: 2,
      price: "$34,900",
      pricePeriod: "/Month",
      title: "Comfortable Apartment",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      bedrooms: 3,
      bathrooms: 2,
      squareFt: 3450,
      authorImg: authImag,
      authorName: "Mayank Singh",
      authorTitle: "Estate Agents",
    },
    {
      imgSrc: prop4,
      badge: "For Rent",
      badgeClass: "green",
      location: "Belmont Gardens, Chicago",
      cameraCount: 4,
      videoCount: 2,
      price: "$34,900",
      pricePeriod: "/Month",
      title: "Luxury villa in Rego Park",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      bedrooms: 3,
      bathrooms: 2,
      squareFt: 3450,
      authorImg: authImag,
      authorName: "Mayank Singh",
      authorTitle: "Estate Agents",
    },
  ];

  const handleAddToCart = (property) => {
    onAddToCart(property);
    navigate("/Cart");
  };

  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>
        <h2 className="h2 section-title">Featured Listings</h2>
        <ul className="property-list has-scrollbar">
          {properties.map((property, index) => (
            <li key={index}>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={property.imgSrc}
                      alt={property.title}
                      className="w-100"
                    />
                  </a>
                  <div className={`card-badge ${property.badgeClass}`}>
                    {property.badge}
                  </div>
                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <LocationOutline color={"#ffffff"} />
                      <address>{property.location}</address>
                    </button>
                    <button className="banner-actions-btn">
                      <CameraOutline color={"#ffffff"} />
                      <span>{property.cameraCount}</span>
                    </button>
                    <button className="banner-actions-btn">
                      <FilmOutline color={"#ffffff"} />
                      <span>{property.videoCount}</span>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="card-price">
                    <strong>{property.price}</strong>
                    {property.pricePeriod}
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">{property.title}</a>
                  </h3>
                  <p className="card-text">{property.description}</p>
                  <ul className="card-list">
                    <li className="card-item">
                      <strong>{property.bedrooms}</strong>
                      <BedOutline color={"#5d737e"} />
                      <span>Bedrooms</span>
                    </li>
                    <li className="card-item">
                      <strong>{property.bathrooms}</strong>
                      <ManOutline color={"#5d737e"} />
                      <span>Bathrooms</span>
                    </li>
                    <li className="card-item">
                      <strong>{property.squareFt}</strong>
                      <SquareOutline color={"#5d737e"} />
                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={property.authorImg}
                        alt={property.authorName}
                        className="w-100"
                      />
                    </figure>
                    <div>
                      <p className="author-name">
                        <a href="#">{property.authorName}</a>
                      </p>
                      <p className="author-title">{property.authorTitle}</p>
                    </div>
                  </div>
                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <ResizeOutline color={"#5d737e"} />
                    </button>
                    <button className="card-footer-actions-btn">
                      <HeartOutline color={"#5d737e"} />
                    </button>
                    <button
                      className="card-footer-actions-btn"
                      onClick={() => handleAddToCart(property)}
                    >
                      <AddCircleOutline color={"#5d737e"} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PropertySection;
