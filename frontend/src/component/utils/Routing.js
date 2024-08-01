import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthForm from "../auth/Login";
import Header from '../Interface/Header';
import HeroSection from '../Interface/Hero';
import AboutSection from '../Interface/About';
import ServiceSection from '../Interface/Service';
import PropertySection from '../Interface/Property';
import FeaturesSection from '../Interface/Feature';
import BlogSection from '../Interface/Blog';
import CtaSection from '../Interface/Cta';
import Footer from '../Interface/Footer';
import BuyAhome from '../Services/BuyAhome';
import RentAhome from '../Services/RentAhome';
import SellAhome from '../Services/SellAhome';
import Button from "../contectUs/Button";
import ContactForm from "../contectUs/ContactForm";
import ContactHeader from '../contectUs/ContactHeader';
import Button1 from "../enquiryForm/Button-enquiry";
import EnquiryForm from "../enquiryForm/enquiryForm";
import EnquiryHeader from "../enquiryForm/enquiryHeader";
import Cart from "../cart/Cart";

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/auth';
  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

function Routing() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (property) => {
    setCart((prevCart) => [...prevCart, property]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/homepage" element={<Navigate to="/interface" />} />
        <Route path="/interface" element={
          <>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            {/* Pass handleAddToCart as a prop to PropertySection */}
            <PropertySection onAddToCart={handleAddToCart} />
            <FeaturesSection />
            <BlogSection />
            <CtaSection />
          </>
        } />
        <Route path="/buy-a-home" element={<BuyAhome />} />
        <Route path="/rent-a-home" element={<RentAhome />} />
        <Route path="/sell-a-home" element={<SellAhome />} />
        <Route path="/contact-us" element={
          <>
            <ContactHeader />
            <ContactForm />
            <Button />
          </>
        } />
        <Route path="/enquiry" element={
          <>
            <EnquiryHeader />
            <EnquiryForm />
            <Button1 />
          </>
        } />
        <Route path="/Cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
    </Layout>
  );
}

export default Routing;
