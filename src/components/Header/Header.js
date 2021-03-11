import React from "react";
import headerImage from "./header.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="header-part"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <h1 className="text-center header-text">Sports Freak</h1>
    </div>
  );
};

export default Header;
