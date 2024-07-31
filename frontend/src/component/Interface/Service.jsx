import React from 'react';
import '../Interface/style.css'
import img1 from '../../assets/service-1.png'
import img2 from '../../assets/service-2.png'
import img3 from '../../assets/service-3.png'
import { ArrowForwardOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'; 

const ServiceSection = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>
        <h2 className="h2 section-title">Our Main Focus</h2>
        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src= {img1} alt="Service icon" />
              </div>
              <h3 className="h3 card-title">
                <Link to="/buy-a-home">Buy a Home</Link>
              </h3>
              <p className="card-text">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find A Home</span>
                {/* <IonIcon name="arrow-forward-outline" /> */}
                {/* <ArrowForwardOutline
                 color={'#a4abad'} 
                /> */}
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src= {img2} alt="Service icon" />
              </div>
              <h3 className="h3 card-title">
                <Link to="/rent-a-home">Rent a home</Link>
              </h3>
              <p className="card-text">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find A Home</span>
                {/* <IonIcon name="arrow-forward-outline" /> */}
                {/* <ArrowForwardOutline
                 color={'#a4abad'} 
                /> */}
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src= {img3} alt="Service icon" />
              </div>
              <h3 className="h3 card-title">
                <Link to="/sell-a-home">Sell a home</Link>
              </h3>
              <p className="card-text">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find A Home</span>
                {/* <IonIcon name="arrow-forward-outline" /> */}
                {/* <ArrowForwardOutline
                 color={'#a4abad'} 
                /> */}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
