import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import { Footer } from "../Components/Footer/Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
