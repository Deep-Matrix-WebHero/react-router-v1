import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()}|Ataur Rahman|All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
