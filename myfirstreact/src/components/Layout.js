import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Forms } from "./Forms";
export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Forms />
      <Footer />
    </>
  );
};
export default Layout;
