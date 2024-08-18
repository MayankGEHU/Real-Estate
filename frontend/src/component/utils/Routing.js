import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "../auth/Login";
import Layout from './Layout';  // Import the Layout component
import HeroSection from '../Interface/Hero';
import AboutSection from '../Interface/About';
import ServiceSection from '../Interface/Service';
import PropertySection from '../Interface/Property';
import FeaturesSection from '../Interface/Feature';
import BlogSection from '../Interface/Blog';
import CtaSection from '../Interface/Cta';
import BuyAhome from '../Services/BuyAhome';
import RentAhome from '../Services/RentAhome';
import SellAhome from '../Services/SellAhome';
import ContactForm from "../contectUs/ContactForm";
import ContactHeader from '../contectUs/ContactHeader';
import Button from "../contectUs/Button";
import Button1 from "../enquiryForm/Button-enquiry";
import EnquiryForm from "../enquiryForm/enquiryForm";
import EnquiryHeader from "../enquiryForm/enquiryHeader";
import Cart from "../cart/Cart";

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
        <Route path="/" element={<Navigate to="/interface" />} /> {/* Default route is /interface */}
        <Route path="/auth" element={<AuthForm />} /> {/* Auth page without header and footer */}
        <Route path="/homepage" element={<Navigate to="/interface" />} />
        <Route path="/interface" element={
          <>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
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
