import React from "react";
import "../Interface/style.css";
import {
  MailOutline,
  LocationOutline,
  SearchOutline,
  CartOutline,
  MenuOutline,
  CloseOutline,
  PersonCircleOutline,
  LogInOutline,
} from "react-ionicons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginSignupClick = () => {
    navigate("/auth");
  };

  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:minku6195@gmail.com" className="header-top-link">
                <MailOutline color="#ff5a3d" />
                <span>info@mayank.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <LocationOutline color="#ff5a3d" />
                <address>Rispna, Dehradun, Uttarakhand</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
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
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <button
                className="nav-close-btn"
                data-nav-close-btn
                aria-label="Close Menu"
              >
                <CloseOutline color="#ff5a3d" />
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
            <Link to="/Profile" className="header-bottom-actions-btn" aria-label="User">
              <PersonCircleOutline color="#ff5a3d" />
              <span>Profile</span>
            </Link>
            <button className="header-bottom-actions-btn" aria-label="Search">
              <Link to="/Profile">
                <SearchOutline color="#ff5a3d" />
              </Link>
              <span>Search</span>
            </button>
            <button
              className="header-bottom-actions-btn"
              aria-label="Login/Signup"
              onClick={handleLoginSignupClick}
            >
              <LogInOutline color="#ff5a3d" />
              <span>Login / Signup</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Cart">
              <Link to="/Cart">
                <CartOutline color="#ff5a3d" />
              </Link>
              <span>Cart</span>
            </button>
            <button
              className="header-bottom-actions-btn"
              data-nav-open-btn
              aria-label="Open Menu"
            >
              <MenuOutline color="#ff5a3d" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
