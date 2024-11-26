import React from "react";
import { Link } from "react-router-dom";

const ctaContent = {
  title: "Looking for a dream home?",
  text: "We can help you realize your dream of a new home",
  button: {
    text: "Explore Properties",
    link: "/buy-a-home",
  },
};

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">{ctaContent.title}</h2>
            <p className="card-text">{ctaContent.text}</p>
          </div>
          <Link to={ctaContent.button.link}>
            <button className="btn cta-btn">
              <span>{ctaContent.button.text}</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
