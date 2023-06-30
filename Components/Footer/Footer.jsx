import React from "react";
import "./Footer.module.css";
import Link from "next/link.js";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#050505" }}>
      <h2 className="text-center m-0 h5 py-2 text-light">
        All rights reserved © 2023 to{" "}
        <Link href={"https://www.facebook.com/Omar.DarkSoul/"} target="_blank" className="text-light opacity-90">
          Omar M. Abdelhamid
        </Link>
      </h2>
    </div>
  );
};
