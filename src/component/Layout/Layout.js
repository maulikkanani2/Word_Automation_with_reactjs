import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className={`min-h-[calc(100vh_-_80px)] mt-[80px]`}>{children}</div>
      {
        location.pathname.includes("create-scene") ?
        <></> :
        <Footer />

      } 
    </>
  );
};

export default Layout;
