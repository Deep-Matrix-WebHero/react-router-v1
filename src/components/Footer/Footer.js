import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;AtaurRahman {new Date().getFullYear()}|All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
