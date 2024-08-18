import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Interface/Header';
import Footer from '../Interface/Footer';

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current location
  const showHeaderAndFooter = location.pathname !== '/auth'; // Hide header and footer on auth page

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layout;
