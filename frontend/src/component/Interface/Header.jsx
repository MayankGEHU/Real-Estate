import React from 'react';
import '../Interface/style.css'
import { MailOutline } from 'react-ionicons'
import { LocationOutline } from 'react-ionicons'
import { SearchOutline } from 'react-ionicons'
import { PersonOutline } from 'react-ionicons'
import { CartOutline } from 'react-ionicons'
import { MenuOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'
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
              <MailOutline
               color={'#ff5a3d'} 
                />
                <span>info@mayank.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <LocationOutline
                  color={'#ff5a3d'} 
                />
                <address>Dehradun, Rispna, Uttrakhand</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-facebook" /> */}
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-twitter" /> */}
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-instagram" /> */}
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  {/* <IonIcon name="logo-pinterest" /> */}
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
                <CloseOutline
                color={'#ff5a3d'} 
                />
              </button>
            </div>
            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Service
                  </a>
                </li>
                <li>
                  <a href="#property" className="navbar-link" data-nav-link>
                    Property
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#ContactUs" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <SearchOutline
                color={'#ff5a3d'} 
              />
              <span>Search</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Profile">
              <PersonOutline
               color={'#ff5a3d'} 
               />
              <span>Profile</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Cart">
              <CartOutline
                color={'#ff5a3d'} 
              />
              <span>Cart</span>
            </button>
            <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
              <MenuOutline
              color={'#ff5a3d'} 
              />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
