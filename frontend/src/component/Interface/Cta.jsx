import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">Looking for a dream home?</h2>
            <p className="card-text">
              We can help you realize your dream of a new home
            </p>
          </div>
          <Link to={"/buy-a-home"}>
            {" "}
            <button className="btn cta-btn">
              <span>Explore Properties</span>
              {/* <IonIcon name="arrow-forward-outline" /> */}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
