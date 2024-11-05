import React from "react";
import { LocationOutline } from "react-ionicons";
import { CallOutline } from "react-ionicons";
import { MailOutline } from "react-ionicons";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo-light.png" alt="Homeverse logo" />
            </a>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
                  <LocationOutline color={"#ffffff"} />
                  <address>Dehradun, Rispna, Uttrakhand</address>
                </a>
              </li>
              <li>
                <a href="tel:+0123456789" className="contact-link">
                  <CallOutline color={"#fdfcfc"} />
                  <span>+0123-456789</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
                  <MailOutline color={"#fdfcfc"} />
                  <span>contact@MayankSingh.com</span>
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <FaSquareTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Locations Map
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Wish List
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  My account
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Promotional Offers
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Customer Care</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  My account
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Wish List
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="#">codewithMayank</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
