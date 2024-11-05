import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Interface/Header";
import Footer from "../Interface/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/auth";

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layout;
