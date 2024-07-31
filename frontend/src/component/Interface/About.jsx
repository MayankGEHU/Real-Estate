import React from 'react';
import Image1 from '../../assets/about-banner-1.png'
import Image2 from '../../assets/about-banner-2.jpg'
import { HomeOutline } from 'react-ionicons'
import { LeafOutline } from 'react-ionicons'
import { WineOutline } from 'react-ionicons'
import { LockClosedOutline } from 'react-ionicons'

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={Image1}alt="House interior" />
          <img src= {Image2} alt="House interior" className="abs-img" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">The Leading Real Estate Rental Marketplace.</h2>
          <p className="about-text">
            Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage,
            combined with specialist services.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <div className="about-item-icon">
                <HomeOutline
                 color={'#ff5a3d'} 
               />
              </div>
              <p className="about-item-text">Smart Home Design</p>
            </li>
            <li className="about-item">
              <div className="about-item-icon">
                <LeafOutline
                 color={'#ff5a3d'} 
               />

              </div>
              <p className="about-item-text">Beautiful Scene Around</p>
            </li>
            <li className="about-item">
              <div className="about-item-icon">
                <WineOutline
                color={'#ff5a3d'} 
              />
              </div>
              <p className="about-item-text">Exceptional Lifestyle</p>
            </li>
            <li className="about-item">
              <div className="about-item-icon">
                <LockClosedOutline
                color={'#ff5a3d'} 
                />
              </div>
              <p className="about-item-text">Complete 24/7 Security</p>
            </li>
          </ul>

          <p className="callout">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit, accusantium sint."
          </p>

          <a href="#service" className="btn">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
