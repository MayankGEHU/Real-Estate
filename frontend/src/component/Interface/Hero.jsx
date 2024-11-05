import React from "react";
import { Tilt } from "react-tilt";
import "../Interface/style.css";
import hero from "../../assets/hero-banner.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <span>Real Estate Site by Mayank Singh.</span>
          </p>

          <h2 className="h1 hero-title">Find Your Dream House With Me</h2>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <Link to="/enquiry">
            <button className="btn">Make An Enquiry</button>
          </Link>
        </div>

        <Tilt
          className="hero-banner-tilt"
          options={{
            max: 25,
            scale: 1.1,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
          }}
        >
          <figure className="hero-banner">
            <img src={hero} alt="Modern house model" className="w-100" />
          </figure>
        </Tilt>
      </div>
    </section>
  );
};

export default HeroSection;
