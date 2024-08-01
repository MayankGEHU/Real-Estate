import React from 'react';
import '../Interface/style.css';
import { MailOutline, LocationOutline, SearchOutline, PersonOutline, CartOutline, MenuOutline, CloseOutline } from 'react-ionicons';
import { Link } from 'react-router-dom'; 
// import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:minku6195@gmail.com" className="header-top-link">
                <MailOutline color={'#ff5a3d'} />
                <span>info@mayank.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <LocationOutline color={'#ff5a3d'} />
                <address>Dehradun, Rispna, Uttrakhand</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-facebook" /> */}
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-twitter" /> */}
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-instagram" /> */}
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <button className="header-top-btn">Add Listing</button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          {/* <a href="#" className="logo">
            <img src={logo} alt="Homeverse logo" />
          </a> */}
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              {/* <a href="#" className="logo">
                <img src={logo} alt="Homeverse logo" />
              </a> */}
              <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                <CloseOutline color={'#ff5a3d'} />
              </button>
            </div>
            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                <Link to="/interface" className="navbar-link" data-nav-link>
                  Home
                  </Link>
                </li>
                <li>
                  <Link to="/interface" className="navbar-link" data-nav-link>
                  About
                  </Link>
                </li>
                <li>
                  <Link to="/interface" className="navbar-link" data-nav-link>
                  Service
                  </Link>
                </li>
                <li>
                  <Link to="/interface" className="navbar-link" data-nav-link>
                  Property
                  </Link>
                </li>
                <li>
                  <Link to="/interface" className="navbar-link" data-nav-link>
                  Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="navbar-link" data-nav-link>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <SearchOutline color={'#ff5a3d'} />
              <span>Search</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Profile">
              <PersonOutline color={'#ff5a3d'} />
              <span>Profile</span>
            </button>
          <button className="header-bottom-actions-btn" aria-label="Cart">
             <Link to={'/Cart'}> <CartOutline color={'#ff5a3d'} /></Link>
              <span>Cart</span>
            </button>
            <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
              <MenuOutline color={'#ff5a3d'} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
