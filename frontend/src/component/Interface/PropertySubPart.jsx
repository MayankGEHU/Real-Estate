import React, { useState } from "react";
import "../Interface/PropertySubPart.css"


import product1 from "../../assets/property-1.jpg";
import product2 from "../../assets/property-2.jpg";
import product3 from "../../assets/property-3.jpg";
import product4 from "../../assets/property-4.png";

const PropertySubPart = () => {
  const productImages = [product1, product2, product3, product4];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const productDescriptions = [
    "Beautiful 3-bedroom house with spacious living areas and a garden.",
    "Modern apartment located in the city center with stunning views.",
    "Cozy cottage with a rustic charm, perfect for a weekend getaway.",
    "Luxurious villa with a private pool and garden, ideal for large families."
  ];

  const selectedDescription = productDescriptions[productImages.indexOf(selectedImage)];

  return (
    <div className="product-gallery">
      <div className="gallery-content">
        <div className="main-image">
          <img src={selectedImage} alt="Selected product" />
        </div>
        <div className="description">
          <p>{selectedDescription}</p>
        </div>
      </div>

      <div className="thumbnail-container">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySubPart;
